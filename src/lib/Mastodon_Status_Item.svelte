<script lang="ts">
	import {format, formatDistance} from 'date-fns';
	import {slide} from 'svelte/transition';
	import {strip_start} from '@ryanatkn/belt/string.js';

	import type {Mastodon_Status} from '$lib/mastodon.js';

	interface Props {
		item: Mastodon_Status;
	}

	const {item}: Props = $props();

	// see the CSP in `svelte.config.js`
	/* eslint-disable svelte/no-at-html-tags */

	const {created_at, edited_at, content, account, url, sensitive, spoiler_text} = $derived(item);
	const account_created = $derived(account.created_at);
	const account_avatar = $derived(account.avatar_static);
	const account_url = $derived(account.url);
	const account_display_name = $derived(account.display_name);
	const account_followers_count = $derived(account.followers_count);
	const account_following_count = $derived(account.following_count);
	const account_acct = $derived(account.acct);
	const account_note = $derived(account.note);

	const created = $derived(format(new Date(account_created), 'PPpp'));
	const created_ago = $derived(formatDistance(new Date(), new Date(created_at)));
	const edited = $derived(edited_at ? format(new Date(edited_at), 'PPpp') : null);
	const edited_ago = $derived(edited_at ? formatDistance(new Date(), new Date(edited_at)) : null);
	const joined = $derived(format(new Date(account_created), 'MMM yyyy'));

	let show_note = $state(false);
	const toggle_note = (): void => {
		show_note = !show_note;
	};
</script>

<div class="mastodon_status_item">
	<header>
		<button
			class="avatar plain icon_button"
			title={account_note ? `${show_note ? 'hide' : 'show'} ${account_acct}'s profile` : undefined}
			onclick={account_note ? toggle_note : undefined}
			disabled={!account_note}
			><img class="icon" src={account_avatar} alt="avatar for {account_acct}" /></button
		>
		<div class="names">
			<div class="name">
				<a href={account_url} title={strip_start(account_url, 'https://')}>
					{account_display_name}
				</a>
			</div>
			<small title="following {account_following_count}, {account_followers_count} followers"
				>{account_acct}</small
			>
			<small
				class="date"
				title="posted {created}{edited ? `, edited ${edited}` : ''}, joined {joined}"
				><a href={url}>{created_ago} ago{edited_ago ? `, edited ${edited_ago} ago` : ''}</a></small
			>
		</div>
	</header>
	{#if show_note && account_note}
		<div class="content panel p_md mb_lg" transition:slide>
			{@html account_note}
		</div>
	{/if}
	<div class="content">
		{#if sensitive}<details>
				<summary>{spoiler_text || 'view sensitive content'}</summary>{@html content}
			</details>{:else}{@html content}{/if}
	</div>
</div>

<style>
	.mastodon_status_item {
		display: flex;
		flex-direction: column;
		background-color: var(--panel_bg, var(--fg_1));
		border-radius: var(--radius_sm);
		padding: var(--space_md);
		margin-bottom: var(--space_md);
	}
	.mastodon_status_item:last-child {
		margin-bottom: 0;
	}
	.content :global(.invisible) {
		display: none;
	}
	/* undo fuz's `.ellipsis` and implement Mastodon's */
	.content :global(.ellipsis) {
		display: inline;
		white-space: initial;
	}
	.content :global(.ellipsis)::after {
		content: '...';
	}
	header {
		display: flex;
		align-items: center;
		margin-bottom: var(--space_sm);
	}
	.avatar {
		margin-bottom: 0;
		border-radius: 0;
	}
	.icon {
		width: var(--icon_size);
	}
	.names {
		display: flex;
		flex-direction: column;
		padding: 0 var(--space_md);
	}
	.name {
		display: flex;
		font-size: var(--font_size_lg);
	}
	.names small,
	.date a {
		font-weight: 500;
		color: var(--text_2);
	}
	.date {
		display: flex;
	}
</style>
