import {strip_end} from '@grogarden/util/string.js';
import {wait} from '@grogarden/util/async.js';
import {Logger} from '@grogarden/util/log.js';

// TODO extract to fuz_mastodon or fuz_fediverse or fuz_fedi or fuz_activitypub

// TODO go through a single fetch helper and trace each call to the API,
// so we can see the history in a tab displayed to any users who want to dig

// TODO these names need help
// https://${host}/users/${author}/statuses/${id} // uri
// https://${host}/@${author}/${id} // url
// https://${host}/api/v1/statuses/${id} // status endpoint
// https://${host}/api/v1/statuses/${id}/context // status context endpoint
// https://${host}/api/v1/statuses/${id}/favourited_by // status favourited by endpoint

export type Mastodon_Cache = Map<string, Mastodon_Response_Data>;

const CACHE_NETWORK_DELAY = 0; // set this to like 1000 to see how the animations behave

const headers = {
	accept: 'application/json',
	'content-type': 'application/jsno',
};

// this is used to get the `mastodon_fake_data.json` response data,
// see where `responses` is used - could be improved
// const responses: Array<{url: string; data: any}> = [];
// const flush_responses = () => {
// 	console.log('flushing responses', JSON.stringify(responses));
// 	responses.length = 0;
// };
// window.flush_responses = flush_responses;

const log = new Logger(['[mastodon]']);

export interface Response_Data<T = any> {
	url: string;
	data: T;
}

export type Mastodon_Response_Data = Response_Data<
	Mastodon_Context | Mastodon_Status | Mastodon_Favourite
>;

export const fetch_data = async (url: string, cache?: Mastodon_Cache | null): Promise<any> => {
	const r = cache?.get(url);
	if (r) {
		log.info('[fetch_data] cached', r);
		await wait(CACHE_NETWORK_DELAY);
		return Promise.resolve(r.data);
	}
	try {
		log.info('[fetch_data] url with headers', url, headers);
		const res = await fetch(url, {headers});
		if (!res.ok) return null;
		log.info('[fetch_data] res', url, res);
		const h = Object.fromEntries(res.headers.entries());
		// TODO process ratelimiting headers
		// x-ratelimit-limit: "300"
		// x-ratelimit-remaining: "297"
		// x-ratelimit-reset: "2023-11-08T17:55:00.422141Z"
		log.info('[fetch_data] fetched headers', url, h);
		const fetched = await res.json();
		log.info('[fetch_data] fetched json', fetched);
		// responses.push({url, data: fetched});
		return fetched;
	} catch (err) {
		return null;
	}
};

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
	cache?: Mastodon_Cache | null,
): Promise<Mastodon_Context | null> => {
	const url = to_api_status_context_url(host, id);
	return fetch_data(url, cache);
};

export const fetch_status = async (
	host: string,
	id: string,

	cache?: Mastodon_Cache | null,
): Promise<Mastodon_Status | null> => {
	const url = to_api_status_url(host, id);
	return fetch_data(url, cache);
};

export const fetch_favourites = async (
	host: string,
	status: Mastodon_Status,
	cache?: Mastodon_Cache | null,
): Promise<Mastodon_Favourite[] | null> => {
	const url = to_api_favourites_url(host, status.id);
	return fetch_data(url, cache);
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
