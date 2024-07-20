<script lang="ts">
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Package_Summary from '@ryanatkn/fuz/Package_Summary.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import {base} from '$app/paths';
	// TODO @many why is this import needed? `Code` already imports it. Fails in dev with SSR enabled without it. Is there a Vite config option that would be better? I tried the combinations of `ssr.external/noExternal/external` with `@ryanatkn/fuz_code` and `prismjs`.
	import 'prismjs';
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import type {Fetch_Value_Cache} from '@ryanatkn/belt/fetch.js';
	import {DEV} from 'esm-env';
	import {onMount} from 'svelte';

	import Toot from '$lib/Toot.svelte';
	import {package_json, src_json} from '$routes/package.js';

	let cache: Fetch_Value_Cache | undefined | null = $state();

	onMount(async () => {
		if (DEV) {
			cache = new Map((await import('./mastodon_dev_cache_data.js')).mastodon_dev_cache_data);
			// To get the latest cache data, run this in the console: (and disable the `reply_filter` if you want all the data)
			// cache = new Map();
			// window.cache = cache;
			// setTimeout(() => navigator.clipboard.writeText(JSON.stringify(Array.from(cache.entries()))), 500)
		} else {
			cache = null;
		}
	});

	const pkg = parse_package_meta(package_json, src_json);

	const url = 'https://hci.social/@ryanatkn/111491794208793604';
</script>

<main class="p_lg">
	<section class="box">
		<div class="panel p_lg mb_xl5 shadow_md bg">
			<Package_Summary {pkg} />
		</div>
		<blockquote>⚠️ This project is still early, and its APIs will change.</blockquote>
	</section>
	<section class="width_md">
		<div class="mb_lg w_100">
			<div class="w_100 mb_lg">
				<Code lang="ts" content={`import Toot from '@ryanatkn/fuz_mastodon/Toot.svelte';`} />
			</div>
			<div class="w_100">
				<Code
					content={`<Toot
	url="${url}"
	initial_autoload
	include_replies
	reply_filter={(item) => (
		{type: 'favourited_by', favourited_by: [item.account.acct]}
	)}
	storage_key="example_1"
	{cache}
/>`}
				/>
			</div>
		</div>
	</section>
	<section class="width_sm">
		{#if cache !== undefined}
			<Toot
				{url}
				initial_autoload
				include_replies
				reply_filter={(item) => ({type: 'favourited_by', favourited_by: [item.account.acct]})}
				storage_key="example_1"
				{cache}
			/>
		{/if}
	</section>
	<section class="width_md">
		<h2>Allowlisting replies with custom rules</h2>
		<p>
			By default, no replies are included. You can opt into including replies with <code
				>include_replies</code
			>
			and customize them with <code>reply_filter</code>.
		</p>
		<h3>Allow all</h3>
		<p>Adding <code>include_replies</code> enables all replies by default.</p>
		<div class="w_100">
			<Code
				content={`<Toot
	url="${url}"
	include_replies
/>`}
			/>
			<p>
				This is the default value for <code>reply_filter</code>. It does nothing here but it's shown
				for clarity.
			</p>
			<div class="w_100">
				<Code
					content={`<Toot
	url="${url}"
	include_replies
	reply_filter={() => (
		{type: 'custom', should_include: () => true}
	)}
/>`}
				/>
			</div>
			<h3>Allow if favourited by specific accounts</h3>
			<p>You can provide a list of names whose favourites cause the reply to be shown.</p>
			<div class="w_100">
				<Code
					content={`<Toot
	url="${url}"
	include_replies
	reply_filter={() => (
		{type: 'favourited_by', favourited_by: ['username1', 'user2']}
	)},
/>`}
				/>
			</div>
			<h3>Allow if favourited by the root status author</h3>
			<div class="w_100">
				<Code
					content={`<Toot
	url="${url}"
	include_replies
	reply_filter={(item) => (
		{type: 'favourited_by', favourited_by: [item.account.acct]}
	)},
/>`}
				/>
			</div>
			<h3>Allow with a mimimum number of favourites</h3>
			<div class="w_100">
				<Code
					content={`<Toot
	url="${url}"
	include_replies
	reply_filter={() => (
		{type: 'minimum_favourites', minimum_favourites: 3}
	)},
/>`}
				/>
			</div>
			<h3>Allow on custom conditions</h3>
			<div class="w_100">
				<Code
					content={`<Toot
	url="${url}"
	include_replies
	reply_filter={() => (
		{
			type: 'custom',
			should_include: (item, root_status, status_context) => {
				/* return boolean */
			})
		}
	)},
/>`}
				/>
			</div>
			<h3>Allow on multiple conditions</h3>
			<p>Replies are included if <strong>any</strong> filter passes.</p>
			<div class="w_100">
				<Code
					content={`<Toot
	url="${url}"
	include_replies
	reply_filter={(item) => [
		{type: 'favourited_by', favourited_by: ['trusted', 'tasteful']},
		{type: 'minimum_favourites', minimum_favourites: 10},
		{type: 'custom', should_include: () => Math.random() > 0.5)}
	]},
/>`}
				/>
			</div>
			<h3>Allow none</h3>
			<p>Simply omit <code>include_replies</code>:</p>
			<div class="w_100 mb_lg">
				<Code content={`<Toot	url="${url}" />`} />
			</div>
			<p>
				Or pass <code>null</code> or <code>undefined</code> or <code>[]</code> for
				<code>reply_filter</code>:
			</p>
			<div class="w_100">
				<Code
					content={`<Toot
	url="${url}"
	include_replies
	reply_filter={null}
/>`}
				/>
				<p>
					Or return no filters (<code>null</code> or <code>undefined</code> or <code>[]</code>):
				</p>
				<div class="w_100">
					<Code
						content={`<Toot
	url="${url}"
	include_replies
	reply_filter={() => null}
/>`}
					/>
				</div>
			</div>
		</div>
	</section>
	<div class="my_xl5">
		<Library_Footer {pkg} root_url="https://www.fuz.dev/">
			{#snippet logo_header()}
				<a class="mb_xs" href="{base}/about">about</a>
			{/snippet}
		</Library_Footer>
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	section {
		margin: var(--space_xl5) 0;
	}
</style>
