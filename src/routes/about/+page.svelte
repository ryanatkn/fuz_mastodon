<script lang="ts">
	import LibraryDetail from '@ryanatkn/fuz/LibraryDetail.svelte';
	import {library_context} from '@ryanatkn/fuz/library.svelte.js';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import EcosystemLinksPanel from '@ryanatkn/fuz/EcosystemLinksPanel.svelte';

	import PageFooter from '$routes/PageFooter.svelte';

	const library = library_context.get();
</script>

<main class="width_upto_md">
	<div class="box">
		<header>
			<h1 class="my_xl3">{library.repo_name}</h1>
		</header>
		<nav class="mb_xl3">
			<Breadcrumb>{library.package_json.glyph}</Breadcrumb>
		</nav>
	</div>
	<section class="box width_100 mb_lg">
		<div class="panel p_md width_upto_md">
			<LibraryDetail {library} />
		</div>
	</section>
	<EcosystemLinksPanel />
	<div class="box">
		<PageFooter {library} />
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	h1 {
		display: flex;
		align-items: baseline;
		text-align: center;
	}
</style>
