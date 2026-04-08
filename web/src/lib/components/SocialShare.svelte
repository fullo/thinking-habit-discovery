<script>
	import { t } from '$lib/stores/locale.js';

	export let profileSummary = '';

	const siteUrl = 'https://fullo.github.io/thinking-habit-discovery/';

	$: text = `${$t('share.text')}\n\n${profileSummary}\n\n${$t('share.cta')}`;
	$: encodedText = encodeURIComponent(text);
	$: encodedUrl = encodeURIComponent(siteUrl);

	$: twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
	$: linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
	$: mastodonText = `${text}\n${siteUrl}`;
</script>

<section class="share-section">
	<h2>{$t('share.title')}</h2>
	<div class="share-buttons">
		<a href={twitterUrl} target="_blank" rel="noopener noreferrer" class="share-btn twitter" aria-label="Share on X/Twitter">
			<span class="share-icon">&#x1D54F;</span> X
		</a>
		<a href={linkedinUrl} target="_blank" rel="noopener noreferrer" class="share-btn linkedin" aria-label="Share on LinkedIn">
			<span class="share-icon">in</span> LinkedIn
		</a>
		<button class="share-btn copy" on:click={() => {
			navigator.clipboard.writeText(`${text}\n${siteUrl}`);
		}} aria-label="Copy to clipboard">
			<span class="share-icon">&#x2398;</span> {$t('share.copy')}
		</button>
	</div>
</section>

<style>
	.share-section {
		margin: 2rem 0;
		padding-top: 1.5rem;
		border-top: 1px solid var(--border);
	}
	h2 {
		font-size: 1.3rem;
		margin-bottom: 0.75rem;
	}
	.share-buttons {
		display: flex;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.share-btn {
		display: inline-flex;
		align-items: center;
		gap: 0.4rem;
		padding: 0.5rem 1rem;
		border: 1px solid var(--border);
		border-radius: 8px;
		font-size: 0.85rem;
		font-weight: 600;
		text-decoration: none;
		cursor: pointer;
		transition: background 0.15s, border-color 0.15s;
		color: var(--text);
		background: var(--bg);
	}
	.share-btn:hover {
		background: var(--bg-hover);
		border-color: var(--accent);
	}
	.share-icon {
		font-weight: 800;
	}
	.twitter .share-icon { color: #1da1f2; }
	.linkedin .share-icon { color: #0077b5; font-weight: 800; }
	.copy { border-style: dashed; }
</style>
