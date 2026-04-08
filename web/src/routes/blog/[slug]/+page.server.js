import { articles } from '$lib/data/articles.js';
import { papers } from '$lib/data/papers.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
	const article = articles.find((a) => a.id === params.slug);
	if (!article) {
		throw error(404, 'Article not found');
	}

	const papersById = Object.fromEntries(papers.map((p) => [p.id, p]));
	const articlePapers = article.paperIds
		.map((id) => papersById[id])
		.filter(Boolean);

	const connected = (article.connectedArticles || [])
		.map((id) => articles.find((a) => a.id === id))
		.filter(Boolean)
		.map(({ id, title, dimension }) => ({ id, title, dimension }));

	return { article, papers: articlePapers, connected };
}

/** @type {import('./$types').EntryGenerator} */
export function entries() {
	return articles.map((a) => ({ slug: a.id }));
}

export const prerender = true;
