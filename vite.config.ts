import {defineConfig} from 'vite';
import {sveltekit} from '@sveltejs/kit/vite';
import {remove_prism_css} from '@ryanatkn/fuz_code/remove_prism_css_vite_plugin.js';

export default defineConfig({
	plugins: [sveltekit(), remove_prism_css()],
});
