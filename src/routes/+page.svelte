<script lang="ts">
	import Alert from '@fuz.dev/fuz_library/Alert.svelte';
	import {base} from '$app/paths';

	import Header from '$routes/Header.svelte';
	import Mreows from '$routes/Mreows.svelte';

	let mreows: Array<{icon: string}> | undefined;
</script>

<main class="prose">
	<section class="box">
		<Header />
		<Alert>
			<span slot="icon"
				>{#if mreows}{mreows[0].icon}{:else}✨{/if}</span
			><span
				>hello, welcome to <a href="https://github.com/fuz-dev/fuz_template"
					>@fuz.dev/fuz_template</a
				></span
			>
		</Alert>
		<p>
			here's an <a href="{base}/route">example route</a>
		</p>
	</section>
	<Mreows bind:mreows />
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 auto;
	}
</style>
