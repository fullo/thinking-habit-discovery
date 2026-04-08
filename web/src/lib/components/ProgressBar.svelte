<script>
	import { t } from '$lib/stores/locale.js';
	import { sections } from '$lib/data/questions.js';

	export let currentSection = 0;
</script>

<nav class="progress" aria-label={$t('quiz.progress')}>
	{#each sections as section, i}
		<div
			class="step"
			class:active={i === currentSection}
			class:done={i < currentSection}
			aria-current={i === currentSection ? 'step' : undefined}
		>
			<span class="label">{section.id}</span>
		</div>
		{#if i < sections.length - 1}
			<div class="connector" class:done={i < currentSection}></div>
		{/if}
	{/each}
</nav>

<style>
	.progress {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 0;
		padding: 1.5rem 0;
	}
	.step {
		width: 2.2rem;
		height: 2.2rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 0.85rem;
		border: 2px solid var(--border);
		color: var(--text-secondary);
		background: var(--bg);
		transition: all 0.2s;
	}
	.step.active {
		border-color: var(--accent);
		color: var(--accent);
		box-shadow: 0 0 0 3px var(--accent-light);
	}
	.step.done {
		border-color: var(--accent);
		background: var(--accent);
		color: white;
	}
	.connector {
		width: 2rem;
		height: 2px;
		background: var(--border);
		transition: background 0.2s;
	}
	.connector.done {
		background: var(--accent);
	}
</style>
