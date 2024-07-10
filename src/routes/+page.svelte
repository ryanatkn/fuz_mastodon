<script lang="ts">
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Package_Summary from '@ryanatkn/fuz/Package_Summary.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import {base} from '$app/paths';
	import 'prismjs'; // TODO shouldn't be needed
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import type {Fetch_Value_Cache} from '@ryanatkn/belt/fetch.js';
	import {DEV} from 'esm-env';
	import {onMount} from 'svelte';

	import Toot from '$lib/Toot.svelte';
	import {package_json, src_json} from '$routes/package.js';

	let cache: Fetch_Value_Cache | undefined | null = $state();

	onMount(async () => {
		if (DEV) {
			cache = new Map((await import('./mastodon_fake_cache_data.js')).mastodon_fake_cache_data);
		} else {
			cache = null;
		}
	});

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);

	const initial_url = 'https://hci.social/@ryanatkn/111491794208793604';
</script>

<main>
	<section class="box">
		<div class="panel p_lg mb_xl5 shadow_md bg">
			<Package_Summary {pkg} />
		</div>
		<blockquote>⚠️ This project is still early, and its APIs will change.</blockquote>
	</section>
	<section class="width_md">
		<div class="mb_lg w_100">
			<div class="w_100 mb_lg">
				<Code lang="ts" content={`import Toot from '@ryanatkn/fuz_mastodon/Toot.svelte'`} />
			</div>
			<div class="w_100">
				<Code
					content={`<Toot
	initial_url="${initial_url}"
	initial_autoload={true}
	include_replies
	reply_filter_rules={(item) => [
		{type: 'favourited_by', favourited_by: [item.account.acct]},
	]}
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
				{initial_url}
				initial_autoload={true}
				include_replies
				reply_filter_rules={(item) => [{type: 'favourited_by', favourited_by: [item.account.acct]}]}
				storage_key="example_1"
				{cache}
			/>
		{/if}
	</section>
	<section>
		<h2>Allowlisting replies with custom rules</h2>
		<p>
			By default, no replies are included. You can opt into including replies with <code
				>include_replies</code
			>
			and customize them with <code>reply_filter_rules</code>.
		</p>
		<h3>Allow all</h3>
		<p>Adding <code>include_replies</code> enables all replies by default.</p>
		<div class="w_100">
			<Code
				content={`<Toot
	initial_url="${initial_url}"
	include_replies
/>`}
			/>
			<p>
				This is the default value for <code>reply_filter_rules</code>. It does nothing here but it's
				shown for clarity.
			</p>
			<div class="w_100">
				<Code
					content={`<Toot
	initial_url="${initial_url}"
	include_replies
	reply_filter_rules={() => [
		{type: 'custom', should_include: () => true}
	]}
/>`}
				/>
			</div>
			<h3>Allow if favourited by specific accounts</h3>
			<p>You can provide a list of names whose favourites cause the reply to be shown.</p>
			<div class="w_100">
				<Code
					content={`<Toot
	initial_url="${initial_url}"
	include_replies
	reply_filter_rules={() => [
		{type: 'favourited_by', favourited_by: ['username1', 'user2']}
	]},
/>`}
				/>
			</div>
			<h3>Allow if favourited by the root status author</h3>
			<div class="w_100">
				<Code
					content={`<Toot
	initial_url="${initial_url}"
	include_replies
	reply_filter_rules={(item) => [
		{type: 'favourited_by', favourited_by: [item.account.acct]}
	]},
/>`}
				/>
			</div>
			<h3>Allow with a mimimum number of favourites</h3>
			<div class="w_100">
				<Code
					content={`<Toot
	initial_url="${initial_url}"
	include_replies
	reply_filter_rules={() => [
		{type: 'minimum_favourites', minimum_favourites: 3}
	]},
/>`}
				/>
			</div>
			<h3>Allow on custom conditions</h3>
			<div class="w_100">
				<Code
					content={`<Toot
	initial_url="${initial_url}"
	include_replies
	reply_filter_rules={() => [
		{
			type: 'custom',
			should_include: (item, root_status, context) => {/* return boolean */})
		}
	]},
/>`}
				/>
			</div>
			<h3>Multiple conditions</h3>
			<p>Replies are included if <strong>any</strong> filter passes.</p>
			<div class="w_100">
				<Code
					content={`<Toot
	initial_url="${initial_url}"
	include_replies
	reply_filter_rules={(item) => [
		{type: 'favourited_by', favourited_by: [item.account.acct]},
		{type: 'minimum_favourites', minimum_favourites: 3}
	]},
/>`}
				/>
			</div>
			<h3>Allow none</h3>
			<div class="w_100">
				<Code
					content={`<Toot
	initial_url="${initial_url}"
	include_replies
	reply_filter_rules={() => []}
/>`}
				/>
			</div>
		</div>
	</section>
	<section>
		<Library_Footer {pkg} root_url="https://www.fuz.dev/">
			{#snippet logo_header()}
				<a class="mb_xs" href="{base}/about">about</a>
			{/snippet}
		</Library_Footer>
	</section>
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
