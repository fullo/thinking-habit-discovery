<script>
	import { locale } from '$lib/stores/locale.js';
</script>

<div class="lang-switch" role="radiogroup" aria-label="Language">
	<button
		class:active={$locale === 'it'}
		on:click={() => locale.set('it')}
		aria-checked={$locale === 'it'}
		role="radio"
	>IT</button>
	<button
		class:active={$locale === 'en'}
		on:click={() => locale.set('en')}
		aria-checked={$locale === 'en'}
		role="radio"
	>EN</button>
</div>

<style>
	.lang-switch {
		display: flex;
		gap: 0;
		border: 1px solid var(--border);
		border-radius: 6px;
		overflow: hidden;
	}
	button {
		padding: 0.35rem 0.75rem;
		border: none;
		background: transparent;
		color: var(--text-secondary);
		font-size: 0.8rem;
		font-weight: 600;
		cursor: pointer;
		transition: background 0.15s, color 0.15s;
	}
	button.active {
		background: var(--accent);
		color: white;
	}
	button:hover:not(.active) {
		background: var(--bg-hover);
	}
</style>
