import type {Fetch_Value_Cache, Fetch_Value_Cache_Item} from '@ryanatkn/belt/fetch.js';
import type {Url} from '@ryanatkn/gro/package_json.js';
import {onMount} from 'svelte';
import {create_context} from '@ryanatkn/fuz/context_helpers.js';

export class Mastodon_Cache {
	// TODO maybe make a loading state?
	/**
	 * If `undefined`, it's still loading.
	 */
	data: Fetch_Value_Cache | undefined | null = $state();

	constructor(
		protected load_data: () => Promise<Array<[Url, Fetch_Value_Cache_Item]> | null>,
		load_on_mount = true,
	) {
		if (load_on_mount) {
			onMount(this.load);
		}
	}

	load = async (): Promise<void> => {
		const loaded = await this.load_data();
		this.data = loaded && new Map(loaded);
	};
}

export const mastodon_cache_context = create_context<Mastodon_Cache>();
