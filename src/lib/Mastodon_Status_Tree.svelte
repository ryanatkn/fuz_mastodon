<script lang="ts">
	import type {Mastodon_Status} from '$lib/mastodon.js';
	import Message from '$lib/Mastodon_Status_Item.svelte';

	export let item: Mastodon_Status;
	export let items: Mastodon_Status[]; // TODO make this a map?

	$: ({id} = item);
	$: replies = items.filter((i) => i.in_reply_to_id === id);
</script>

{#if replies.length}
	<ul class="mastodon_status_tree">
		{#each replies as reply (reply.id)}
			<li>
				<Message item={reply} />
				<svelte:self item={reply} {items} />
			</li>
		{/each}
	</ul>
{/if}

<style>
	.mastodon_status_tree {
		padding-left: var(--space_xl4);
		margin-bottom: var(--space_md);
	}
	li {
		flex-direction: column;
	}
</style>
