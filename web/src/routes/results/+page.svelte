<script>
	import { t } from '$lib/stores/locale.js';
	import { base } from '$app/paths';
	import { quiz, profile } from '$lib/stores/quiz.js';
	import RadarChart from '$lib/components/RadarChart.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import GapAnalysis from '$lib/components/GapAnalysis.svelte';
	import LlmStrategies from '$lib/components/LlmStrategies.svelte';

	$: p = $profile;

	function retake() {
		quiz.reset();
	}
</script>

<div class="results-page">
	<h1>{$t('results.title')}</h1>

	<section class="radar-section">
		<RadarChart profile={p} />
	</section>

	<section class="cards-section">
		{#each ['D1', 'D2', 'D3', 'D4', 'D5'] as dim}
			<ProfileCard {dim} values={p[dim]} />
		{/each}
	</section>

	<GapAnalysis gaps={p.gap} />

	<LlmStrategies profile={p} />

	<div class="actions">
		<a href="{base}/quiz" class="btn btn-secondary" on:click={retake}>
			{$t('results.retake')}
		</a>
	</div>
</div>

<style>
	.results-page {
		padding-bottom: 3rem;
	}
	h1 {
		font-size: 1.8rem;
		font-weight: 800;
		text-align: center;
		margin-bottom: 2rem;
	}
	.radar-section {
		margin-bottom: 2.5rem;
	}
	.cards-section {
		margin-bottom: 1rem;
	}
	.actions {
		text-align: center;
		margin-top: 2rem;
	}
	.btn {
		display: inline-block;
		padding: 0.7rem 1.5rem;
		border-radius: 8px;
		font-weight: 600;
		font-size: 0.95rem;
		text-decoration: none;
		cursor: pointer;
		transition: background 0.15s;
	}
	.btn-secondary {
		background: var(--bg-hover);
		color: var(--text);
		border: 1px solid var(--border);
	}
	.btn-secondary:hover {
		background: var(--border);
	}
</style>
