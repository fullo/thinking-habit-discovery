<script>
	import { t } from '$lib/stores/locale.js';
	import { base } from '$app/paths';
	import { dimensionColors } from '$lib/data/profiles.js';

	export let data;

	$: ({ article, papers, connected } = data);
	$: dimColor = dimensionColors[article.dimension] || '#6b7280';
	$: dimName = article.dimension === 'CF'
		? 'Facilitating Conditions'
		: $t(`dims.${article.dimension}.name`);
</script>

<svelte:head>
	<title>{article.title} — {$t('app.title')}</title>
	<meta name="description" content={article.theory.slice(0, 160)} />
	<meta property="og:title" content={article.title} />
	<meta property="og:description" content={article.theory.slice(0, 160)} />
	<meta property="og:type" content="article" />
</svelte:head>

<article class="article-page">
	<nav class="breadcrumb" aria-label="Breadcrumb">
		<a href="{base}/blog">Blog</a>
		<span aria-hidden="true">/</span>
		<span class="dim-badge" style="background: {dimColor}">{dimName}</span>
	</nav>

	<h1>{article.title}</h1>

	<div class="article-body">
		<section class="block">
			<h2>The Theory</h2>
			<p>{article.theory}</p>
		</section>

		<section class="block">
			<h2>What the Research Found</h2>
			<p>{article.findings}</p>
		</section>

		<section class="block integration">
			<h2>How We Use It</h2>
			<p>{article.integration}</p>
		</section>

		{#if connected.length > 0}
			<section class="block">
				<h2>Related Articles</h2>
				<div class="connected-grid">
					{#each connected as conn}
						<a href="{base}/blog/{conn.id}" class="connected-card" style="border-left-color: {dimensionColors[conn.dimension] || '#6b7280'}">
							<span class="conn-dim">{conn.dimension}</span>
							<span class="conn-title">{conn.title}</span>
						</a>
					{/each}
				</div>
			</section>
		{/if}

		<section class="block">
			<h2>References ({papers.length})</h2>
			<ol class="paper-list">
				{#each papers as paper}
					<li>
						<strong>{paper.authors}</strong> ({paper.year}).
						<em>{paper.title}</em>.
						{#if paper.doi}
							<a href="https://doi.org/{paper.doi}" target="_blank" rel="noopener noreferrer">DOI</a>
						{/if}
					</li>
				{/each}
			</ol>
		</section>
	</div>

	<nav class="bottom-nav">
		<a href="{base}/blog" class="btn btn-secondary">All articles</a>
		<a href="{base}/quiz" class="btn btn-primary">Take the questionnaire</a>
	</nav>
</article>

<style>
	.article-page {
		padding-bottom: 3rem;
	}
	.breadcrumb {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
		margin-bottom: 1.5rem;
		color: var(--text-secondary);
	}
	.breadcrumb a {
		color: var(--text-secondary);
		text-decoration: none;
	}
	.breadcrumb a:hover {
		color: var(--accent);
	}
	.dim-badge {
		display: inline-block;
		padding: 0.1rem 0.5rem;
		border-radius: 4px;
		color: white;
		font-size: 0.75rem;
		font-weight: 700;
	}
	h1 {
		font-size: 1.7rem;
		font-weight: 800;
		line-height: 1.3;
		margin-bottom: 2rem;
	}
	.block {
		margin-bottom: 2rem;
	}
	.block h2 {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--accent);
		font-weight: 700;
		margin-bottom: 0.5rem;
	}
	.block p {
		font-size: 0.95rem;
		line-height: 1.7;
		color: var(--text);
	}
	.integration {
		padding: 1rem 1.25rem;
		background: var(--accent-bg);
		border-radius: 10px;
		border-left: 4px solid var(--accent);
	}
	.connected-grid {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.connected-card {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 0.65rem 1rem;
		border: 1px solid var(--border);
		border-left: 4px solid;
		border-radius: 0 8px 8px 0;
		text-decoration: none;
		transition: background 0.15s;
	}
	.connected-card:hover {
		background: var(--bg-hover);
	}
	.conn-dim {
		font-size: 0.7rem;
		font-weight: 700;
		color: var(--text-secondary);
		min-width: 1.5rem;
	}
	.conn-title {
		font-size: 0.9rem;
		color: var(--text);
	}
	.paper-list {
		padding-left: 1.25rem;
	}
	.paper-list li {
		padding: 0.4rem 0;
		font-size: 0.88rem;
		line-height: 1.5;
		border-bottom: 1px solid var(--border);
	}
	.paper-list a {
		font-weight: 600;
		font-size: 0.8rem;
	}
	.bottom-nav {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 2.5rem;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border);
	}
	.btn {
		padding: 0.7rem 1.5rem;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none;
	}
	.btn-primary {
		background: var(--accent);
		color: white;
	}
	.btn-secondary {
		border: 1px solid var(--border);
		color: var(--text);
	}
</style>
