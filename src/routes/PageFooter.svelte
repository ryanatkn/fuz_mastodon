<script lang="ts">
	import Breadcrumb from '@ryanatkn/fuz/Breadcrumb.svelte';
	import DocsFooter from '@ryanatkn/fuz/DocsFooter.svelte';
	import type {Library} from '@ryanatkn/fuz/library.svelte.js';

	interface Props {
		library: Library;
	}

	const {library}: Props = $props();
</script>

<footer>
	<nav>
		<Breadcrumb>{library.package_json.glyph}</Breadcrumb>
	</nav>
	{#if library.package_json}
		<DocsFooter {library} root_url="https://www.fuz.dev/" />
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
