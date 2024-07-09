<script lang="ts">
	import type {Fetch_Value_Cache} from '@ryanatkn/belt/fetch.js';
	import type {Logger} from '@ryanatkn/belt/log.js';
	import type {Snippet} from 'svelte';
	import {BROWSER} from 'esm-env';
	import {Unreachable_Error} from '@ryanatkn/belt/error.js';

	import {
		fetch_mastodon_status_context,
		type Mastodon_Status_Context,
		fetch_mastodon_status,
		type Mastodon_Status,
		fetch_mastodon_favourites,
		type Reply_Filter_Rule,
	} from '$lib/mastodon.js';

	// TODO maybe delete this and merge into `Toot`

	interface Props {
		/**
		 * The host part of the url, like `'mastodon.ryanatkn.com'`.
		 */
		host: string | null;
		/**
		 * The status id to fetch, like `'110702983310017651'`.
		 */
		id: string | null;
		/**
		 * Whether to fetch and display the ancestors in the status context.
		 */
		include_ancestors?: boolean;
		/**
		 * Whether to fetch and display replies aka descendants in the status context.
		 */
		include_replies?: boolean;
		/**
		 * Optional API result cache.
		 */
		cache?: Fetch_Value_Cache | null | undefined;
		/**
		 * Optional logger for network calls.
		 */
		log?: Logger | undefined;
		loading?: boolean | undefined;
		item?: Mastodon_Status | null | undefined;
		context?: Mastodon_Status_Context | null | undefined;
		replies?: Mastodon_Status[] | null | undefined;
		/**
		 * Get a list of rules that controls whether replies are shown or not.
		 * If omitted, all replies are included.
		 */
		get_reply_filter_rules?: (
			item: Mastodon_Status,
			context: Mastodon_Status_Context,
		) => Reply_Filter_Rule[];
		load_time?: number | undefined;
		children: Snippet<
			[
				{
					/**
					 * `null` here is a failed loading condition.
					 */
					item: Mastodon_Status | null | undefined;
					/**
					 * `null` here is a failed loading condition.
					 */
					context: Mastodon_Status_Context | null | undefined;
					/**
					 * `null` here is a failed loading condition for `item` or `context`.
					 */
					replies: Mastodon_Status[] | null | undefined;
					load: () => Promise<void>;
					loading: boolean | undefined;
					load_time: number | undefined;
				},
			]
		>;
	}

	// TODO maybe these shouldn't be bindable?
	let {
		host,
		id,
		include_ancestors = false,
		include_replies = false,
		get_reply_filter_rules,
		cache,
		log,
		loading = $bindable(),
		item = $bindable(),
		context = $bindable(),
		replies = $bindable(),

		load_time = $bindable(),
		children,
	}: Props = $props();

	const with_context = $derived(include_ancestors || include_replies);

	const final_get_reply_filter_rules: Props['get_reply_filter_rules'] = $derived(
		get_reply_filter_rules ??
			(include_replies
				? () => [{type: 'custom', should_include: () => true}] // allow all by default
				: undefined),
	);

	// TODO somehow figure out which toots should be included but aren't, and put them at the top level with some indicator the parent isn't there, or insert a fake parent?
	// TODO refactor
	const filter_valid_replies = async (
		root_status: Mastodon_Status,
		context: Mastodon_Status_Context,
		reply_filter_rules: Reply_Filter_Rule[] | null,
	): Promise<Mastodon_Status[]> => {
		const statuses = context.descendants;
		// For a reply to be included, there must be at least one rule that passes.
		if (!statuses.length || !reply_filter_rules?.length) {
			return [];
		}
		const host = new URL(root_status.url).host;
		const allowed = new Set(); // TODO could simplify if no longer used, was allowing author but changed to favourites - `statuses.filter((s) => s.account.acct === acct`
		// TODO do in parallel but with max concurrency, need a helper
		for (const status of statuses) {
			for (const rule of reply_filter_rules) {
				if (rule.type === 'favourited_by') {
					// TODO cache these somewhere maybe?
					const favourites = await fetch_mastodon_favourites(host, status.id, cache, log); // eslint-disable-line no-await-in-loop
					const favourite = favourites?.find((f) => rule.favourited_by.includes(f.acct)); // TODO customize via a prop (string/set/callback)
					// TODO this logic is what I want, but `favourite.created_at` is the account creation not the favourite creation, and the API doesn't appear to support it :[
					// if (favourite && (!s.edited_at || new Date(s.edited_at) < new Date(favourite.created_at))) {
					if (favourite) {
						allowed.add(status.id);
						break;
					}
				} else if (rule.type === 'minimum_favourites') {
					if (status.favourites_count >= rule.minimum_favourites) {
						allowed.add(status.id);
						break;
					}
					// TODO typescript-eslint bug
					// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
				} else if (rule.type === 'custom') {
					if (rule.should_include(status, root_status, context)) {
						allowed.add(status.id);
						break;
					}
				} else {
					throw new Unreachable_Error(rule);
				}
			}
		}
		return statuses.filter((s) => (allowed.has(s.id) ? s : null));
	};

	const load = async (): Promise<void> => {
		if (!BROWSER || !host || !id) return;
		const start_time = performance.now();
		loading = true;
		// TODO error handling
		[item, context] = await Promise.all([
			fetch_mastodon_status(host, id, cache, log),
			with_context ? fetch_mastodon_status_context(host, id, cache, log) : null,
		]);
		if (item && context) {
			replies = await filter_valid_replies(
				item,
				context,
				final_get_reply_filter_rules?.(item, context) ?? null,
			);
		} else {
			replies = null;
		}
		loading = false;
		load_time = performance.now() - start_time;
	};
</script>

{@render children({item, context, replies, load, loading, load_time})}
