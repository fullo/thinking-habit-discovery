import { writable, derived } from 'svelte/store';
import { questions, sections } from '$lib/data/questions.js';
import { deepeningRules, getDeepeningQuestions } from '$lib/data/deepening.js';

/** All deepening questions flat, for lookup */
const allDeepeningQuestions = deepeningRules.flatMap((r) => r.questions);

/** Find a question by ID across base + deepening */
function findQuestion(qId) {
	return questions.find((q) => q.id === qId)
		|| allDeepeningQuestions.find((q) => q.id === qId);
}

/** Compute dimension scores from answers */
function computeScores(answers) {
	const dims = { D1: {}, D2: {}, D3: {}, D4: {}, D5: {}, D4_dest: {}, gap: [] };

	for (const [qId, selected] of Object.entries(answers)) {
		const question = findQuestion(qId);
		if (!question) continue;

		for (const optIdx of selected) {
			const opt = question.options[optIdx];
			if (!opt?.mapping) continue;

			for (const m of opt.mapping) {
				if (m.dim === 'GAP') {
					dims.gap.push(m.value);
				} else if (m.dim === 'D4_dest') {
					dims.D4_dest[m.value] = (dims.D4_dest[m.value] || 0) + 1;
				} else {
					dims[m.dim][m.value] = (dims[m.dim][m.value] || 0) + 1;
				}
			}
		}
	}

	return dims;
}

/**
 * Encode answers as compact URL query string.
 * Format: ?a=Q1:0,1|Q2:2|Q3:0...
 * Each question ID followed by colon and selected option indices.
 */
export function encodeAnswers(answers) {
	const parts = [];
	for (const [qId, selected] of Object.entries(answers)) {
		if (selected && selected.length > 0) {
			parts.push(`${qId}:${selected.join(',')}`);
		}
	}
	return parts.join('|');
}

/**
 * Decode answers from URL query string back to answers object.
 */
export function decodeAnswers(encoded) {
	if (!encoded) return {};
	const answers = {};
	const parts = encoded.split('|');
	for (const part of parts) {
		const [qId, indices] = part.split(':');
		if (qId && indices) {
			answers[qId] = indices.split(',').map(Number).filter((n) => !isNaN(n) && n >= 0 && n < 10);
		}
	}
	return answers;
}

function createQuizStore() {
	const { subscribe, set, update } = writable({
		answers: {},
		currentSection: 0,
		completed: false,
		deepeningQuestions: [],
		inDeepening: false
	});

	return {
		subscribe,
		toggleAnswer(questionId, optionIndex) {
			update((state) => {
				const current = state.answers[questionId] || [];
				const idx = current.indexOf(optionIndex);
				let updated;
				if (idx >= 0) {
					updated = current.filter((i) => i !== optionIndex);
				} else if (current.length < 2) {
					updated = [...current, optionIndex];
				} else {
					updated = [current[1], optionIndex];
				}
				return { ...state, answers: { ...state.answers, [questionId]: updated } };
			});
		},
		/**
		 * Check if all questions in current view have at least 1 answer.
		 * Returns { valid, unanswered } where unanswered is the list of question IDs missing answers.
		 */
		validateCurrentSection(state, currentQuestions) {
			const unanswered = currentQuestions.filter(
				(q) => !state.answers[q.id] || state.answers[q.id].length === 0
			);
			return { valid: unanswered.length === 0, unanswered: unanswered.map((q) => q.id) };
		},
		nextSection() {
			update((state) => {
				if (state.inDeepening) {
					const next = state.currentSection + 1;
					if (next >= sections.length) {
						return { ...state, completed: true, inDeepening: false, deepeningQuestions: [] };
					}
					return { ...state, currentSection: next, inDeepening: false, deepeningQuestions: [] };
				}

				const currentSectionId = sections[state.currentSection]?.id;
				const currentScores = computeScores(state.answers);
				const deepQ = getDeepeningQuestions(currentSectionId, currentScores);

				if (deepQ.length > 0) {
					return { ...state, deepeningQuestions: deepQ, inDeepening: true };
				}

				const next = state.currentSection + 1;
				if (next >= sections.length) {
					return { ...state, completed: true };
				}
				return { ...state, currentSection: next };
			});
		},
		prevSection() {
			update((state) => {
				if (state.inDeepening) {
					return { ...state, inDeepening: false, deepeningQuestions: [] };
				}
				return { ...state, currentSection: Math.max(0, state.currentSection - 1) };
			});
		},
		/** Load answers from encoded string (for URL sharing) */
		loadFromEncoded(encoded) {
			const answers = decodeAnswers(encoded);
			set({ answers, currentSection: sections.length - 1, completed: true, deepeningQuestions: [], inDeepening: false });
		},
		reset() {
			set({ answers: {}, currentSection: 0, completed: false, deepeningQuestions: [], inDeepening: false });
		}
	};
}

export const quiz = createQuizStore();

export const scores = derived(quiz, ($quiz) => computeScores($quiz.answers));

export const profile = derived(scores, ($scores) => {
	function topN(dimScores, n = 2) {
		const entries = Object.entries(dimScores);
		entries.sort((a, b) => b[1] - a[1]);
		return entries.slice(0, n).map(([value, count]) => ({ value, count }));
	}

	return {
		D1: topN($scores.D1),
		D2: topN($scores.D2, 3),
		D3: topN($scores.D3, 3),
		D4: topN($scores.D4),
		D5: topN($scores.D5),
		D4_dest: topN($scores.D4_dest),
		gap: $scores.gap,
		raw: $scores
	};
});
