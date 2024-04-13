<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import Library_Footer from '@ryanatkn/fuz/Library_Footer.svelte';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';

	interface Props {
		pkg: Package_Meta;
	}

	const {pkg}: Props = $props();
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
		margin: var(--space_xl3) 0;
	}
	.breadcrumb_wrapper {
		font-size: var(--size_lg);
		margin-top: var(--space_xl3);
	}
</style>
