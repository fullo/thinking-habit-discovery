<script>
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import { t } from '$lib/stores/locale.js';
	import { quiz } from '$lib/stores/quiz.js';
	import { questions, sections } from '$lib/data/questions.js';
	import Question from '$lib/components/Question.svelte';
	import ProgressBar from '$lib/components/ProgressBar.svelte';

	$: currentSection = $quiz.currentSection;
	$: section = sections[currentSection];
	$: sectionQuestions = questions.filter((q) => q.section === section?.id);
	$: isLast = currentSection === sections.length - 1;

	function next() {
		if (isLast) {
			quiz.nextSection();
			goto(`${base}/results`);
		} else {
			quiz.nextSection();
			if (typeof window !== 'undefined') {
				window.scrollTo({ top: 0, behavior: 'smooth' });
			}
		}
	}

	function prev() {
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

	<h2 class="section-title">
		<span class="section-letter">{section?.id}</span>
		{$t(section?.labelKey || '')}
	</h2>

	{#each sectionQuestions as q (q.id)}
		<Question question={q} answers={$quiz.answers[q.id] || []} />
	{/each}

	<nav class="nav-buttons">
		{#if currentSection > 0}
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
