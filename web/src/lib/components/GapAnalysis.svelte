<script>
	import { t } from '$lib/stores/locale.js';
	import { gapStrategies } from '$lib/data/profiles.js';

	export let gaps = [];

	$: uniqueGaps = [...new Set(gaps)].filter((g) => g !== 'none');
	$: hasGap = uniqueGaps.length > 0;
</script>

<section class="gap-section">
	<h2>{$t('results.gapAnalysis')}</h2>

	{#if hasGap}
		<p class="intro">{$t('results.gapIntro')}</p>
		{#each uniqueGaps as gapId}
			{@const gap = gapStrategies[gapId]}
			{#if gap}
				<div class="gap-card">
					<p class="gap-desc">{$t(gap.descKey)}</p>
					<div class="strategy">
						<strong>{$t('results.strategy')}:</strong>
						<p>{$t(gap.strategyKey)}</p>
					</div>
				</div>
			{/if}
		{/each}
	{:else}
		<p class="no-gap">{$t('results.noGap')}</p>
	{/if}
</section>

<style>
	.gap-section {
		margin: 2rem 0;
	}
	h2 {
		font-size: 1.3rem;
		margin-bottom: 0.75rem;
		color: var(--text);
	}
	.intro {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 1rem;
	}
	.gap-card {
		border-left: 3px solid var(--warning);
		padding: 0.75rem 1rem;
		margin-bottom: 0.75rem;
		background: var(--bg-hover);
		border-radius: 0 8px 8px 0;
	}
	.gap-desc {
		margin: 0 0 0.5rem;
		font-size: 0.95rem;
	}
	.strategy {
		font-size: 0.9rem;
	}
	.strategy p {
		margin: 0.25rem 0 0;
	}
	.no-gap {
		color: var(--text-secondary);
		font-style: italic;
	}
</style>
