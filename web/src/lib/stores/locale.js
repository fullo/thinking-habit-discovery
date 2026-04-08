import { writable, derived } from 'svelte/store';

const loaders = {
	it: () => import('$lib/i18n/it.json'),
	en: () => import('$lib/i18n/en.json')
};

const translations = writable({});
export const locale = writable('it');
export const localeReady = writable(false);

async function loadTranslations(lang) {
	localeReady.set(false);
	const mod = await loaders[lang]();
	translations.set(mod.default);
	localeReady.set(true);
}

// Load initial locale
loadTranslations('it');

// React to locale changes
locale.subscribe((lang) => {
	if (loaders[lang]) {
		loadTranslations(lang);
	}
});

export const t = derived(translations, ($translations) => {
	return (key) => {
		const keys = key.split('.');
		let val = $translations;
		for (const k of keys) {
			val = val?.[k];
		}
		return val ?? key;
	};
});
