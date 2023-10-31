<script lang="ts">
	import Package_Detail from '@fuz.dev/fuz_library/Package_Detail.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';

	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json} from '$lib/package.js';

	// TODO hacky - maybe put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json);
</script>

<main class="width_md">
	<div class="prose">
		<section>
			<header>
				<h1>{pkg.repo_name}</h1>
			</header>
			<Breadcrumb>{pkg.package_json.icon}</Breadcrumb>
		</section>
	</div>
	<section class="box width_full spaced">
		<div class="panel padded_md width_md">
			<Package_Detail {pkg} />
		</div>
	</section>
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
