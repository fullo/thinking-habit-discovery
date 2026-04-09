<script>
	import { onMount } from 'svelte';
	import { t, locale } from '$lib/stores/locale.js';
	import { theme } from '$lib/stores/theme.js';
	import { base } from '$app/paths';
	import LanguageSwitch from '$lib/components/LanguageSwitch.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	onMount(() => {
		theme.init();
	});

	$: if (typeof document !== 'undefined') {
		document.documentElement.lang = $locale;
	}
</script>

<svelte:head>
	<title>{$t('app.title')}</title>
</svelte:head>

<a href="#main-content" class="skip-link">Skip to content</a>

<header class="site-header">
	<a href="{base}/" class="logo">{$t('app.title')}</a>
	<nav class="header-nav" aria-label="Main">
		<a href="{base}/about" class="nav-link">About</a>
		<a href="{base}/blog" class="nav-link">Blog</a>
		<a href="{base}/skills" class="nav-link">Skills</a>
	</nav>
	<div class="header-controls">
		<ThemeToggle />
		<LanguageSwitch />
	</div>
</header>

<main id="main-content">
	<slot />
</main>

<footer class="site-footer">
	<p>Based on cognitive science research. <a href="https://github.com/fullo/thinking-habit-discovery" class="footer-link">Open source</a>.</p>
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
	/* System preference dark mode */
	@media (prefers-color-scheme: dark) {
		:global(:root:not([data-theme="light"])) {
			--text: #e5e7eb;
			--text-secondary: #9ca3af;
			--bg: #111827;
			--bg-hover: #1f2937;
			--border: #374151;
			--accent: #6d7bf7;
			--accent-light: #6366f1;
			--accent-bg: #1e1b4b;
			--warning: #fbbf24;
		}
	}
	/* Explicit dark mode toggle */
	:global([data-theme="dark"]) {
		--text: #e5e7eb;
		--text-secondary: #9ca3af;
		--bg: #111827;
		--bg-hover: #1f2937;
		--border: #374151;
		--accent: #6d7bf7;
		--accent-light: #6366f1;
		--accent-bg: #1e1b4b;
		--warning: #fbbf24;
	}
	:global(body) {
		font-family: var(--font);
		color: var(--text);
		background: var(--bg);
		line-height: 1.6;
		-webkit-font-smoothing: antialiased;
	}
	/* Accessibility: focus visible */
	:global(:focus-visible) {
		outline: 2px solid var(--accent);
		outline-offset: 2px;
	}
	:global(a) {
		color: var(--accent);
	}
	.skip-link {
		position: absolute;
		top: -100%;
		left: 1rem;
		padding: 0.5rem 1rem;
		background: var(--accent);
		color: white;
		border-radius: 0 0 6px 6px;
		font-weight: 600;
		font-size: 0.9rem;
		text-decoration: none;
		z-index: 100;
	}
	.skip-link:focus {
		top: 0;
	}
	.site-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		border-bottom: 1px solid var(--border);
		max-width: 800px;
		margin: 0 auto;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.logo {
		font-weight: 800;
		font-size: 1.1rem;
		color: var(--accent);
		text-decoration: none;
	}
	.header-nav {
		display: flex;
		gap: 1rem;
	}
	.nav-link {
		font-size: 0.9rem;
		font-weight: 500;
		color: var(--text-secondary);
		text-decoration: none;
		transition: color 0.15s;
	}
	.nav-link:hover {
		color: var(--text);
	}
	.header-controls {
		display: flex;
		align-items: center;
		gap: 0.5rem;
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
	.footer-link {
		color: var(--text-secondary);
	}
</style>
