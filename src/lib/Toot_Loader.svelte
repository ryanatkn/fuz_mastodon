<script lang="ts">
	import type {Fetch_Value_Cache} from '@grogarden/util/fetch.js';

	import {
		fetch_mastodon_status_context,
		type Mastodon_Context,
		fetch_mastodon_status,
		type Mastodon_Status,
		fetch_mastodon_favourites,
	} from '$lib/mastodon.js';

	// TODO maybe delete this and merge into `Toot`

	/**
	 * The host part of the url, like `'mastodon.ryanatkn.com'`.
	 */
	export let host: string | null;

	/**
	 * The status id to fetch, like `'110702983310017651'`.
	 */
	export let id: string | null;

	/**
	 * Should we also fetch the status's context, getting its ancestors and descendants?
	 */
	export let with_context = false;

	/**
	 * Optional API result cache.
	 */
	export let cache: Fetch_Value_Cache | undefined = undefined;

	/**
	 * @readonly
	 */
	export let loading: boolean | undefined = undefined;

	/**
	 * @readonly
	 */
	export let item: Mastodon_Status | undefined | null = undefined;

	/**
	 * @readonly
	 */
	export let context: Mastodon_Context | undefined | null = undefined;

	/**
	 * @readonly
	 */
	export let replies: Mastodon_Status[] | undefined | null = undefined;

	/**
	 * @readonly
	 */
	export let load_time: number | undefined = undefined;

	// TODO add concurrency, currently makes calls serially, make configurable
	const map_async = async <T, U>(
		items: T[],
		cb: (item: T, index: number) => Promise<U>,
	): Promise<U[]> =>
		Promise.resolve().then(async () => {
			const results: U[] = [];
			for (let i = 0; i < items.length; i++) {
				const item = items[i];
				// eslint-disable-next-line no-await-in-loop
				const r = await cb(item, i);
				results.push(r);
			}
			return results;
		});

	// TODO somehow figure out which toots should be included but aren't, and put them at the top level with some indicator the parent isn't there, or insert a fake parent?
	// TODO refactor
	const filter_valid_replies = async (
		status: Mastodon_Status,
		statuses: Mastodon_Status[],
	): Promise<Mastodon_Status[]> => {
		const host = new URL(status.url).host;
		const acct = status.account.acct;
		const allowed = new Set(); // TODO could simplify if no longer used, was allowing author but changed to favourites - `statuses.filter((s) => s.account.acct === acct`
		const skipped = new Set(statuses.filter((s) => !s.favourites_count).map((s) => s.id));
		const unvalidated_replies = statuses.filter(({id}) => !allowed.has(id) && !skipped.has(id));
		if (unvalidated_replies.length) {
			await map_async(unvalidated_replies, async (s) => {
				const favourites = await fetch_mastodon_favourites(host, s.id, cache);
				const favourite = favourites?.find((f) => f.acct === acct);
				// TODO this logic is what I want, but `favourite.created_at` is showing a date in 2022
				// if (favourite && (!s.edited_at || new Date(s.edited_at) < new Date(favourite.created_at))) {
				if (favourite) {
					allowed.add(s.id);
				}
			});
		}
		return statuses.filter((s) => (allowed.has(s.id) ? s : null));
	};

	const load = async (): Promise<void> => {
		if (import.meta.env.SSR || !host || !id) return;
		const start_time = performance.now();
		loading = true;
		// TODO error handling
		[item, context] = await Promise.all([
			fetch_mastodon_status(host, id, cache),
			with_context ? fetch_mastodon_status_context(host, id, cache) : null,
		]);
		if (item && context) {
			replies = await filter_valid_replies(item, context.descendants);
		} else {
			replies = null;
		}
		loading = false;
		load_time = performance.now() - start_time;
	};
</script>

<slot {item} {context} {replies} {load} {loading} {load_time} />
