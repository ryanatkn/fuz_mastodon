<script lang="ts">
	import LibraryHeader from '@fuz.dev/fuz_library/LibraryHeader.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';

	import Toot from '$lib/Toot.svelte';
	import {mastodon_cache} from '$routes/mastodon_cache.js';
	import {package_json} from '$lib/package.js';

	// TODO @multiple refactor mastodon fake data, avoid loading in production, lazy import?
	const cache = import.meta.env.DEV ? mastodon_cache : null;

	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main>
	<section class="box prose">
		<LibraryHeader {pkg} />
	</section>
	<section class="box width_sm">
		<Toot
			replies
			storage_key="example_1"
			{cache}
			initial_url="https://hci.social/@ryanatkn/109768104377997044"
			initial_autoload={true}
		/>
	</section>
	<section>
		<LibraryFooter {pkg} root_url="https://www.fuz.dev/" />
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
