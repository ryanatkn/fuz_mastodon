<script lang="ts">
	import Breadcrumb from '@fuzdev/fuz_ui/Breadcrumb.svelte';
	import DocsFooter from '@fuzdev/fuz_ui/DocsFooter.svelte';
	import type {Library} from '@fuzdev/fuz_ui/library.svelte.js';

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
