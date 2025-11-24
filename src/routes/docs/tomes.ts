import type {Tome} from '@ryanatkn/fuz/tome.js';
import ApiPage from '$routes/docs/api/+page.svelte';
import PackagePage from '$routes/docs/package/+page.svelte';

export const tomes: Array<Tome> = [
	{
		name: 'api',
		category: 'reference',
		component: ApiPage,
		related_tomes: [],
		related_modules: [],
		related_identifiers: [],
	},
	{
		name: 'package',
		category: 'reference',
		component: PackagePage,
		related_tomes: [],
		related_modules: [],
		related_identifiers: [],
	},
];
