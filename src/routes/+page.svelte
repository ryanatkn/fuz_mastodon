<script lang="ts">
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import Package_Summary from '@ryanatkn/fuz/Package_Summary.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import {base} from '$app/paths';
	import 'prismjs'; // TODO shouldn't be needed
	import Code from '@ryanatkn/fuz_code/Code.svelte';
	import type {Fetch_Value_Cache} from '@ryanatkn/belt/fetch.js';

	import Toot from '$lib/Toot.svelte';
	import {package_json, src_json} from '$routes/package.js';
	import {onMount} from 'svelte';

	let cache: Fetch_Value_Cache | undefined | null = $state();

	onMount(async () => {
		if (import.meta.env.DEV) {
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
	replies={true}
	storage_key="example_1"
	{cache}
/>`}
				/>
			</div>
		</div>
	</section>
	<section class="width_sm">
		{#if cache !== undefined}
			<Toot {initial_url} initial_autoload={true} replies={true} storage_key="example_1" {cache} />
		{/if}
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
