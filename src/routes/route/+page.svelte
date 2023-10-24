<script lang="ts">
	import Breadcrumb from '@fuz.dev/fuz_library/Breadcrumb.svelte';
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';
	import PendingAnimation from '@fuz.dev/fuz_library/PendingAnimation.svelte';
	import {parse_package_meta} from '@fuz.dev/fuz_library/package_meta.js';
	import LibraryHeader from '@fuz.dev/fuz_library/LibraryHeader.svelte';
	import LibraryFooter from '@fuz.dev/fuz_library/LibraryFooter.svelte';
	import type {PackageJson} from '@grogarden/gro/package_json.js';
	import {slide} from 'svelte/transition';
	import {onMount} from 'svelte';

	import Header from '$routes/Header.svelte';

	// This demonstrates loading the public published `package.json`
	// for the repo at `.well-known/package.json`.
	// There are better ways to get this data at buildtime to avoid the runtime fetch,
	// but this is just a demo.
	// See the Gro docs for `.well-known/package.json`:
	// https://github.com/grogarden/gro/blob/main/src/lib/docs/gro_plugin_sveltekit_frontend.md
	const url = 'https://template.fuz.dev/.well-known/package.json';

	let loading = false;
	let package_json: PackageJson | undefined;
	let error_message: string | undefined;

	$: pkg = package_json ? parse_package_meta(url, package_json) : undefined;

	const load_package_json = async () => {
		loading = true;
		error_message = undefined;
		try {
			package_json = await (await fetch(url)).json();
		} catch (err) {
			error_message = 'failed to load ' + url;
		}
		loading = false;
	};

	onMount(() => {
		void load_package_json();
	});
</script>

<main class="box width_full">
	<section class="box prose">
		<Header />
		<p>this is an example route</p>
	</section>
	<section><Breadcrumb>🏠</Breadcrumb></section>
	<div class="box width_sm">
		{#if loading}
			<PendingAnimation />
		{:else if pkg}
			<div in:slide>
				<section>
					<LibraryHeader {pkg} />
				</section>
				<section>
					<LibraryFooter {pkg} root_url="https://www.fuz.dev/" />
				</section>
			</div>
		{:else if error_message}
			<Alert status="error">{error_message}</Alert>
		{/if}
	</div>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
	section {
		margin-bottom: var(--spacing_3);
	}
</style>
