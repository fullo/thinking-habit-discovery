<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { t } from '$lib/stores/locale.js';
	import { quiz } from '$lib/stores/quiz.js';
	import { questions, sections } from '$lib/data/questions.js';
	import Question from '$lib/components/Question.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';

	$: currentSection = $quiz.currentSection;
	$: inDeepening = $quiz.inDeepening;
	$: deepeningQuestions = $quiz.deepeningQuestions;
	$: section = sections[currentSection];
	$: currentQuestions = inDeepening ? deepeningQuestions : questions.filter((q) => q.section === section?.id);
	$: isLast = currentSection === sections.length - 1 && !inDeepening;

	let validationError = false;
	let unansweredIds = [];

	function next() {
		// Validate: at least 1 answer per question in current section
		// Deepening questions are optional
		if (!inDeepening) {
			const missing = currentQuestions.filter(
				(q) => !$quiz.answers[q.id] || $quiz.answers[q.id].length === 0
			);
			if (missing.length > 0) {
				validationError = true;
				unansweredIds = missing.map((q) => q.id);
				// Scroll to first unanswered
				const el = document.getElementById('q-' + missing[0].id);
				if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
				return;
			}
		}

		validationError = false;
		unansweredIds = [];

		if (isLast || $quiz.completed) {
			quiz.nextSection();
			goto(`${base}/results`);
		} else {
			quiz.nextSection();
			if ($quiz.completed) {
				goto(`${base}/results`);
				return;
			}
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}
	}

	function prev() {
		validationError = false;
		unansweredIds = [];
		quiz.prevSection();
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0, behavior: 'smooth' });
		}
	}
</script>

<svelte:head>
	<title>{$t('quiz.pageTitle') || 'Quiz'} — {$t('app.title')}</title>
	<meta name="description" content={$t('quiz.instruction')} />
</svelte:head>

<div class="quiz-page" aria-live="polite">
	<ProgressBar currentSection={currentSection} />

	{#if inDeepening}
		<div class="deepening-badge">
			<span class="badge-icon">&#x1F50D;</span>
			{$t('quiz.deepeningTitle') || 'Deepening'}
		</div>
		<h2 class="section-title">
			<span class="section-letter deep">+</span>
			{$t('quiz.deepeningSubtitle') || 'Based on your answers, we have a few more questions'}
		</h2>
		<p class="deepening-hint">{$t('quiz.deepeningOptional') || 'These questions are optional — skip if none apply.'}</p>
	{:else}
		<h2 class="section-title">
			<span class="section-letter">{section?.id}</span>
			{$t(section?.labelKey || '')}
		</h2>
	{/if}

	{#if validationError}
		<div class="validation-error" role="alert">
			{$t('quiz.validationError') || 'Please answer all questions before continuing.'}
		</div>
	{/if}

	{#each currentQuestions as q (q.id)}
		<div class:unanswered={unansweredIds.includes(q.id)}>
			<Question question={q} answers={$quiz.answers[q.id] || []} />
		</div>
	{/each}

	<nav class="nav-buttons">
		{#if currentSection > 0 || inDeepening}
			<button class="btn btn-secondary" on:click={prev}>
				{$t('quiz.prev')}
			</button>
		{:else}
			<div></div>
		{/if}
		<button class="btn btn-primary" on:click={next}>
			{isLast ? $t('quiz.results') : $t('quiz.next')}
		</button>
	</nav>
</div>

<style>
	.quiz-page {
		padding-bottom: 2rem;
	}
	.deepening-badge {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.3rem 0.8rem;
		background: var(--accent-bg);
		border: 1px solid var(--accent-light);
		border-radius: 20px;
		font-size: 0.8rem;
		font-weight: 600;
		color: var(--accent);
		margin-bottom: 0.75rem;
	}
	.badge-icon {
		font-size: 0.9rem;
	}
	.deepening-hint {
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin-bottom: 1.5rem;
		font-style: italic;
	}
	.section-title {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.2rem;
		margin-bottom: 2rem;
		color: var(--text);
	}
	.section-letter {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border-radius: 50%;
		background: var(--accent);
		color: white;
		font-weight: 800;
		font-size: 0.9rem;
		flex-shrink: 0;
	}
	.section-letter.deep {
		background: var(--warning);
	}
	.validation-error {
		padding: 0.75rem 1rem;
		background: #fef2f2;
		border: 1px solid #fca5a5;
		border-radius: 8px;
		color: #991b1b;
		font-size: 0.9rem;
		font-weight: 500;
		margin-bottom: 1.5rem;
	}
	:global([data-theme="dark"]) .validation-error,
	:global(:root:not([data-theme="light"])) .validation-error {
		background: #450a0a;
		border-color: #7f1d1d;
		color: #fca5a5;
	}
	.unanswered :global(.question) {
		border-left: 3px solid #ef4444;
		padding-left: 0.75rem;
	}
	.nav-buttons {
		display: flex;
		justify-content: space-between;
		margin-top: 2rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border);
	}
	.btn {
		padding: 0.7rem 1.5rem;
		border: none;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.95rem;
		cursor: pointer;
		transition: background 0.15s, transform 0.1s;
	}
	.btn-primary {
		background: var(--accent);
		color: white;
	}
	.btn-primary:hover {
		background: #4f46e5;
		transform: translateY(-1px);
	}
	.btn-secondary {
		background: var(--bg-hover);
		color: var(--text);
		border: 1px solid var(--border);
	}
	.btn-secondary:hover {
		background: var(--border);
	}
</style>
