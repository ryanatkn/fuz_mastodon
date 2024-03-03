<script lang="ts">
	import Package_Detail from '@ryanatkn/fuz/Package_Detail.svelte';
	import {parse_package_meta} from '@ryanatkn/gro/package_meta.js';
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';

	import Page_Footer from '$routes/Page_Footer.svelte';
	import {package_json, src_json} from '$routes/package.js';

	// TODO hacky - maybe put in context?
	const pkg = parse_package_meta(package_json.homepage, package_json, src_json);
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
	<section class="box w_100 mb_lg">
		<div class="panel p_md width_md">
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
