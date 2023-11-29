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
				<svelte:self item={reply} {items}>
					<Message item={reply} />
				</svelte:self>
			</li>
		{/each}
	</ul>
{/if}

<style>
	.mastodon_status_tree {
		padding-left: var(--spacing_4);
		margin-bottom: var(--spacing_md);
	}
	li {
		flex-direction: column;
	}
</style>
