import { writable, derived } from 'svelte/store';
import itDefault from '$lib/i18n/it.json';

const loaders = {
	en: () => import('$lib/i18n/en.json')
};

const translations = writable(itDefault);
export const locale = writable('it');
export const localeReady = writable(true);

locale.subscribe((lang) => {
	if (lang === 'it') {
		translations.set(itDefault);
		localeReady.set(true);
	} else if (loaders[lang]) {
		localeReady.set(false);
		loaders[lang]().then((mod) => {
			translations.set(mod.default);
			localeReady.set(true);
		});
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
