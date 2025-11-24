<script lang="ts">
	import Docs_Content from '@ryanatkn/fuz/Docs_Content.svelte';
	import {tomes_context} from '@ryanatkn/fuz/tome.js';
	import {pkg_context} from '@ryanatkn/fuz/pkg.svelte.js';

	const tomes_by_name = tomes_context.get();

	const tomes = Array.from(tomes_by_name.values());

	const pkg = pkg_context.get();
</script>

<Docs_Content {tomes} {pkg}></Docs_Content>
