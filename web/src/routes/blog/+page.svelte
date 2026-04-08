<script>
	import { t } from '$lib/stores/locale.js';
	import { base } from '$app/paths';
	import { dimensionColors } from '$lib/data/profiles.js';

	let papers = [];
	let papersByDimension = {};

	import('$lib/data/papers.js').then((mod) => {
		papers = mod.papers;
		papersByDimension = mod.papersByDimension;
	});

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
</svelte:head>

<article class="blog-page">
	<h1>The Science Behind Your Thinking Profile</h1>
	<p class="intro">
		This model is built on decades of research in neuroscience, cognitive psychology,
		and philosophy of mind. Below, we summarize the key papers that inform each
		dimension of the model, explaining what they found and why it matters for
		understanding how you think.
	</p>

	<nav class="toc" aria-label="Table of contents">
		<h2>Dimensions</h2>
		{#each sections as sec}
			<a href="#{sec.id}" class="toc-link" style="border-left-color: {dimensionColors[sec.id] || '#6b7280'}">
				<strong>{sec.title}</strong>
				<span>{sec.subtitle}</span>
			</a>
		{/each}
	</nav>

	{#each sections as sec}
		{@const dimPapers = papersByDimension[sec.id] || []}
		<section id={sec.id} class="dimension-section">
			<h2 style="color: {dimensionColors[sec.id] || '#6b7280'}">{sec.title}</h2>
			<p class="section-subtitle">{sec.subtitle}</p>

			{#if dimPapers.length === 0}
				<p class="loading">Loading papers...</p>
			{:else}
				{#each dimPapers as paper}
					<article class="paper-card" id={paper.id}>
						<h3>{paper.title}</h3>
						<p class="meta">
							{paper.authors} ({paper.year})
							{#if paper.doi}
								&middot; <a href="https://doi.org/{paper.doi}" target="_blank" rel="noopener noreferrer">DOI</a>
							{/if}
						</p>
						<p class="relevance">{paper.relevance}</p>
					</article>
				{/each}
			{/if}
		</section>
	{/each}

	<div class="cta-row">
		<a href="{base}/quiz" class="cta">Take the questionnaire</a>
		<a href="{base}/about" class="cta-secondary">About the project</a>
	</div>
</article>

<style>
	.blog-page {
		padding-bottom: 3rem;
	}
	h1 {
		font-size: 1.8rem;
		font-weight: 800;
		margin-bottom: 1rem;
	}
	.intro {
		font-size: 1rem;
		color: var(--text-secondary);
		margin-bottom: 2rem;
		line-height: 1.6;
	}
	.toc {
		margin-bottom: 2.5rem;
		padding: 1.25rem;
		border: 1px solid var(--border);
		border-radius: 12px;
		background: var(--bg-hover);
	}
	.toc h2 {
		font-size: 0.85rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-secondary);
		margin-bottom: 0.75rem;
	}
	.toc-link {
		display: block;
		padding: 0.4rem 0.75rem;
		margin-bottom: 0.25rem;
		border-left: 3px solid;
		text-decoration: none;
		border-radius: 0 4px 4px 0;
		transition: background 0.15s;
	}
	.toc-link:hover {
		background: var(--bg);
	}
	.toc-link strong {
		display: block;
		font-size: 0.9rem;
		color: var(--text);
	}
	.toc-link span {
		font-size: 0.8rem;
		color: var(--text-secondary);
	}
	.dimension-section {
		margin: 2.5rem 0;
		padding-top: 1rem;
		border-top: 2px solid var(--border);
	}
	.dimension-section h2 {
		font-size: 1.4rem;
		margin-bottom: 0.25rem;
	}
	.section-subtitle {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 1.25rem;
	}
	.paper-card {
		padding: 1rem 0;
		border-bottom: 1px solid var(--border);
	}
	.paper-card h3 {
		font-size: 1rem;
		font-weight: 600;
		margin-bottom: 0.3rem;
		color: var(--text);
	}
	.meta {
		font-size: 0.82rem;
		color: var(--text-secondary);
		margin-bottom: 0.5rem;
	}
	.meta a {
		font-weight: 600;
	}
	.relevance {
		font-size: 0.92rem;
		line-height: 1.55;
		color: var(--text);
	}
	.loading {
		color: var(--text-secondary);
		font-style: italic;
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
