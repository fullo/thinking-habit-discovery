<script>
	import { t } from '$lib/stores/locale.js';
</script>

<section class="landing">
	<h1>{$t('app.title')}</h1>
	<p class="subtitle">{$t('app.subtitle')}</p>

	<div class="features">
		<div class="feature">
			<span class="icon">&#x1f9e0;</span>
			<h3>{$t('landing.feature1Title')}</h3>
			<p>{$t('landing.feature1Desc')}</p>
		</div>
		<div class="feature">
			<span class="icon">&#x1f50d;</span>
			<h3>{$t('landing.feature2Title')}</h3>
			<p>{$t('landing.feature2Desc')}</p>
		</div>
		<div class="feature">
			<span class="icon">&#x1f4ac;</span>
			<h3>{$t('landing.feature3Title')}</h3>
			<p>{$t('landing.feature3Desc')}</p>
		</div>
	</div>

	<div class="info">
		<p>{$t('landing.info')}</p>
	</div>

	<a href="/quiz" class="cta">{$t('app.startQuiz')}</a>
</section>

<style>
	.landing {
		text-align: center;
		padding: 3rem 0;
	}
	h1 {
		font-size: 2.2rem;
		font-weight: 800;
		color: var(--text);
		margin-bottom: 0.5rem;
	}
	.subtitle {
		font-size: 1.15rem;
		color: var(--text-secondary);
		margin-bottom: 2.5rem;
	}
	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
		text-align: left;
	}
	.feature {
		padding: 1.25rem;
		border: 1px solid var(--border);
		border-radius: 12px;
	}
	.icon {
		font-size: 1.5rem;
		display: block;
		margin-bottom: 0.5rem;
	}
	.feature h3 {
		font-size: 0.95rem;
		margin-bottom: 0.3rem;
	}
	.feature p {
		font-size: 0.85rem;
		color: var(--text-secondary);
		line-height: 1.5;
	}
	.info {
		margin-bottom: 2rem;
		font-size: 0.9rem;
		color: var(--text-secondary);
	}
	.cta {
		display: inline-block;
		padding: 0.85rem 2rem;
		background: var(--accent);
		color: white;
		text-decoration: none;
		border-radius: 10px;
		font-weight: 700;
		font-size: 1.05rem;
		transition: background 0.15s, transform 0.1s;
	}
	.cta:hover {
		background: #4f46e5;
		transform: translateY(-1px);
	}
</style>
