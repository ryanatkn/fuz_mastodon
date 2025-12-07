import type {Tome} from '@fuzdev/fuz_ui/tome.js';

import ApiPage from '$routes/docs/api/+page.svelte';
import PackagePage from '$routes/docs/package/+page.svelte';

export const tomes: Array<Tome> = [
	{
		name: 'api',
		category: 'reference',
		Component: ApiPage,
		related_tomes: [],
		related_modules: [],
		related_declarations: [],
	},
	{
		name: 'package',
		category: 'reference',
		Component: PackagePage,
		related_tomes: [],
		related_modules: [],
		related_declarations: [],
	},
];
