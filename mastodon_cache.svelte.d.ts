import type { Fetch_Value_Cache, Fetch_Value_Cache_Item } from '@ryanatkn/belt/fetch.js';
import type { Url } from '@ryanatkn/gro/package_json.js';
export declare class Mastodon_Cache {
    protected load_data: () => Promise<Array<[Url, Fetch_Value_Cache_Item]> | null>;
    /**
     * If `undefined`, it's still loading.
     */
    data: Fetch_Value_Cache | undefined | null;
    constructor(load_data: () => Promise<Array<[Url, Fetch_Value_Cache_Item]> | null>, load_on_mount?: boolean);
    load: () => Promise<void>;
}
export declare const mastodon_cache_context: {
    get: (error_message?: string) => Mastodon_Cache;
    maybe_get: () => Mastodon_Cache | undefined;
    set: (value: Mastodon_Cache) => Mastodon_Cache;
};
//# sourceMappingURL=mastodon_cache.svelte.d.ts.map