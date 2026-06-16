import type {Tome} from '@fuzdev/fuz_ui/tome.ts';

import ApiPage from './api/+page.svelte';
import PackagePage from './package/+page.svelte';

export const tomes: Array<Tome> = [
	{
		slug: 'api',
		category: 'reference',
		Component: ApiPage,
		related_tomes: [],
		related_modules: [],
		related_declarations: [],
	},
	{
		slug: 'package',
		category: 'reference',
		Component: PackagePage,
		related_tomes: [],
		related_modules: [],
		related_declarations: [],
	},
];
