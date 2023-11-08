import type {UserConfig} from 'vite';
import {sveltekit} from '@sveltejs/kit/vite';
import {remove_prism_css} from '@fuz.dev/fuz_code/remove_prism_css_vite_plugin.js';

const config: UserConfig = {
	plugins: [sveltekit(), remove_prism_css()],
};

export default config;
