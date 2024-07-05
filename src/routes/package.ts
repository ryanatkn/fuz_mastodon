// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_mastodon',
	version: '0.14.1',
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
	engines: {node: '>=20.12'},
	peerDependencies: {
		'@ryanatkn/belt': '*',
		'@ryanatkn/fuz': '*',
		'@sveltejs/kit': '^2',
		svelte: '^5.0.0-next.0',
		'svelte-intersect': '^0.14',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.24.1',
		'@ryanatkn/eslint-config': '^0.4.0',
		'@ryanatkn/fuz': '^0.107.1',
		'@ryanatkn/fuz_code': '^0.15.1',
		'@ryanatkn/gro': '^0.129.0',
		'@ryanatkn/moss': '^0.6.3',
		'@sveltejs/adapter-static': '^3.0.2',
		'@sveltejs/kit': '^2.5.17',
		'@sveltejs/package': '^2.3.2',
		'@sveltejs/vite-plugin-svelte': '^3.1.1',
		'date-fns': '^3.6.0',
		eslint: '^9.6.0',
		'eslint-plugin-svelte': '^2.41.0',
		'esm-env': '^1.0.0',
		prettier: '^3.3.2',
		'prettier-plugin-svelte': '^3.2.5',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^5.0.0-next.165',
		'svelte-check': '^3.8.2',
		'svelte-intersect': '^0.14.1',
		tslib: '^2.6.3',
		typescript: '^5.5.2',
		'typescript-eslint': '^8.0.0-alpha.39',
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
	files: ['dist'],
	exports: {
		'./package.json': './package.json',
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
	version: '0.14.1',
	modules: {
		'./package.json': {path: 'package.json', declarations: []},
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
