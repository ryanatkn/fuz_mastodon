import {strip_end} from '@grogarden/util/string.js';
import {Fetch_Value_Cache, fetch_value} from '@grogarden/util/fetch.js';

// TODO go through a single fetch helper and trace each call to the API,
// so we can see the history in a tab displayed to any users who want to dig

// TODO these names need help
// https://${host}/users/${author}/statuses/${id} // uri
// https://${host}/@${author}/${id} // url
// https://${host}/api/v1/statuses/${id} // status endpoint
// https://${host}/api/v1/statuses/${id}/context // status context endpoint
// https://${host}/api/v1/statuses/${id}/favourited_by // status favourited by endpoint

export interface Response_Data<T = any> {
	url: string;
	data: T;
}

export type Mastodon_Response_Data = Response_Data<
	Mastodon_Context | Mastodon_Status | Mastodon_Favourite
>;

export const to_status_url = (host: string, id: string): string => `https://${host}/statuses/${id}`;

export const to_status_url_with_author = (host: string, id: string, author: string): string =>
	`https://${host}/@${author}/${id}`;

/**
 * longhand for `to_status_url_with_author`, apperas
 */
export const to_status_url_with_users_author = (host: string, id: string, author: string): string =>
	`https://${host}/users/${author}/statuses/${id}`;

export const to_api_status_url = (host: string, id: string): string =>
	`https://${host}/api/v1/statuses/${id}`;

export const to_api_status_context_url = (host: string, id: string): string =>
	`https://${host}/api/v1/statuses/${id}/context`;

export const to_api_favourites_url = (host: string, id: string): string =>
	`https://${host}/api/v1/statuses/${id}/favourited_by`;

// TODO should this have a `Parsed` prefix and then have a zod schema for the URL with a refinement type that uses `parse_status_url`?
export interface Mastodon_Status_Url {
	href: string;
	host: string;
	status_id: string;
	author?: string;
}

/**
 * Parses a url to a post or API endpoint for a post, aka Mastodon status context.
 * @param url
 * @returns the parsed host and id params, if any
 */
export const parse_status_url = (url: string): Mastodon_Status_Url | null => {
	try {
		const u = new URL(url);
		const parts = strip_end(u.pathname, '/context').split('/').filter(Boolean);
		const author = parts[0][0] === '@' ? parts[0].substring(1) : null;
		if (!author) return null;
		const id = parts.length > 1 ? parts[parts.length - 1] : null;
		if (!id) return null;
		return {href: url, host: u.host, author, status_id: id};
	} catch (err) {
		return null;
	}
};

export const fetch_status_context = async (
	host: string,
	id: string,
	cache?: Fetch_Value_Cache,
): Promise<Mastodon_Context | null> => {
	const url = to_api_status_context_url(host, id);
	const fetched = await fetch_value(url, {
		cache,
		return_early_from_cache: true,
	});
	if (!fetched.ok) return null;
	return fetched.value;
};

export const fetch_status = async (
	host: string,
	id: string,
	cache?: Fetch_Value_Cache,
): Promise<Mastodon_Status | null> => {
	const url = to_api_status_url(host, id);
	const fetched = await fetch_value(url, {
		cache,
		return_early_from_cache: true,
	});
	if (!fetched.ok) return null;
	return fetched.value;
};

export const fetch_favourites = async (
	host: string,
	status_id: string,
	cache?: Fetch_Value_Cache,
): Promise<Mastodon_Favourite[] | null> => {
	const url = to_api_favourites_url(host, status_id);
	const fetched = await fetch_value(url, {
		cache,
		return_early_from_cache: true,
	});
	if (!fetched.ok) return null;
	return fetched.value;
};

// TODO these are very in-progress

/**
 * Result from `https://:host/api/v1/statuses/:id/context`.
 * @see https://docs.joinmastodon.org/entities/Context/
 */
export interface Mastodon_Context {
	ancestors: Mastodon_Status[];
	descendants: Mastodon_Status[];
}

export interface Mastodon_Status {
	id: string;
	created_at: string;
	in_reply_to_id: string;
	in_reply_to_account_id: string;
	sensitive: boolean;
	spoiler_text: string;
	visibility: string;
	language: string;
	uri: string;
	url: string;
	replies_count: number;
	reblogs_count: number;
	favourites_count: number;
	edited_at: null | string;
	favourited: boolean;
	reblogged: boolean;
	muted: boolean;
	bookmarked: boolean;
	content: string;
	filtered: unknown[];
	reblog: unknown; // | null;
	account: {
		id: string;
		username: string;
		acct: string;
		display_name: string;
		locked: boolean;
		bot: boolean;
		discoverable: boolean;
		group: boolean;
		created_at: string;
		note: string;
		url: string;
		avatar: string;
		avatar_static: string;
		header: string;
		header_static: string;
		followers_count: number;
		following_count: number;
		statuses_count: number;
		last_status_at: string;
		emojis: unknown[];
		fields: unknown[];
	};
	media_attachments: unknown[];
	mentions: [
		{
			id: string;
			username: string;
			url: string;
			acct: string;
		},
	];
	tags: [
		{
			name: string;
			url: string;
		},
	];
	emojis: unknown[];
	card: unknown; // | null;
	poll: unknown; // | null;
}

export interface Mastodon_Favourite {
	id: string;
	username: string;
	acct: string;
	display_name: string;
	locked: boolean;
	bot: boolean;
	discoverable: boolean;
	group: boolean;
	created_at: string; // Datetime
	note: string;
	url: string;
	avatar: string;
	avatar_static: string;
	header: string;
	header_static: string;
	followers_count: number;
	following_count: number;
	statuses_count: number;
	last_status_at: string;
	emojis: unknown[];
	fields: Array<{
		name: string;
		value: string;
		verified_at: string; // Datetime
	}>;
}
