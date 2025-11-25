import type {FetchValueCache, FetchValueCacheItem} from '@ryanatkn/belt/fetch.js';
import type {Url} from '@ryanatkn/belt/url.js';
import {onMount} from 'svelte';
import {create_context} from '@ryanatkn/fuz/context_helpers.js';

export class MastodonCache {
	// TODO maybe add a loading status state?

	readonly load_data: () => Promise<Array<[Url, FetchValueCacheItem]> | null>;

	/**
	 * If `undefined`, it's still loading. `null` means no data.
	 */
	data: FetchValueCache | undefined | null = $state();

	constructor(
		load_data: () => Promise<Array<[Url, FetchValueCacheItem]> | null>,
		load_on_mount = true,
	) {
		this.load_data = load_data;
		if (load_on_mount) {
			onMount(this.load);
		}
	}

	load = async (): Promise<void> => {
		const loaded = await this.load_data();
		this.data = loaded && new Map(loaded);
	};
}

export const mastodon_cache_context = create_context<MastodonCache>();
