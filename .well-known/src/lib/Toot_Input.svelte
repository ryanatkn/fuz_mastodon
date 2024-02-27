<script lang="ts">
	import Alert from '@ryanatkn/fuz/Alert.svelte';
	import {slide} from 'svelte/transition';

	import {parse_mastodon_status_url} from '$lib/mastodon.js';

	export let url: string;
	export let attrs: any = undefined;

	$: parsed = parse_mastodon_status_url(url);
	$: invalid = !!(url && !parsed);
</script>

<fieldset>
	<div class="row" class:spaced={invalid}>
		<label title="where to load the toot" class="flex_1 row">
			<a class="icon_button box spaced_hz" style:font-size="var(--size_xl)" href={url || undefined}
				>🔗</a
			>
			<input
				bind:value={url}
				placeholder="> toot url"
				on:focus={(e) => e.currentTarget.select()}
				{...attrs}
			/>
		</label>
	</div>
	{#if invalid}
		<div transition:slide>
			<Alert status="error">invalid Mastodon status url</Alert>
		</div>
	{/if}
</fieldset>
