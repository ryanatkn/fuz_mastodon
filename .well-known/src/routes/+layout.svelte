<script lang="ts">
	import '@ryanatkn/fuz/style.css';
	import '@ryanatkn/fuz/theme.css';
	import '@ryanatkn/fuz/semantic_classes.css';
	import '@ryanatkn/fuz/utility_classes.css';
	import '@ryanatkn/fuz/variable_classes.css';
	import '@ryanatkn/fuz/animations.css';
	import '$routes/style.css';
	import '@ryanatkn/fuz_code/prism.css'; // TODO maybe import from Code?

	import Themed from '@ryanatkn/fuz/Themed.svelte';
	import Dialog from '@ryanatkn/fuz/Dialog.svelte';
	import Contextmenu from '@ryanatkn/fuz/Contextmenu.svelte';
	import {create_contextmenu} from '@ryanatkn/fuz/contextmenu.js';

	import Settings from '$routes/Settings.svelte';

	const contextmenu = create_contextmenu();

	let show_settings = false;
</script>

<svelte:head>
	<title>@ryanatkn/fuz_mastodon</title>
</svelte:head>

<svelte:body
	use:contextmenu.action={[
		{
			content: 'Settings',
			icon: '?',
			run: () => {
				show_settings = true;
			},
		},
		{
			content: 'Reload',
			icon: '⟳',
			run: () => {
				location.reload();
			},
		},
	]}
/>

<Themed>
	<slot />
	<Contextmenu {contextmenu} />
	{#if show_settings}
		<Dialog on:close={() => (show_settings = false)}>
			<div class="pane">
				<Settings />
			</div>
		</Dialog>
	{/if}
</Themed>
