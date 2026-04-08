<script>
	import { t } from '$lib/stores/locale.js';
	import { base } from '$app/paths';
	import { dimensionColors } from '$lib/data/profiles.js';

	let articles = [];
	let articlesByDimension = {};
	let papers = [];
	let papersById = {};

	Promise.all([
		import('$lib/data/articles.js'),
		import('$lib/data/papers.js')
	]).then(([artMod, papMod]) => {
		articles = artMod.articles;
		articlesByDimension = artMod.articlesByDimension;
		papers = papMod.papers;
		papersById = Object.fromEntries(papMod.papers.map((p) => [p.id, p]));
	});

	const sections = [
		{ id: 'D1', title: 'Cognitive Channel', subtitle: 'What you think with' },
		{ id: 'D2', title: 'Strategy & Dynamics', subtitle: 'How you advance your thinking' },
		{ id: 'D3', title: 'Direction', subtitle: 'Where your thinking goes' },
		{ id: 'D4', title: 'Externalization Medium', subtitle: 'How you get thought out' },
		{ id: 'D5', title: 'Logical Form', subtitle: 'The structure of your reasoning' },
		{ id: 'CF', title: 'Facilitating Conditions', subtitle: 'What influences thinking without being thinking' }
	];

	function getPaper(id) {
		return papersById[id] || null;
	}
</script>

<svelte:head>
	<title>Research Blog — {$t('app.title')}</title>
</svelte:head>

<div class="blog-page">
	<h1>The Science Behind Your Thinking Profile</h1>
	<p class="intro">
		This model is built on decades of research in neuroscience, cognitive psychology,
		and philosophy of mind. Each article below explains the theory, what the research
		found, and how we integrated it into the questionnaire.
	</p>

	<nav class="toc" aria-label="Table of contents">
		<h2>Topics</h2>
		{#each sections as sec}
			{@const dimArticles = articlesByDimension[sec.id] || []}
			{#if dimArticles.length > 0}
				<div class="toc-group">
					<strong class="toc-dim" style="color: {dimensionColors[sec.id] || '#6b7280'}">{sec.title}</strong>
					{#each dimArticles as article}
						<a href="#{article.id}" class="toc-link">{article.title}</a>
					{/each}
				</div>
			{/if}
		{/each}
	</nav>

	{#each sections as sec}
		{@const dimArticles = articlesByDimension[sec.id] || []}
		{#if dimArticles.length > 0}
			<section class="dimension-section">
				<h2 class="dim-title" style="color: {dimensionColors[sec.id] || '#6b7280'}">{sec.title}</h2>
				<p class="dim-subtitle">{sec.subtitle}</p>

				{#each dimArticles as article}
					<article class="article-card" id={article.id}>
						<h3>{article.title}</h3>

						<div class="article-body">
							<div class="section-block">
								<h4>The Theory</h4>
								<p>{article.theory}</p>
							</div>

							<div class="section-block">
								<h4>What the Research Found</h4>
								<p>{article.findings}</p>
							</div>

							<div class="section-block integration">
								<h4>How We Use It</h4>
								<p>{article.integration}</p>
							</div>

							{#if article.connectedArticles && article.connectedArticles.length > 0}
								<div class="connected">
									<h4>Related Articles</h4>
									<div class="connected-links">
										{#each article.connectedArticles as connId}
											{@const conn = articles.find((a) => a.id === connId)}
											{#if conn}
												<a href="#{conn.id}" class="connected-link">{conn.title}</a>
											{/if}
										{/each}
									</div>
								</div>
							{/if}

							<details class="papers-detail">
								<summary>References ({article.paperIds.length} paper{article.paperIds.length > 1 ? 's' : ''})</summary>
								<ul class="paper-list">
									{#each article.paperIds as pid}
										{@const paper = getPaper(pid)}
										{#if paper}
											<li>
												<strong>{paper.authors}</strong> ({paper.year}).
												<em>{paper.title}</em>.
												{#if paper.doi}
													<a href="https://doi.org/{paper.doi}" target="_blank" rel="noopener noreferrer">DOI</a>
												{/if}
											</li>
										{/if}
									{/each}
								</ul>
							</details>
						</div>
					</article>
				{/each}
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
		margin-bottom: 1rem;
	}
	.intro {
		font-size: 1rem;
		color: var(--text-secondary);
		margin-bottom: 2rem;
		line-height: 1.6;
	}

	/* TOC */
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
	.toc-group {
		margin-bottom: 0.75rem;
	}
	.toc-dim {
		display: block;
		font-size: 0.85rem;
		margin-bottom: 0.25rem;
	}
	.toc-link {
		display: block;
		padding: 0.2rem 0 0.2rem 1rem;
		font-size: 0.85rem;
		color: var(--text);
		text-decoration: none;
		border-left: 2px solid var(--border);
		transition: border-color 0.15s;
	}
	.toc-link:hover {
		border-left-color: var(--accent);
		color: var(--accent);
	}

	/* Sections */
	.dimension-section {
		margin: 3rem 0;
		padding-top: 1.5rem;
		border-top: 2px solid var(--border);
	}
	.dim-title {
		font-size: 1.4rem;
		margin-bottom: 0.25rem;
	}
	.dim-subtitle {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
	}

	/* Article cards */
	.article-card {
		margin-bottom: 2.5rem;
		padding: 1.5rem;
		border: 1px solid var(--border);
		border-radius: 12px;
		background: var(--bg);
	}
	.article-card h3 {
		font-size: 1.15rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: var(--text);
	}
	.section-block {
		margin-bottom: 1rem;
	}
	.section-block h4 {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--accent);
		margin-bottom: 0.35rem;
		font-weight: 700;
	}
	.section-block p {
		font-size: 0.93rem;
		line-height: 1.6;
		color: var(--text);
	}
	.integration {
		padding: 0.75rem 1rem;
		background: var(--accent-bg);
		border-radius: 8px;
		border-left: 3px solid var(--accent);
	}

	/* Connected articles */
	.connected {
		margin-top: 0.75rem;
	}
	.connected h4 {
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		color: var(--text-secondary);
		margin-bottom: 0.35rem;
	}
	.connected-links {
		display: flex;
		flex-wrap: wrap;
		gap: 0.4rem;
	}
	.connected-link {
		font-size: 0.8rem;
		padding: 0.2rem 0.6rem;
		border: 1px solid var(--border);
		border-radius: 4px;
		text-decoration: none;
		color: var(--text);
		transition: background 0.15s, border-color 0.15s;
	}
	.connected-link:hover {
		background: var(--bg-hover);
		border-color: var(--accent);
	}

	/* Papers detail */
	.papers-detail {
		margin-top: 1rem;
		font-size: 0.85rem;
	}
	.papers-detail summary {
		cursor: pointer;
		color: var(--text-secondary);
		font-weight: 600;
		padding: 0.5rem 0;
	}
	.papers-detail summary:hover {
		color: var(--text);
	}
	.paper-list {
		list-style: none;
		padding: 0;
		margin-top: 0.5rem;
	}
	.paper-list li {
		padding: 0.4rem 0;
		border-bottom: 1px solid var(--border);
		line-height: 1.5;
	}
	.paper-list a {
		font-weight: 600;
		font-size: 0.8rem;
	}

	/* CTAs */
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
