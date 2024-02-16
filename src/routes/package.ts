// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: '@ryanatkn/fuz_mastodon',
	description: 'Mastodon components and helpers for Svelte, SvelteKit, and Fuz',
	version: '0.6.0',
	public: true,
	icon: '🦣',
	license: 'MIT',
	homepage: 'https://mastodon.fuz.dev/',
	repository: 'https://github.com/ryanatkn/fuz_mastodon',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	type: 'module',
	engines: {node: '>=20.10'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {
		'@ryanatkn/belt': '*',
		'@ryanatkn/fuz': '*',
		'@sveltejs/kit': '*',
		svelte: '*',
		'svelte-intersect': '*',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.20.3',
		'@ryanatkn/eslint-config': '^0.1.0',
		'@ryanatkn/fuz': '^0.83.0',
		'@ryanatkn/fuz_code': '^0.7.0',
		'@ryanatkn/gro': '^0.112.0',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.5.0',
		'@sveltejs/package': '^2.2.6',
		'@sveltejs/vite-plugin-svelte': '^3.0.2',
		'@typescript-eslint/eslint-plugin': '^7.0.1',
		'@typescript-eslint/parser': '^7.0.1',
		'date-fns': '^3.3.1',
		eslint: '^8.56.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.2.5',
		'prettier-plugin-svelte': '^3.2.1',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.11',
		'svelte-check': '^3.6.4',
		'svelte-intersect': '^0.11.0',
		tslib: '^2.6.2',
		typescript: '^5.3.3',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn', rules: {'no-console': 1}},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./Mastodon_Status_Item.svelte': {
			svelte: './dist/Mastodon_Status_Item.svelte',
			default: './dist/Mastodon_Status_Item.svelte',
			types: './dist/Mastodon_Status_Item.svelte.d.ts',
		},
		'./Mastodon_Status_Tree.svelte': {
			svelte: './dist/Mastodon_Status_Tree.svelte',
			default: './dist/Mastodon_Status_Tree.svelte',
			types: './dist/Mastodon_Status_Tree.svelte.d.ts',
		},
		'./mastodon.js': {default: './dist/mastodon.js', types: './dist/mastodon.d.ts'},
		'./storage.js': {default: './dist/storage.js', types: './dist/storage.d.ts'},
		'./Toot_Input.svelte': {
			svelte: './dist/Toot_Input.svelte',
			default: './dist/Toot_Input.svelte',
			types: './dist/Toot_Input.svelte.d.ts',
		},
		'./Toot_Loader.svelte': {
			svelte: './dist/Toot_Loader.svelte',
			default: './dist/Toot_Loader.svelte',
			types: './dist/Toot_Loader.svelte.d.ts',
		},
		'./Toot.svelte': {
			svelte: './dist/Toot.svelte',
			default: './dist/Toot.svelte',
			types: './dist/Toot.svelte.d.ts',
		},
	},
} satisfies Package_Json;

export const src_json = {
	name: '@ryanatkn/fuz_mastodon',
	version: '0.6.0',
	modules: {
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
