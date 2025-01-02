<script lang="ts">
	import type {Fetch_Value_Cache} from '@ryanatkn/belt/fetch.js';
	import type {Logger} from '@ryanatkn/belt/log.js';
	import type {Snippet} from 'svelte';
	import {BROWSER} from 'esm-env';

	import {
		fetch_mastodon_status_context,
		type Mastodon_Status_Context,
		fetch_mastodon_status,
		type Mastodon_Status,
		type Reply_Filter,
		type Create_Reply_Filters,
		filter_valid_replies,
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
		status_context?: Mastodon_Status_Context | null | undefined;
		replies?: Array<Mastodon_Status> | null | undefined;
		/**
		 * Get a list of rules that controls whether replies are shown or not.
		 * If omitted, all replies are included.
		 */
		reply_filter?: Reply_Filter | Array<Reply_Filter> | Create_Reply_Filters | null;
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
					status_context: Mastodon_Status_Context | null | undefined;
					/**
					 * `null` here is a failed loading condition for `item` or `status_context`.
					 */
					replies: Array<Mastodon_Status> | null | undefined;
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
		reply_filter,
		cache,
		log,
		loading = $bindable(),
		item = $bindable(),
		status_context = $bindable(),
		replies = $bindable(),
		load_time = $bindable(),
		children,
	}: Props = $props();

	const include_status_context = $derived(include_ancestors || include_replies);

	const final_reply_filter: Reply_Filter | Array<Reply_Filter> | Create_Reply_Filters | null =
		$derived(
			reply_filter === undefined // apply default only if `undefined`, pass through `null`
				? include_replies
					? {type: 'custom', should_include: () => true} // allow all by default
					: null
				: reply_filter,
		);

	const load = async (): Promise<void> => {
		if (!BROWSER || !host || !id) return;
		const start_time = performance.now();
		loading = true;
		// TODO error handling
		[item, status_context] = await Promise.all([
			fetch_mastodon_status(host, id, cache, log),
			include_status_context ? fetch_mastodon_status_context(host, id, cache, log) : null,
		]);
		if (item && status_context) {
			replies = await filter_valid_replies(
				item,
				status_context,
				typeof final_reply_filter === 'function'
					? final_reply_filter(item, status_context)
					: final_reply_filter,
				cache,
				log,
			);
		} else {
			replies = null;
		}
		loading = false;
		load_time = performance.now() - start_time;
	};
</script>

{@render children({item, status_context, replies, load, loading, load_time})}
