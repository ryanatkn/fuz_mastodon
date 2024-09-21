<script lang="ts">
	import type {Mastodon_Status} from '$lib/mastodon.js';
	import Message from '$lib/Mastodon_Status_Item.svelte';
	import Mastodon_Status_Tree from '$lib/Mastodon_Status_Tree.svelte';

	interface Props {
		item: Mastodon_Status;
		items: Mastodon_Status[];
	}

	const {item, items}: Props = $props();

	const {id} = $derived(item);
	const replies = $derived(items.filter((i) => i.in_reply_to_id === id));
</script>

{#if replies.length}
	<ul class="mastodon_status_tree unstyled">
		{#each replies as reply (reply.id)}
			<li>
				<Message item={reply} />
				<Mastodon_Status_Tree item={reply} {items} />
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
