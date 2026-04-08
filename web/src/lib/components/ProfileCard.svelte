<script>
	import { t } from '$lib/stores/locale.js';
	import { dimensionColors, valueMetadata } from '$lib/data/profiles.js';

	export let dim;
	export let values = [];

	$: color = dimensionColors[dim];
	$: dimName = $t(`dims.${dim}.name`);
	$: dimDesc = $t(`dims.${dim}.desc`);
</script>

<article class="profile-card" style="--dim-color: {color}">
	<header>
		<h3>{dimName}</h3>
		<p class="dim-desc">{dimDesc}</p>
	</header>
	<div class="values">
		{#each values as { value, count }, i}
			{@const meta = valueMetadata[value]}
			{#if meta}
				<div class="value-row" class:dominant={i === 0}>
					<div class="value-header">
						<span class="badge" class:primary={i === 0}>{i === 0 ? $t('results.dominant') : $t('results.secondary')}</span>
						<strong>{$t(meta.nameKey)}</strong>
						<span class="count">({count})</span>
					</div>
					{#if meta.exampleKey && $t(meta.exampleKey) !== meta.exampleKey}
						<p class="example">{$t(meta.exampleKey)}</p>
					{/if}
					<div class="details">
						<p><span class="label">{$t('results.strength')}:</span> {$t(meta.strengthKey)}</p>
						<p><span class="label">{$t('results.risk')}:</span> {$t(meta.riskKey)}</p>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</article>

<style>
	.profile-card {
		border: 2px solid var(--dim-color);
		border-radius: 12px;
		padding: 1.25rem;
		margin-bottom: 1rem;
		background: var(--bg);
	}
	header {
		margin-bottom: 1rem;
	}
	h3 {
		margin: 0;
		color: var(--dim-color);
		font-size: 1.1rem;
	}
	.dim-desc {
		margin: 0.25rem 0 0;
		font-size: 0.85rem;
		color: var(--text-secondary);
	}
	.value-row {
		padding: 0.75rem 0;
	}
	.value-row:not(:last-child) {
		border-bottom: 1px solid var(--border);
	}
	.value-header {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		margin-bottom: 0.5rem;
		flex-wrap: wrap;
	}
	.badge {
		font-size: 0.7rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		padding: 0.15rem 0.5rem;
		border-radius: 4px;
		background: var(--bg-hover);
		color: var(--text-secondary);
	}
	.badge.primary {
		background: var(--dim-color);
		color: white;
	}
	.count {
		font-size: 0.8rem;
		color: var(--text-secondary);
	}
	.example {
		margin: 0 0 0.5rem;
		padding: 0.6rem 0.8rem;
		background: var(--bg-hover);
		border-radius: 8px;
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--text);
		font-style: italic;
	}
	.details p {
		margin: 0.25rem 0;
		font-size: 0.9rem;
		line-height: 1.4;
	}
	.label {
		font-weight: 600;
		color: var(--text);
	}
</style>
