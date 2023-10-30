// generated by src/lib/package.gen.ts

import type {PackageJson} from '@grogarden/gro/package_json.js';

export const package_json = {
	name: '@fuz.dev/fuz_mastodon',
	description: 'Mastodon components and helpers for Svelte, SvelteKit, and Fuz',
	version: '0.1.3',
	public: true,
	license: 'MIT',
	homepage: 'https://mastodon.fuz.dev/',
	repository: 'https://github.com/fuz-dev/fuz_mastodon',
	author: {name: 'Ryan Atkinson', email: 'mail@ryanatkn.com', url: 'https://www.ryanatkn.com/'},
	type: 'module',
	engines: {node: '>=20.7'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {
		'@fuz.dev/fuz_library': '*',
		'@fuz.dev/svelte_intersect': '*',
		'@grogarden/util': '*',
		'@sveltejs/kit': '*',
		svelte: '*',
	},
	devDependencies: {
		'@changesets/changelog-git': '^0.1.14',
		'@feltjs/eslint-config': '^0.4.1',
		'@fuz.dev/fuz': '^0.77.1',
		'@fuz.dev/fuz_contextmenu': '^0.5.1',
		'@fuz.dev/fuz_dialog': '^0.4.2',
		'@fuz.dev/fuz_library': '^0.17.0',
		'@fuz.dev/svelte_intersect': '^0.6.1',
		'@grogarden/gro': '^0.98.1',
		'@grogarden/util': '^0.15.2',
		'@sveltejs/adapter-static': '^2.0.3',
		'@sveltejs/kit': '^1.27.2',
		'@sveltejs/package': '^2.2.2',
		'@typescript-eslint/eslint-plugin': '^6.9.1',
		'@typescript-eslint/parser': '^6.9.1',
		'date-fns': '^2.30.0',
		eslint: '^8.52.0',
		'eslint-plugin-svelte': '^2.34.0',
		prettier: '^3.0.3',
		'prettier-plugin-svelte': '^3.0.3',
		svelte: '^4.2.2',
		'svelte-check': '^3.5.2',
		tslib: '^2.6.2',
		typescript: '^5.2.2',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@feltjs'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {
		'./mastodon.js': {default: './dist/mastodon.js', types: './dist/mastodon.d.ts'},
		'./MastodonStatusItem.svelte': {
			svelte: './dist/MastodonStatusItem.svelte',
			default: './dist/MastodonStatusItem.svelte',
			types: './dist/MastodonStatusItem.svelte.d.ts',
		},
		'./MastodonStatusTree.svelte': {
			svelte: './dist/MastodonStatusTree.svelte',
			default: './dist/MastodonStatusTree.svelte',
			types: './dist/MastodonStatusTree.svelte.d.ts',
		},
		'./package.gen.js': {default: './dist/package.gen.js', types: './dist/package.gen.d.ts'},
		'./package.js': {default: './dist/package.js', types: './dist/package.d.ts'},
		'./storage.js': {default: './dist/storage.js', types: './dist/storage.d.ts'},
		'./Toot.svelte': {
			svelte: './dist/Toot.svelte',
			default: './dist/Toot.svelte',
			types: './dist/Toot.svelte.d.ts',
		},
		'./TootInput.svelte': {
			svelte: './dist/TootInput.svelte',
			default: './dist/TootInput.svelte',
			types: './dist/TootInput.svelte.d.ts',
		},
		'./TootLoader.svelte': {
			svelte: './dist/TootLoader.svelte',
			default: './dist/TootLoader.svelte',
			types: './dist/TootLoader.svelte.d.ts',
		},
	},
	modules: {
		'./mastodon.js': {
			path: 'mastodon.ts',
			declarations: [
				{name: 'MastodonCache', kind: 'TypeAliasDeclaration'},
				{name: 'ResponseData', kind: 'InterfaceDeclaration'},
				{name: 'MastodonResponseData', kind: 'TypeAliasDeclaration'},
				{name: 'fetch_data', kind: 'VariableDeclaration'},
				{name: 'to_status_url', kind: 'VariableDeclaration'},
				{name: 'to_status_url_with_author', kind: 'VariableDeclaration'},
				{name: 'to_status_url_with_users_author', kind: 'VariableDeclaration'},
				{name: 'to_api_status_url', kind: 'VariableDeclaration'},
				{name: 'to_api_status_context_url', kind: 'VariableDeclaration'},
				{name: 'to_api_favourites_url', kind: 'VariableDeclaration'},
				{name: 'MastodonStatusUrl', kind: 'InterfaceDeclaration'},
				{name: 'parse_status_url', kind: 'VariableDeclaration'},
				{name: 'fetch_status_context', kind: 'VariableDeclaration'},
				{name: 'fetch_status', kind: 'VariableDeclaration'},
				{name: 'fetch_favourites', kind: 'VariableDeclaration'},
				{name: 'MastodonContext', kind: 'InterfaceDeclaration'},
				{name: 'MastodonStatus', kind: 'InterfaceDeclaration'},
				{name: 'MastodonFavourite', kind: 'InterfaceDeclaration'},
			],
		},
		'./MastodonStatusItem.svelte': {path: 'MastodonStatusItem.svelte', declarations: []},
		'./MastodonStatusTree.svelte': {path: 'MastodonStatusTree.svelte', declarations: []},
		'./package.gen.js': {path: 'package.gen.ts', declarations: []},
		'./package.js': {
			path: 'package.ts',
			declarations: [{name: 'package_json', kind: 'VariableDeclaration'}],
		},
		'./storage.js': {
			path: 'storage.ts',
			declarations: [
				{name: 'load_from_storage', kind: 'VariableDeclaration'},
				{name: 'set_in_storage', kind: 'VariableDeclaration'},
			],
		},
		'./Toot.svelte': {path: 'Toot.svelte', declarations: []},
		'./TootInput.svelte': {path: 'TootInput.svelte', declarations: []},
		'./TootLoader.svelte': {path: 'TootLoader.svelte', declarations: []},
	},
} satisfies PackageJson;

// generated by src/lib/package.gen.ts
