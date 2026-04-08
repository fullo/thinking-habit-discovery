<script>
	import { t } from '$lib/stores/locale.js';
	import { dimensionColors } from '$lib/data/profiles.js';

	export let profile;

	const dims = ['D1', 'D2', 'D3', 'D4', 'D5'];
	const size = 300;
	const cx = size / 2;
	const cy = size / 2;
	const radius = 120;
	const levels = 5;

	function angleFor(i) {
		return (Math.PI * 2 * i) / dims.length - Math.PI / 2;
	}

	function pointAt(i, r) {
		const a = angleFor(i);
		return { x: cx + r * Math.cos(a), y: cy + r * Math.sin(a) };
	}

	function maxScore(dim) {
		const top = profile[dim]?.[0];
		return top ? top.count : 0;
	}

	$: maxPossible = Math.max(
		...dims.map((d) => maxScore(d)),
		1
	);

	$: dataPoints = dims.map((d, i) => {
		const score = maxScore(d);
		const r = (score / maxPossible) * radius;
		return pointAt(i, r);
	});

	$: dataPath = dataPoints.map((p, i) =>
		`${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`
	).join(' ') + ' Z';
</script>

<svg viewBox="0 0 {size} {size}" class="radar" role="img" aria-label="Radar chart of thinking profile">
	<!-- Grid levels -->
	{#each Array(levels) as _, lvl}
		<polygon
			points={dims.map((_, i) => {
				const p = pointAt(i, (radius * (lvl + 1)) / levels);
				return `${p.x},${p.y}`;
			}).join(' ')}
			fill="none"
			stroke="var(--border)"
			stroke-width="0.5"
		/>
	{/each}

	<!-- Axis lines -->
	{#each dims as _, i}
		<line
			x1={cx} y1={cy}
			x2={pointAt(i, radius).x} y2={pointAt(i, radius).y}
			stroke="var(--border)"
			stroke-width="0.5"
		/>
	{/each}

	<!-- Data polygon -->
	<polygon
		points={dataPoints.map((p) => `${p.x},${p.y}`).join(' ')}
		fill="var(--accent)"
		fill-opacity="0.15"
		stroke="var(--accent)"
		stroke-width="2"
	/>

	<!-- Data points -->
	{#each dataPoints as p, i}
		<circle cx={p.x} cy={p.y} r="4" fill={dimensionColors[dims[i]]} />
	{/each}

	<!-- Labels -->
	{#each dims as dim, i}
		{@const labelP = pointAt(i, radius + 22)}
		<text
			x={labelP.x}
			y={labelP.y}
			text-anchor="middle"
			dominant-baseline="middle"
			fill={dimensionColors[dim]}
			font-size="11"
			font-weight="700"
		>{$t(`dims.${dim}.name`)}</text>
	{/each}
</svg>

<style>
	.radar {
		width: 100%;
		max-width: 320px;
		margin: 0 auto;
		display: block;
	}
</style>
