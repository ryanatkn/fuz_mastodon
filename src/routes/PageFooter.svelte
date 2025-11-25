<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import DocsFooter from '@ryanatkn/fuz/DocsFooter.svelte';
	import type {Pkg} from '@ryanatkn/fuz/pkg.svelte.js';

	interface Props {
		pkg: Pkg;
	}

	const {pkg}: Props = $props();
</script>

<footer>
	<nav>
		<Breadcrumb>{pkg.package_json.glyph}</Breadcrumb>
	</nav>
	{#if pkg.package_json}
		<DocsFooter {pkg} root_url="https://www.fuz.dev/" />
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
