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

	const dims = [
		{ id: 'D1', labelKey: 'dims.D1.name', descKey: 'dims.D1.desc' },
		{ id: 'D2', labelKey: 'dims.D2.name', descKey: 'dims.D2.desc' },
		{ id: 'D3', labelKey: 'dims.D3.name', descKey: 'dims.D3.desc' },
		{ id: 'D4', labelKey: 'dims.D4.name', descKey: 'dims.D4.desc' },
		{ id: 'D5', labelKey: 'dims.D5.name', descKey: 'dims.D5.desc' }
	];
</script>

<svelte:head>
	<title>{$t('about.title')} — {$t('app.title')}</title>
	<meta name="description" content={$t('about.intro')} />
</svelte:head>

<article class="about-page">
	<h1>{$t('about.title')}</h1>
	<p class="intro">{$t('about.intro')}</p>

	<section class="model-section">
		<h2>{$t('about.model')}</h2>
		<p>{$t('about.modelDesc')}</p>
		<div class="dim-grid">
			{#each dims as dim}
				<div class="dim-card" style="border-left-color: {dimensionColors[dim.id]}">
					<h3 style="color: {dimensionColors[dim.id]}">{$t(dim.labelKey)}</h3>
					<p>{$t(dim.descKey)}</p>
				</div>
			{/each}
		</div>
	</section>

	<section class="skill-section">
		<h2>{$t('about.skillTitle')}</h2>
		<p>{$t('about.skillIntro')}</p>

		<div class="skill-grid">
			<div class="skill-card primary">
				<div class="skill-header">
					<span class="skill-cmd">/thinking-profile</span>
				</div>
				<h3>{$t('about.skill1Title')}</h3>
				<p>{$t('about.skill1Desc')}</p>
			</div>
			<div class="skill-card">
				<div class="skill-header">
					<span class="skill-cmd">/thinking-translator</span>
				</div>
				<h3>{$t('about.skill2Title')}</h3>
				<p>{$t('about.skill2Desc')}</p>
			</div>
			<div class="skill-card">
				<div class="skill-header">
					<span class="skill-cmd">/thinking-bridge</span>
				</div>
				<h3>{$t('about.skill3Title')}</h3>
				<p>{$t('about.skill3Desc')}</p>
			</div>
		</div>

		<div class="install-box">
			<h3>{$t('about.installTitle')}</h3>
			<div class="code-block">
				<code>claude plugin marketplace add fullo/claude-plugins-marketplace</code>
			</div>
			<div class="code-block">
				<code>claude plugin install thinking-habit@fullo-plugins</code>
			</div>
			<p class="install-note">{$t('about.installNote')}</p>
			<div class="install-links">
				<a href="https://github.com/fullo/claude-thinking-habit" target="_blank" rel="noopener noreferrer" class="install-link">GitHub</a>
				<a href="https://fullo.github.io/claude-thinking-habit/" target="_blank" rel="noopener noreferrer" class="install-link">Plugin website</a>
				<a href="https://github.com/fullo/claude-plugins-marketplace" target="_blank" rel="noopener noreferrer" class="install-link">Marketplace</a>
			</div>
		</div>
	</section>

	<section class="papers-section">
		<h2>{$t('about.papers')}</h2>
		<p class="papers-intro">{$t('about.papersDesc')}</p>

		{#each ['D1', 'D2', 'D3', 'D4', 'D5', 'CF'] as dimId}
			{@const dimPapers = papersByDimension[dimId] || []}
			{#if dimPapers.length > 0}
				<h3 class="dim-heading" style="color: {dimensionColors[dimId] || '#6b7280'}">
					{dimId === 'CF' ? 'Facilitating Conditions' : $t(`dims.${dimId}.name`)}
					<span class="paper-count">({dimPapers.length})</span>
				</h3>
				<ul class="paper-list">
					{#each dimPapers as paper}
						<li>
							<strong>{paper.authors}</strong> ({paper.year}).
							<em>{paper.title}</em>.
							{#if paper.doi}
								<a href="https://doi.org/{paper.doi}" target="_blank" rel="noopener noreferrer">DOI</a>
							{/if}
						</li>
					{/each}
				</ul>
			{/if}
		{/each}
	</section>

	<div class="cta-row">
		<a href="{base}/quiz" class="cta">{$t('app.startQuiz')}</a>
		<a href="{base}/blog" class="cta-secondary">Blog</a>
	</div>
</article>

<style>
	.about-page {
		padding-bottom: 3rem;
	}
	h1 {
		font-size: 1.8rem;
		font-weight: 800;
		margin-bottom: 1rem;
	}
	.intro {
		font-size: 1.05rem;
		color: var(--text-secondary);
		margin-bottom: 2rem;
		line-height: 1.6;
	}
	h2 {
		font-size: 1.3rem;
		margin: 2rem 0 0.75rem;
	}
	.dim-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin: 1rem 0 2rem;
	}
	.dim-card {
		padding: 1rem;
		border: 1px solid var(--border);
		border-left: 4px solid;
		border-radius: 0 8px 8px 0;
	}
	.dim-card h3 {
		font-size: 0.95rem;
		margin-bottom: 0.3rem;
	}
	.dim-card p {
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.skill-section {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 2px solid var(--border);
	}
	.skill-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 1rem;
		margin: 1.25rem 0 1.5rem;
	}
	.skill-card {
		padding: 1.25rem;
		border: 1px solid var(--border);
		border-radius: 10px;
		background: var(--bg);
	}
	.skill-card.primary {
		border-color: var(--accent);
		box-shadow: 0 0 0 1px var(--accent-light);
	}
	.skill-header {
		margin-bottom: 0.5rem;
	}
	.skill-cmd {
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 0.78rem;
		font-weight: 600;
		padding: 0.15rem 0.5rem;
		background: var(--bg-hover);
		border-radius: 4px;
		color: var(--accent);
	}
	.skill-card h3 {
		font-size: 0.95rem;
		margin-bottom: 0.3rem;
	}
	.skill-card p {
		font-size: 0.83rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}
	.install-box {
		padding: 1.25rem;
		background: var(--bg-hover);
		border-radius: 10px;
		margin-top: 1rem;
	}
	.install-box h3 {
		font-size: 0.95rem;
		margin-bottom: 0.75rem;
	}
	.code-block {
		margin-bottom: 0.5rem;
	}
	.code-block code {
		display: block;
		font-family: 'JetBrains Mono', ui-monospace, monospace;
		font-size: 0.82rem;
		padding: 0.5rem 0.75rem;
		background: #1e293b;
		color: #e2e8f0;
		border-radius: 6px;
		overflow-x: auto;
	}
	.install-note {
		font-size: 0.82rem;
		color: var(--text-secondary);
		margin: 0.75rem 0;
		font-style: italic;
	}
	.install-links {
		display: flex;
		gap: 0.75rem;
		flex-wrap: wrap;
	}
	.install-link {
		font-size: 0.82rem;
		font-weight: 600;
		color: var(--accent);
		text-decoration: none;
	}
	.install-link:hover {
		text-decoration: underline;
	}
	.papers-section {
		margin-top: 2rem;
	}
	.papers-intro {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 1.5rem;
	}
	.dim-heading {
		font-size: 1rem;
		margin: 1.5rem 0 0.5rem;
	}
	.paper-count {
		font-weight: 400;
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.paper-list {
		list-style: none;
		padding: 0;
	}
	.paper-list li {
		padding: 0.5rem 0;
		border-bottom: 1px solid var(--border);
		font-size: 0.88rem;
		line-height: 1.5;
	}
	.paper-list a {
		font-size: 0.8rem;
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
