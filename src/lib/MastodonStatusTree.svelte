<script lang="ts">
	import type {MastodonStatus} from '$lib/mastodon.js';
	import Message from '$lib/MastodonStatusItem.svelte';

	export let item: MastodonStatus;
	export let items: MastodonStatus[]; // TODO make this a map?

	$: ({id} = item);
	$: replies = items.filter((i) => i.in_reply_to_id === id);
</script>

<slot {item} {items} />
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
