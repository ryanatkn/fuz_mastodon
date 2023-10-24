<script lang="ts">
	import Toot from '$lib/Toot.svelte';
	import {mastodon_cache} from '$routes/mastodon_cache.js';

	// TODO @multiple refactor mastodon fake data, avoid loading in production, lazy import?
	const cache = import.meta.env.DEV ? mastodon_cache : null;
</script>

<main>
	<section class="box prose">
		<h1>fuz_mastodon</h1>
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
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
