<script lang="ts">
	import PackageDetail from '@ryanatkn/fuz/PackageDetail.svelte';
	import {pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import EcosystemLinksPanel from '@ryanatkn/fuz/EcosystemLinksPanel.svelte';

	import PageFooter from '$routes/PageFooter.svelte';

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
			<PackageDetail {pkg} />
		</div>
	</section>
	<EcosystemLinksPanel />
	<div class="box">
		<PageFooter {pkg} />
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
