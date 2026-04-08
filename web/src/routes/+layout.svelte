<script>
	import { t, locale } from '$lib/stores/locale.js';
	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';

	$: if (typeof document !== 'undefined') {
		document.documentElement.lang = $locale;
	}
</script>

<svelte:head>
	<title>{$t('app.title')}</title>
</svelte:head>

<header class="site-header">
	<a href="/" class="logo">{$t('app.title')}</a>
	<LanguageSwitch />
</header>

<main>
	<slot />
</main>

<footer class="site-footer">
	<p>Based on cognitive science research. Open source.</p>
</footer>

<style>
	:global(*) {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	:global(:root) {
		--text: #1a1a2e;
		--text-secondary: #6b7280;
		--bg: #ffffff;
		--bg-hover: #f3f4f6;
		--border: #e5e7eb;
		--accent: #6366f1;
		--accent-light: #a5b4fc;
		--accent-bg: #eef2ff;
		--warning: #f59e0b;
		--font: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
		color-scheme: light dark;
	}
	@media (prefers-color-scheme: dark) {
		:global(:root) {
			--text: #e5e7eb;
			--text-secondary: #9ca3af;
			--bg: #111827;
			--bg-hover: #1f2937;
			--border: #374151;
			--accent: #818cf8;
			--accent-light: #6366f1;
			--accent-bg: #1e1b4b;
			--warning: #fbbf24;
		}
	}
	:global(body) {
		font-family: var(--font);
		color: var(--text);
		background: var(--bg);
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
	}
	.site-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--border);
		max-width: 800px;
		margin: 0 auto;
	}
	.logo {
		font-weight: 800;
		font-size: 1.1rem;
		color: var(--accent);
		text-decoration: none;
	}
	main {
		max-width: 720px;
		margin: 0 auto;
		padding: 2rem 1.5rem;
		min-height: calc(100vh - 10rem);
	}
	.site-footer {
		text-align: center;
		padding: 1.5rem;
		font-size: 0.8rem;
		color: var(--text-secondary);
		border-top: 1px solid var(--border);
	}
</style>
