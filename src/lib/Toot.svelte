<script lang="ts">
	import Pending_Button from '@ryanatkn/fuz/Pending_Button.svelte';
	import {slide} from 'svelte/transition';
	import {intersect} from 'svelte-intersect';
	import type {Fetch_Value_Cache} from '@ryanatkn/belt/fetch.js';
	import type {Logger} from '@ryanatkn/belt/log.js';
	import type {Snippet} from 'svelte';

	import Mastodon_Status_Tree from '$lib/Mastodon_Status_Tree.svelte';
	import Mastodon_Status_Item from '$lib/Mastodon_Status_Item.svelte';
	import Toot_Loader from '$lib/Toot_Loader.svelte';
	import {load_from_storage, set_in_storage} from '$lib/storage.js';
	import {parse_mastodon_status_url, type Create_Reply_Filter_Rules} from '$lib/mastodon.js';
	import Toot_Input from '$lib/Toot_Input.svelte';

	// TODO some of this may be broken after the Svelte 5 upgrade, the patterns are a mess

	interface Props {
		initial_url: string; // TODO this API is awkward, ideally it would be `url`? maybe rename `url` to `current_url` then?
		url?: string;
		/**
		 * Whether to fetch and display the ancestors in the status context.
		 */
		include_ancestors?: boolean;
		/**
		 * Whether to fetch and display replies aka descendants in the status context.
		 */
		include_replies?: boolean;
		/**
		 * Get a list of rules that controls whether replies are shown or not.
		 */
		reply_filter_rules?: Create_Reply_Filter_Rules;
		/**
		 * Optional API result cache.
		 */
		cache?: Fetch_Value_Cache | null | undefined;
		/**
		 * Optional logger for network calls.
		 */
		log?: Logger | undefined;
		/**
		 * @readonly
		 */
		loading?: boolean | undefined;
		/**
		 * @readonly
		 */
		load_time?: number | undefined;
		storage_key?: string | undefined;
		initial_show_settings?: boolean;
		show_settings?: boolean;
		autoload_key?: string | undefined;
		initial_autoload?: boolean;
		autoload?: boolean;
		onreset?: () => void;
		settings?: Snippet;
	}

	// TODO maybe these shouldn't be bindable?
	let {
		initial_url,
		url = initial_url,
		include_ancestors = false,
		include_replies = false,
		reply_filter_rules,
		cache,
		log,
		loading = $bindable(),
		load_time = $bindable(),
		storage_key,
		initial_show_settings = false,
		show_settings = $bindable(),
		autoload_key = 'autoload',
		initial_autoload = false,
		autoload = autoload_key
			? load_from_storage(autoload_key, () => initial_autoload)
			: initial_autoload,
		onreset,
		settings,
	}: Props = $props();

	let loaded_status_key = $state(1);

	export const reset = (): void => {
		loaded_status_key++;
		url = initial_url;
		// these get bound but their values stick because they're optional, so reset them
		loading = undefined;
		load_time = undefined;
		onreset?.();
	};

	// TODO refactor with storage helpers with serialize/parse as options, locallyStored?
	const show_settings_key = $derived(storage_key && 'show_settings' + storage_key);

	$effect(() => {
		if (show_settings === undefined) {
			show_settings = show_settings_key
				? load_from_storage(show_settings_key, () => initial_show_settings)
				: initial_show_settings;
		}
	});

	$effect(() => {
		if (show_settings_key) {
			set_in_storage(show_settings_key, show_settings); // TODO @multiple wastefully sets on init
		}
	});

	const toggle_settings = () => {
		show_settings = !show_settings;
	};

	$effect(() => {
		if (autoload_key) {
			set_in_storage(autoload_key, autoload); // TODO @multiple wastefully sets on init and across multiple `Toot` instances if bound
		}
	});

	const parsed = $derived(parse_mastodon_status_url(url));
	const id = $derived(parsed?.status_id ?? null);
	const host = $derived(parsed?.host ?? null);

	const enable_load = $derived(loading !== false && !!host);

	const enable_reset = $derived(loading !== undefined || url !== initial_url);
</script>

{#key loaded_status_key}
	<Toot_Loader
		{host}
		{id}
		{include_ancestors}
		{include_replies}
		{cache}
		{log}
		{reply_filter_rules}
		bind:loading
		bind:load_time
	>
		{#snippet children({item, context, replies, load, loading, load_time})}
			<!-- TODO this transition is working on my blog but not on this docs website, what's going on? I tried it on `/about` too -->
			<!-- TODO techically this class should probably be added based on `include_replies`, and display an error if they're null, meaning failed to load -->
			<div class="toot" class:replies transition:slide>
				<div class="toot_content">
					{#if include_ancestors && context}
						<div transition:slide>
							<!-- TODO style differently or something -->
							{#each context.ancestors as ancestor}
								<Mastodon_Status_Item item={ancestor} />
							{/each}
						</div>
					{/if}
					<div class="main_post panel">
						<div class="panel bg_panel">
							{#if item}
								<!-- TODO Svelte 5 animation bug - keeping this one here because the alternative is a janky animation,
									and it's not as bad for UX as the contentwarning one below -->
								<div class="transition_wrapper" transition:slide>
									<Mastodon_Status_Item {item} />
								</div>
							{:else}
								<div class="transition_wrapper" transition:slide>
									<Pending_Button
										pending={loading || false}
										disabled={!enable_load}
										onclick={() => load()}
									>
										<div class="icon_button_content">
											<div class="icon">🦣</div>
											<div class="button_content">
												<div>
													load toot{#if include_replies || include_ancestors}s{/if} from
												</div>
												<code class="ellipsis"
													>{#if host}{host}{:else}invalid url{/if}</code
												>
											</div>
										</div>
									</Pending_Button>
								</div>
							{/if}
						</div>
					</div>
					{#if item && replies}
						<!-- TODO Svelte 5 animation bug -->
						<!-- <div transition:slide> -->
						<Mastodon_Status_Tree {item} items={replies} />
						<!-- </div> -->
					{/if}
				</div>
				<div class="toot_controls">
					<div
						class="controls"
						use:intersect={{
							onintersect: ({intersecting}) => {
								if (intersecting && autoload) load();
							},
							count: 1,
						}}
					>
						<div class="row">
							<button
								type="button"
								onclick={toggle_settings}
								class="deselectable"
								class:selected={show_settings}
								style:margin-right="var(--space_sm)"
							>
								settings
							</button>
							<div class="reset">
								<button type="button" onclick={reset} disabled={!enable_reset}>
									reset
								</button>{#if load_time !== undefined}<div class="loaded_message" transition:slide>
										loaded in {Math.round(load_time)}ms
									</div>{/if}
							</div>
						</div>
					</div>
					{#if show_settings}
						<div transition:slide class="settings controls panel">
							<form class="w_100">
								<div class="mb_lg">
									<Toot_Input bind:url />
								</div>
								<fieldset class="row">
									<label
										class="row"
										title={autoload
											? 'replies will load automatically when scrolled intersect'
											: 'replies are not loaded until you request them'}
										><input type="checkbox" bind:checked={autoload} />automatically load when
										scrolled onscreen</label
									>
								</fieldset>
							</form>
							{#if settings}{@render settings()}{/if}
						</div>
					{/if}
				</div>
			</div>
		{/snippet}
	</Toot_Loader>
{/key}

<style>
	.toot {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1;
		gap: var(--space_md);
		width: 100%;
	}
	.toot_content {
		flex: 1;
	}
	.toot_controls {
		display: flex;
		flex-direction: column;
		flex: 1;
	}
	.controls {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space_md);
	}
	.icon_button_content {
		width: 100%;
		display: flex;
		align-items: center;
		text-align: left;
	}
	/* TODO messy */
	.icon_button_content .button_content {
		overflow: hidden;
	}
	.button_content {
		line-height: var(--line_height_lg);
	}
	.main_post {
		padding: var(--space_md);
	}
	.toot.replies .main_post {
		margin-bottom: var(--space_md);
	}
	.bg_panel {
		background-color: var(--bg);
		padding: var(--space_xs);
	}
	.icon {
		font-size: var(--icon_size_md);
		padding: var(--space_sm) var(--space_md) var(--space_sm) 0;
	}
	.reset {
		display: flex;
		align-items: center;
	}
	/* TODO hacky */
	.reset :global(button) {
		margin-bottom: 0;
	}
	.loaded_message {
		margin-left: var(--space_sm);
	}
	.settings {
		display: flex;
		padding: var(--space_md);
		margin-top: var(--space_md);
		width: 100%;
	}
	.transition_wrapper {
		display: flex;
		flex-direction: column;
	}
</style>
