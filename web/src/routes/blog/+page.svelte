<script>
	import { t } from '$lib/stores/locale.js';
	import { base } from '$app/paths';
	import { dimensionColors } from '$lib/data/profiles.js';
	import { articles, articlesByDimension } from '$lib/data/articles.js';

	const sections = [
		{ id: 'D1', title: 'Cognitive Channel', subtitle: 'What you think with' },
		{ id: 'D2', title: 'Strategy & Dynamics', subtitle: 'How you advance your thinking' },
		{ id: 'D3', title: 'Direction', subtitle: 'Where your thinking goes' },
		{ id: 'D4', title: 'Externalization Medium', subtitle: 'How you get thought out' },
		{ id: 'D5', title: 'Logical Form', subtitle: 'The structure of your reasoning' },
		{ id: 'CF', title: 'Facilitating Conditions', subtitle: 'What influences thinking without being thinking' }
	];
</script>

<svelte:head>
	<title>Research Blog — {$t('app.title')}</title>
	<meta name="description" content="The science behind your thinking profile: {articles.length} articles covering neuroscience, cognitive psychology, and philosophy of mind." />
</svelte:head>

<div class="blog-page">
	<h1>The Science Behind Your Thinking Profile</h1>
	<p class="intro">
		This model is built on decades of research in neuroscience, cognitive psychology,
		and philosophy of mind. Each article below explains the theory, what the research
		found, and how we integrated it into the questionnaire.
	</p>
	<p class="stats">{articles.length} articles &middot; 6 dimensions &middot; 100+ papers</p>

	{#each sections as sec}
		{@const dimArticles = articlesByDimension[sec.id] || []}
		{#if dimArticles.length > 0}
			<section class="dimension-section">
				<h2 style="color: {dimensionColors[sec.id] || '#6b7280'}">{sec.title}</h2>
				<p class="dim-subtitle">{sec.subtitle}</p>

				<div class="article-grid">
					{#each dimArticles as article}
						<a href="{base}/blog/{article.id}" class="article-card" style="--dim: {dimensionColors[sec.id] || '#6b7280'}">
							<h3>{article.title}</h3>
							<p class="excerpt">{article.theory.slice(0, 150)}...</p>
							<span class="meta">{article.paperIds.length} paper{article.paperIds.length > 1 ? 's' : ''}</span>
						</a>
					{/each}
				</div>
			</section>
		{/if}
	{/each}

	<div class="cta-row">
		<a href="{base}/quiz" class="cta">Take the questionnaire</a>
		<a href="{base}/about" class="cta-secondary">About the project</a>
	</div>
</div>

<style>
	.blog-page {
		padding-bottom: 3rem;
	}
	h1 {
		font-size: 1.8rem;
		font-weight: 800;
		margin-bottom: 0.75rem;
	}
	.intro {
		font-size: 1rem;
		color: var(--text-secondary);
		line-height: 1.6;
		margin-bottom: 0.5rem;
	}
	.stats {
		font-size: 0.85rem;
		color: var(--text-secondary);
		margin-bottom: 2rem;
	}
	.dimension-section {
		margin: 2.5rem 0;
		padding-top: 1rem;
		border-top: 2px solid var(--border);
	}
	.dimension-section h2 {
		font-size: 1.3rem;
		margin-bottom: 0.2rem;
	}
	.dim-subtitle {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}
	.article-grid {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.article-card {
		display: block;
		padding: 1rem 1.25rem;
		border: 1px solid var(--border);
		border-left: 4px solid var(--dim);
		border-radius: 0 10px 10px 0;
		text-decoration: none;
		transition: background 0.15s, box-shadow 0.15s;
	}
	.article-card:hover {
		background: var(--bg-hover);
		box-shadow: 0 2px 8px rgba(0,0,0,0.06);
	}
	.article-card h3 {
		font-size: 1rem;
		font-weight: 600;
		color: var(--text);
		margin-bottom: 0.35rem;
	}
	.excerpt {
		font-size: 0.87rem;
		color: var(--text-secondary);
		line-height: 1.5;
		margin-bottom: 0.35rem;
	}
	.meta {
		font-size: 0.75rem;
		color: var(--text-secondary);
		font-weight: 600;
	}
	.cta-row {
		display: flex;
		gap: 1rem;
		justify-content: center;
		margin-top: 2.5rem;
		flex-wrap: wrap;
	}
	.cta {
		padding: 0.7rem 1.5rem;
		background: var(--accent);
		color: white;
		text-decoration: none;
		border-radius: 8px;
		font-weight: 700;
	}
	.cta-secondary {
		padding: 0.7rem 1.5rem;
		border: 1px solid var(--border);
		color: var(--text);
		text-decoration: none;
		border-radius: 8px;
		font-weight: 600;
	}
</style>
