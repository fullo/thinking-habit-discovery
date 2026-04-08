<script>
	import { t } from '$lib/stores/locale.js';
	import { valueMetadata, dimensionColors } from '$lib/data/profiles.js';

	export let profile;

	const dimOrder = ['D1', 'D2', 'D3', 'D5'];

	$: strategies = dimOrder
		.map((dim) => {
			const top = profile[dim]?.[0];
			if (!top) return null;
			const meta = valueMetadata[top.value];
			if (!meta) return null;
			return {
				dim,
				value: top.value,
				name: $t(meta.nameKey),
				tip: $t(meta.llmKey),
				color: dimensionColors[dim]
			};
		})
		.filter(Boolean);
</script>

<section class="llm-section">
	<h2>{$t('results.llmStrategies')}</h2>
	<p class="intro">{$t('results.llmIntro')}</p>

	<div class="strategies">
		{#each strategies as s}
			<div class="strategy-card" style="--card-color: {s.color}">
				<div class="card-header">
					<span class="dim-badge">{$t(`dims.${s.dim}.name`)}</span>
					<strong>{s.name}</strong>
				</div>
				<p class="tip">{s.tip}</p>
			</div>
		{/each}
	</div>
</section>

<style>
	.llm-section {
		margin: 2rem 0;
	}
	h2 {
		font-size: 1.3rem;
		margin-bottom: 0.75rem;
	}
	.intro {
		color: var(--text-secondary);
		font-size: 0.9rem;
		margin-bottom: 1.25rem;
	}
	.strategies {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.strategy-card {
		border: 1px solid var(--border);
		border-left: 4px solid var(--card-color);
		border-radius: 0 10px 10px 0;
		padding: 1rem;
		background: var(--bg);
	}
	.card-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
		flex-wrap: wrap;
	}
	.dim-badge {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		background: var(--card-color);
		color: white;
	}
	.tip {
		margin: 0;
		font-size: 0.9rem;
		line-height: 1.5;
		color: var(--text);
	}
</style>
