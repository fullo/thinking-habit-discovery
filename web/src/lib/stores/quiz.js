import { writable, derived } from 'svelte/store';
import { questions, sections } from '$lib/data/questions.js';

function createQuizStore() {
	const { subscribe, set, update } = writable({
		answers: {},
		currentSection: 0,
		completed: false
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
		nextSection() {
			update((state) => {
				const next = state.currentSection + 1;
				if (next >= sections.length) {
					return { ...state, completed: true };
				}
				return { ...state, currentSection: next };
			});
		},
		prevSection() {
			update((state) => ({
				...state,
				currentSection: Math.max(0, state.currentSection - 1)
			}));
		},
		reset() {
			set({ answers: {}, currentSection: 0, completed: false });
		}
	};
}

export const quiz = createQuizStore();

export const scores = derived(quiz, ($quiz) => {
	const dims = {
		D1: {}, D2: {}, D3: {}, D4: {}, D5: {},
		D4_dest: {},
		gap: []
	};

	for (const [qId, selected] of Object.entries($quiz.answers)) {
		const question = questions.find((q) => q.id === qId);
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
});

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
