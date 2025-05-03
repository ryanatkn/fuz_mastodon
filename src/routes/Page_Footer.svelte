<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import Docs_Footer from '@ryanatkn/fuz/Docs_Footer.svelte';
	import type {Package_Meta} from '@ryanatkn/gro/package_meta.js';

	interface Props {
		pkg: Package_Meta;
	}

	const {pkg}: Props = $props();
</script>

<footer>
	<nav>
		<Breadcrumb>{pkg.package_json.glyph}</Breadcrumb>
	</nav>
	{#if pkg.package_json}
		<Docs_Footer {pkg} root_url="https://www.fuz.dev/" />
	{/if}
</footer>

<style>
	footer {
		margin-bottom: var(--space_xl7);
	}
	nav {
		font-size: var(--font_size_lg);
		margin-top: var(--space_xl3);
	}
</style>
