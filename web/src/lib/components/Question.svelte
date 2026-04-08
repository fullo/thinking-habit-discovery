<script>
	import { t } from '$lib/stores/locale.js';
	import { quiz } from '$lib/stores/quiz.js';

	export let question;
	export let answers = [];

	function toggle(idx) {
		quiz.toggleAnswer(question.id, idx);
	}
</script>

<fieldset class="question" aria-labelledby="q-{question.id}">
	<legend id="q-{question.id}" class="question-text">{$t(question.textKey)}</legend>
	<p class="hint">{$t('quiz.selectUpTo2')}</p>
	<div class="options">
		{#each question.options as option, i}
			<button
				class="option"
				class:selected={answers.includes(i)}
				on:click={() => toggle(i)}
				aria-pressed={answers.includes(i)}
				type="button"
			>
				<span class="option-letter">{String.fromCharCode(97 + i)}</span>
				<span class="option-text">{$t(option.labelKey)}</span>
			</button>
		{/each}
	</div>
</fieldset>

<style>
	.question {
		border: none;
		padding: 0;
		margin: 0 0 2rem;
	}
	.question-text {
		font-size: 1.1rem;
		font-weight: 600;
		line-height: 1.5;
		color: var(--text);
		margin-bottom: 0.5rem;
	}
	.hint {
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin-bottom: 1rem;
	}
	.options {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.option {
		display: flex;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 0.85rem 1rem;
		border: 2px solid var(--border);
		border-radius: 10px;
		background: var(--bg);
		cursor: pointer;
		text-align: left;
		transition: border-color 0.15s, background 0.15s, box-shadow 0.15s;
		font-size: 0.95rem;
		line-height: 1.45;
		color: var(--text);
	}
	.option:hover {
		border-color: var(--accent-light);
		background: var(--bg-hover);
	}
	.option.selected {
		border-color: var(--accent);
		background: var(--accent-bg);
		box-shadow: 0 0 0 1px var(--accent);
	}
	.option-letter {
		display: flex;
		align-items: center;
		justify-content: center;
		min-width: 1.6rem;
		height: 1.6rem;
		border-radius: 50%;
		background: var(--bg-hover);
		font-weight: 700;
		font-size: 0.8rem;
		color: var(--text-secondary);
		flex-shrink: 0;
		margin-top: 0.1rem;
	}
	.option.selected .option-letter {
		background: var(--accent);
		color: white;
	}
	.option-text {
		flex: 1;
	}
</style>
