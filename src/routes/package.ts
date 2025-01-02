// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_mastodon',
	version: '0.28.0',
	description: 'Mastodon components and helpers for Svelte, SvelteKit, and Fuz',
	glyph: '🦣',
	logo: 'logo.svg',
	logo_alt: 'a friendly purple spider facing you',
	public: true,
	license: 'MIT',
	homepage: 'https://mastodon.fuz.dev/',
	repository: 'https://github.com/ryanatkn/fuz_mastodon',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	bugs: 'https://github.com/ryanatkn/fuz_mastodon/issues',
	funding: 'https://www.ryanatkn.com/funding',
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		check: 'gro check',
		test: 'gro test',
		preview: 'vite preview',
		deploy: 'gro deploy',
	},
	type: 'module',
	engines: {node: '>=20.17'},
	peerDependencies: {
		'@ryanatkn/belt': '*',
		'@ryanatkn/fuz': '*',
		'@ryanatkn/moss': '*',
		'@sveltejs/kit': '^2',
		'date-fns': '^4',
		'esm-env': '^1',
		svelte: '^5',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.29.0',
		'@ryanatkn/eslint-config': '^0.6.0',
		'@ryanatkn/fuz': '^0.131.5',
		'@ryanatkn/fuz_code': '^0.21.0',
		'@ryanatkn/gro': '^0.148.0',
		'@ryanatkn/moss': '^0.21.1',
		'@sveltejs/adapter-static': '^3.0.8',
		'@sveltejs/kit': '^2.15.1',
		'@sveltejs/package': '^2.3.7',
		'@sveltejs/vite-plugin-svelte': '^4.0.0',
		'date-fns': '^4.1.0',
		eslint: '^9.17.0',
		'eslint-plugin-svelte': '^2.46.1',
		'esm-env': '^1.2.1',
		prettier: '^3.4.2',
		'prettier-plugin-svelte': '^3.3.2',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.16.0',
		'svelte-check': '^4.1.1',
		tslib: '^2.8.1',
		typescript: '^5.7.2',
		'typescript-eslint': '^8.19.0',
		uvu: '^0.5.6',
	},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	sideEffects: ['**/*.css'],
	files: ['dist', 'src/lib/**/*.ts', '!src/lib/**/*.test.*', '!dist/**/*.test.*'],
	exports: {
		'./package.json': './package.json',
		'./mastodon_cache.svelte.js': {
			types: './dist/mastodon_cache.svelte.d.ts',
			default: './dist/mastodon_cache.svelte.js',
		},
		'./Mastodon_Status_Item.svelte': {
			types: './dist/Mastodon_Status_Item.svelte.d.ts',
			svelte: './dist/Mastodon_Status_Item.svelte',
			default: './dist/Mastodon_Status_Item.svelte',
		},
		'./Mastodon_Status_Tree.svelte': {
			types: './dist/Mastodon_Status_Tree.svelte.d.ts',
			svelte: './dist/Mastodon_Status_Tree.svelte',
			default: './dist/Mastodon_Status_Tree.svelte',
		},
		'./mastodon.js': {types: './dist/mastodon.d.ts', default: './dist/mastodon.js'},
		'./storage.js': {types: './dist/storage.d.ts', default: './dist/storage.js'},
		'./Toot_Input.svelte': {
			types: './dist/Toot_Input.svelte.d.ts',
			svelte: './dist/Toot_Input.svelte',
			default: './dist/Toot_Input.svelte',
		},
		'./Toot_Loader.svelte': {
			types: './dist/Toot_Loader.svelte.d.ts',
			svelte: './dist/Toot_Loader.svelte',
			default: './dist/Toot_Loader.svelte',
		},
		'./Toot.svelte': {
			types: './dist/Toot.svelte.d.ts',
			svelte: './dist/Toot.svelte',
			default: './dist/Toot.svelte',
		},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz_mastodon',
	version: '0.28.0',
	modules: {
		'./package.json': {path: 'package.json', declarations: []},
		'./mastodon_cache.svelte.js': {
			path: 'mastodon_cache.svelte.ts',
			declarations: [
				{name: 'Mastodon_Cache', kind: 'class'},
				{name: 'mastodon_cache_context', kind: 'variable'},
			],
		},
		'./Mastodon_Status_Item.svelte': {path: 'Mastodon_Status_Item.svelte', declarations: []},
		'./Mastodon_Status_Tree.svelte': {path: 'Mastodon_Status_Tree.svelte', declarations: []},
		'./mastodon.js': {
			path: 'mastodon.ts',
			declarations: [
				{name: 'to_mastodon_status_url', kind: 'function'},
				{name: 'to_mastodon_status_url_with_author', kind: 'function'},
				{name: 'to_mastodon_status_url_with_users_author', kind: 'function'},
				{name: 'to_mastodon_api_status_url', kind: 'function'},
				{name: 'to_mastodon_api_status_context_url', kind: 'function'},
				{name: 'to_mastodon_api_favourites_url', kind: 'function'},
				{name: 'Mastodon_Status_Url', kind: 'type'},
				{name: 'parse_mastodon_status_url', kind: 'function'},
				{name: 'fetch_mastodon_status_context', kind: 'function'},
				{name: 'fetch_mastodon_status', kind: 'function'},
				{name: 'fetch_mastodon_favourites', kind: 'function'},
				{name: 'Mastodon_Status_Context', kind: 'type'},
				{name: 'Mastodon_Status', kind: 'type'},
				{name: 'Mastodon_Favourite', kind: 'type'},
				{name: 'Reply_Filter', kind: 'type'},
				{name: 'Favourited_By_Reply_Filter', kind: 'type'},
				{name: 'Minimum_Favourites_Reply_Filter', kind: 'type'},
				{name: 'Custom_Reply_Filter', kind: 'type'},
				{name: 'Create_Reply_Filters', kind: 'type'},
				{name: 'filter_valid_replies', kind: 'function'},
			],
		},
		'./storage.js': {
			path: 'storage.ts',
			declarations: [
				{name: 'load_from_storage', kind: 'function'},
				{name: 'set_in_storage', kind: 'function'},
			],
		},
		'./Toot_Input.svelte': {path: 'Toot_Input.svelte', declarations: []},
		'./Toot_Loader.svelte': {path: 'Toot_Loader.svelte', declarations: []},
		'./Toot.svelte': {path: 'Toot.svelte', declarations: []},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
