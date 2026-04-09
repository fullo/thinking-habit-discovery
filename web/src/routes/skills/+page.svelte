<script>
	import { t } from '$lib/stores/locale.js';
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>{$t('skills.pageTitle')} — {$t('app.title')}</title>
	<meta name="description" content={$t('skills.pageDesc')} />
</svelte:head>

<article class="skills-page">
	<h1>{$t('skills.pageTitle')}</h1>
	<p class="intro">{$t('skills.intro')}</p>

	<section class="skills-grid">
		<div class="skill-card primary">
			<div class="skill-header">
				<span class="skill-cmd">/thinking-profile</span>
				<span class="skill-badge">{$t('skills.coreBadge')}</span>
			</div>
			<h2>{$t('skills.profileTitle')}</h2>
			<p class="skill-desc">{$t('skills.profileDesc')}</p>
			<div class="skill-details">
				<h3>{$t('skills.howItWorks')}</h3>
				<ol>
					<li>{$t('skills.profileStep1')}</li>
					<li>{$t('skills.profileStep2')}</li>
					<li>{$t('skills.profileStep3')}</li>
					<li>{$t('skills.profileStep4')}</li>
					<li>{$t('skills.profileStep5')}</li>
				</ol>
			</div>
			<p class="skill-note">{$t('skills.profileNote')}</p>
		</div>

		<div class="skill-card">
			<div class="skill-header">
				<span class="skill-cmd">/thinking-translator</span>
			</div>
			<h2>{$t('skills.translatorTitle')}</h2>
			<p class="skill-desc">{$t('skills.translatorDesc')}</p>
			<div class="skill-example">
				<h3>{$t('skills.exampleTitle')}</h3>
				<div class="example-block">
					<div class="example-label">{$t('skills.inputLabel')}</div>
					<p class="example-text">{$t('skills.translatorInput')}</p>
				</div>
				<div class="example-arrow">&#x2193;</div>
				<div class="example-block output">
					<div class="example-label">{$t('skills.outputLabel')}</div>
					<p class="example-text">{$t('skills.translatorOutput')}</p>
				</div>
			</div>
		</div>

		<div class="skill-card">
			<div class="skill-header">
				<span class="skill-cmd">/thinking-bridge</span>
			</div>
			<h2>{$t('skills.bridgeTitle')}</h2>
			<p class="skill-desc">{$t('skills.bridgeDesc')}</p>
			<div class="skill-example">
				<h3>{$t('skills.exampleTitle')}</h3>
				<div class="example-block">
					<div class="example-label">{$t('skills.bridgeFromLabel')}</div>
					<p class="example-text">{$t('skills.bridgeFrom')}</p>
				</div>
				<div class="example-arrow">&#x2193;</div>
				<div class="example-block output">
					<div class="example-label">{$t('skills.bridgeToLabel')}</div>
					<p class="example-text">{$t('skills.bridgeTo')}</p>
				</div>
			</div>
		</div>
	</section>

	<section class="install-section">
		<h2>{$t('skills.installTitle')}</h2>
		<div class="install-steps">
			<div class="step">
				<span class="step-num">1</span>
				<div>
					<p class="step-label">{$t('skills.step1Label')}</p>
					<code>claude plugin marketplace add fullo/claude-plugins-marketplace</code>
				</div>
			</div>
			<div class="step">
				<span class="step-num">2</span>
				<div>
					<p class="step-label">{$t('skills.step2Label')}</p>
					<code>claude plugin install thinking-habit@fullo-plugins</code>
				</div>
			</div>
			<div class="step">
				<span class="step-num">3</span>
				<div>
					<p class="step-label">{$t('skills.step3Label')}</p>
					<code>/thinking-profile</code>
				</div>
			</div>
		</div>
		<p class="install-note">{$t('skills.requiresNote')}</p>
		<div class="install-links">
			<a href="https://github.com/fullo/claude-thinking-habit" target="_blank" rel="noopener noreferrer">GitHub</a>
			<a href="https://fullo.github.io/claude-thinking-habit/" target="_blank" rel="noopener noreferrer">{$t('skills.pluginWebsite')}</a>
			<a href="https://github.com/fullo/claude-plugins-marketplace" target="_blank" rel="noopener noreferrer">Marketplace</a>
		</div>
	</section>

	<div class="cta-row">
		<a href="{base}/quiz" class="cta">{$t('app.startQuiz')}</a>
		<a href="{base}/about" class="cta-secondary">{$t('about.title')}</a>
	</div>
</article>

<style>
	.skills-page { padding-bottom: 3rem; }
	h1 { font-size: 1.8rem; font-weight: 800; margin-bottom: 1rem; }
	.intro { font-size: 1.05rem; color: var(--text-secondary); margin-bottom: 2rem; line-height: 1.6; }
	.skills-grid { display: flex; flex-direction: column; gap: 1.5rem; margin-bottom: 2.5rem; }
	.skill-card { padding: 1.5rem; border: 1px solid var(--border); border-radius: 12px; background: var(--bg); }
	.skill-card.primary { border-color: var(--accent); border-width: 2px; }
	.skill-header { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.75rem; }
	.skill-cmd { font-family: ui-monospace, monospace; font-size: 0.82rem; font-weight: 600; padding: 0.2rem 0.6rem; background: var(--bg-hover); border-radius: 4px; color: var(--accent); }
	.skill-badge { font-size: 0.7rem; font-weight: 700; text-transform: uppercase; padding: 0.15rem 0.5rem; background: var(--accent); color: white; border-radius: 4px; }
	.skill-card h2 { font-size: 1.15rem; margin-bottom: 0.5rem; }
	.skill-desc { font-size: 0.93rem; color: var(--text-secondary); line-height: 1.6; margin-bottom: 1rem; }
	.skill-details h3, .skill-example h3 { font-size: 0.82rem; text-transform: uppercase; letter-spacing: 0.05em; color: var(--accent); margin-bottom: 0.5rem; }
	.skill-details ol { padding-left: 1.25rem; font-size: 0.88rem; line-height: 1.7; color: var(--text); }
	.skill-note { font-size: 0.82rem; color: var(--text-secondary); font-style: italic; margin-top: 0.75rem; }
	.skill-example { margin-top: 0.5rem; }
	.example-block { padding: 0.75rem 1rem; border-radius: 8px; background: var(--bg-hover); margin-bottom: 0.25rem; }
	.example-block.output { background: var(--accent-bg); border-left: 3px solid var(--accent); }
	.example-label { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--text-secondary); margin-bottom: 0.25rem; }
	.example-text { font-size: 0.88rem; line-height: 1.5; color: var(--text); font-style: italic; }
	.example-arrow { text-align: center; font-size: 1.2rem; color: var(--text-secondary); padding: 0.15rem 0; }
	.install-section { padding: 1.5rem; background: var(--bg-hover); border-radius: 12px; margin-bottom: 2rem; }
	.install-section h2 { font-size: 1.2rem; margin-bottom: 1rem; }
	.install-steps { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 1rem; }
	.step { display: flex; gap: 0.75rem; align-items: flex-start; }
	.step-num { display: flex; align-items: center; justify-content: center; width: 1.8rem; height: 1.8rem; border-radius: 50%; background: var(--accent); color: white; font-weight: 800; font-size: 0.85rem; flex-shrink: 0; }
	.step-label { font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 0.25rem; }
	.step code, .install-section code { display: block; font-family: ui-monospace, monospace; font-size: 0.82rem; padding: 0.45rem 0.75rem; background: #1e293b; color: #e2e8f0; border-radius: 6px; overflow-x: auto; }
	.install-note { font-size: 0.82rem; color: var(--text-secondary); font-style: italic; margin-bottom: 0.75rem; }
	.install-links { display: flex; gap: 1rem; flex-wrap: wrap; }
	.install-links a { font-size: 0.85rem; font-weight: 600; }
	.cta-row { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
	.cta { padding: 0.7rem 1.5rem; background: var(--accent); color: white; text-decoration: none; border-radius: 8px; font-weight: 700; }
	.cta-secondary { padding: 0.7rem 1.5rem; border: 1px solid var(--border); color: var(--text); text-decoration: none; border-radius: 8px; font-weight: 600; }
</style>
