<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import type {Package_Meta} from '@ryanatkn/fuz/package_meta.js';

	export let pkg: Package_Meta;
</script>

<footer>
	{#if pkg.package_json}
		<Library_Footer {pkg} root_url="https://www.fuz.dev/" />
	{/if}
	<slot />
	<div class="breadcrumb_wrapper">
		<Breadcrumb>{pkg.package_json?.icon}</Breadcrumb>
	</div>
</footer>

<style>
	footer {
		margin: var(--spacing_3) 0;
	}
	.breadcrumb_wrapper {
		font-size: var(--size_lg);
		margin-top: var(--spacing_3);
	}
</style>
