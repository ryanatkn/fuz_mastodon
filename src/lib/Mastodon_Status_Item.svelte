<script lang="ts">
	import {format, formatDistance} from 'date-fns';
	import {slide} from 'svelte/transition';
	import {strip_start} from '@ryanatkn/belt/string.js';

	import type {Mastodon_Status} from '$lib/mastodon.js';

	export let item: Mastodon_Status;

	// see the CSP in `svelte.config.js`
	/* eslint-disable svelte/no-at-html-tags */

	$: ({created_at, edited_at, content, account, url, sensitive, spoiler_text} = item);
	$: account_created = account.created_at;
	$: account_avatar = account.avatar_static;
	$: account_url = account.url;
	$: account_display_name = account.display_name;
	$: account_followers_count = account.followers_count;
	$: account_following_count = account.following_count;
	$: account_acct = account.acct;
	$: account_note = account.note;

	$: created = format(new Date(account_created), 'PPpp');
	$: created_ago = formatDistance(new Date(), new Date(created_at));
	$: edited = edited_at ? format(new Date(edited_at), 'PPpp') : null;
	$: edited_ago = edited_at ? formatDistance(new Date(), new Date(edited_at)) : null;
	$: joined = format(new Date(account_created), 'MMM yyyy');

	let show_note = false;
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
		<div class="content prose panel p_md mb_lg" transition:slide>
			{@html account_note}
		</div>
	{/if}
	<div class="content prose">
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
