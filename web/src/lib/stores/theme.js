import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
	const stored = browser ? localStorage.getItem('theme') : null;
	const { subscribe, set } = writable(stored || 'system');

	function applyTheme(value) {
		if (!browser) return;
		const root = document.documentElement;
		root.removeAttribute('data-theme');

		if (value === 'dark') {
			root.setAttribute('data-theme', 'dark');
		} else if (value === 'light') {
			root.setAttribute('data-theme', 'light');
		}
		// 'system' — no attribute, CSS media query handles it
	}

	return {
		subscribe,
		set(value) {
			set(value);
			if (browser) {
				localStorage.setItem('theme', value);
			}
			applyTheme(value);
		},
		init() {
			const stored = browser ? localStorage.getItem('theme') : null;
			if (stored) {
				set(stored);
				applyTheme(stored);
			}
		}
	};
}

export const theme = createThemeStore();
