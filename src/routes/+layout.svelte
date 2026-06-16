<script lang="ts">
	import 'virtual:fuz.css';
	import '@fuzdev/fuz_code/theme.css';
	import './style.css';

	import ThemeRoot from '@fuzdev/fuz_ui/ThemeRoot.svelte';
	import Dialog from '@fuzdev/fuz_ui/Dialog.svelte';
	import DialogContent from '@fuzdev/fuz_ui/DialogContent.svelte';
	import ContextmenuRoot from '@fuzdev/fuz_ui/ContextmenuRoot.svelte';
	import {contextmenu_attachment} from '@fuzdev/fuz_ui/contextmenu_state.svelte.ts';
	import {SiteState, site_context} from '@fuzdev/fuz_ui/site.svelte.ts';
	import {logo_fuz_mastodon} from '@fuzdev/fuz_ui/logos.ts';
	import pkg_json from 'virtual:pkg.json';

	import Settings from './Settings.svelte';
	import type {Snippet} from 'svelte';

	const {
		children,
	}: {
		children: Snippet;
	} = $props();

	site_context.set(new SiteState({icon: logo_fuz_mastodon, pkg_json}));

	let show_settings = $state.raw(false);
</script>

<svelte:head>
	<title>@fuzdev/fuz_mastodon</title>
</svelte:head>

<svelte:body
	{@attach contextmenu_attachment([
		{
			snippet: 'text',
			props: {
				content: 'Settings',
				icon: '?',
				run: () => {
					show_settings = true;
				},
			},
		},
		{
			snippet: 'text',
			props: {
				content: 'Reload',
				icon: '⟳',
				run: () => {
					location.reload();
				},
			},
		},
	])}
/>

<ThemeRoot>
	<ContextmenuRoot>
		{@render children()}
		{#if show_settings}
			<Dialog onclose={() => (show_settings = false)}>
				<DialogContent>
					<Settings />
				</DialogContent>
			</Dialog>
		{/if}
	</ContextmenuRoot>
</ThemeRoot>
