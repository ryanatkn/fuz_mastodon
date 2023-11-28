<script lang="ts">
	import Library_Header from '@fuz.dev/fuz_library/Library_Header.svelte';
	import Library_Footer from '@fuz.dev/fuz_library/Library_Footer.svelte';
	import Card from '@fuz.dev/fuz_library/Card.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import {base} from '$app/paths';
	import 'prismjs'; // TODO shouldn't be needed
	import Code from '@fuz.dev/fuz_code/Code.svelte';

	import Toot from '$lib/Toot.svelte';
	import {mastodon_cache} from '$routes/mastodon_cache.js';
	import {package_json, src_json} from '$lib/package.js';

	// TODO @multiple refactor mastodon fake data, avoid loading in production, lazy import?
	const cache = import.meta.env.DEV ? mastodon_cache : null;

	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
</script>

<main>
	<section class="box prose">
		<Library_Header {pkg} />
		<blockquote>⚠️ this project is still early, and its APIs will change</blockquote>
	</section>
	<section class="box width_md">
		<div class="spaced box width_full">
			<div class="box width_full spaced">
				<Code lang="ts" content={`import Toot from '@fuz.dev/fuz_mastodon/Toot.svelte'`} />
			</div>
			<div class="box width_full">
				<Code
					content={`<Toot
	initial_url="https://hci.social/@ryanatkn/109768104377997044"
	initial_autoload={true}
	replies={true}
	storage_key="example_1"
	{cache}
/>`}
				/>
			</div>
		</div>
	</section>
	<section class="box width_sm">
		<Toot
			initial_url="https://hci.social/@ryanatkn/109768104377997044"
			initial_autoload={true}
			replies={true}
			storage_key="example_1"
			{cache}
		/>
	</section>
	<section class="box">
		<!-- TODO this slot API is hacky -->
		<Card href="{base}/about"><svelte:fragment slot="icon">{''}</svelte:fragment>about</Card>
	</section>
	<section>
		<Library_Footer {pkg} root_url="https://www.fuz.dev/" />
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
		margin: var(--spacing_5) 0;
	}
</style>
