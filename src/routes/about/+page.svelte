<script lang="ts">
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import {pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import Ecosystem_Links_Panel from '@ryanatkn/fuz/Ecosystem_Links_Panel.svelte';

	import Page_Footer from '$routes/Page_Footer.svelte';

	const pkg = pkg_context.get();
</script>

<main class="width_upto_md">
	<div class="box">
		<header>
			<h1 class="my_xl3">{pkg.repo_name}</h1>
		</header>
		<nav class="mb_xl3">
			<Breadcrumb>{pkg.package_json.glyph}</Breadcrumb>
		</nav>
	</div>
	<section class="box width_100 mb_lg">
		<div class="panel p_md width_upto_md">
			<Package_Detail {pkg} />
		</div>
	</section>
	<Ecosystem_Links_Panel />
	<div class="box">
		<Page_Footer {pkg} />
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
