<script>
	import { theme } from '$lib/stores/theme.js';

	const modes = ['system', 'light', 'dark'];
	const icons = { system: '\u25D1', light: '\u2600', dark: '\u263E' };
	const labels = { system: 'Auto', light: 'Light', dark: 'Dark' };

	function cycle() {
		const idx = modes.indexOf($theme);
		const next = modes[(idx + 1) % modes.length];
		theme.set(next);
	}
</script>

<button
	class="theme-toggle"
	on:click={cycle}
	aria-label="Theme: {labels[$theme]}"
	title="{labels[$theme]}"
>
	<span class="icon">{icons[$theme]}</span>
</button>

<style>
	.theme-toggle {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 2rem;
		height: 2rem;
		border: 1px solid var(--border);
		border-radius: 6px;
		background: transparent;
		color: var(--text-secondary);
		font-size: 1rem;
		cursor: pointer;
		transition: background 0.15s, color 0.15s;
	}
	.theme-toggle:hover {
		background: var(--bg-hover);
		color: var(--text);
	}
</style>
