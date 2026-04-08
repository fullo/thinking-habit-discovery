<script>
	import { t } from '$lib/stores/locale.js';

	export let profileSummary = '';
	export let shareUrl = '';

	$: displayUrl = shareUrl || 'https://fullo.github.io/thinking-habit-discovery/quiz';
	$: shareText = `${$t('share.text')}\n\n${profileSummary}`;
	$: fullShareText = `${shareText}\n\n${$t('share.cta')}\n${displayUrl}`;

	$: encodedText = encodeURIComponent(shareText + '\n\n' + $t('share.cta'));
	$: encodedUrl = encodeURIComponent(displayUrl);

	$: twitterUrl = `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`;
	$: linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;

	let copied = false;

	function copyToClipboard() {
		navigator.clipboard.writeText(fullShareText);
		copied = true;
		setTimeout(() => copied = false, 2000);
	}
</script>

<section class="share-section">
	<h2>{$t('share.title')}</h2>
	<div class="profile-preview">
		<p>{profileSummary}</p>
	</div>
	<div class="share-buttons">
		<a href={twitterUrl} target="_blank" rel="noopener noreferrer" class="share-btn twitter" aria-label="Share on X/Twitter">
			<span class="share-icon">&#x1D54F;</span> X
		</a>
		<a href={linkedinUrl} target="_blank" rel="noopener noreferrer" class="share-btn linkedin" aria-label="Share on LinkedIn">
			<span class="share-icon">in</span> LinkedIn
		</a>
		<button class="share-btn copy" on:click={copyToClipboard} aria-label="Copy to clipboard">
			<span class="share-icon">{copied ? '\u2713' : '\u2398'}</span>
			{copied ? ($t('share.copied') || 'Copied!') : $t('share.copy')}
		</button>
	</div>
	<p class="share-note">{$t('share.urlNote') || 'The link above will regenerate your exact profile.'}</p>
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
	.profile-preview {
		padding: 0.75rem 1rem;
		background: var(--bg-hover);
		border-radius: 8px;
		margin-bottom: 1rem;
		font-size: 0.88rem;
		line-height: 1.5;
		color: var(--text);
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
	.share-note {
		margin-top: 0.75rem;
		font-size: 0.8rem;
		color: var(--text-secondary);
		font-style: italic;
	}
</style>
