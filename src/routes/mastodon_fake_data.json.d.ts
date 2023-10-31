// TODO @multiple refactor mastodon fake data, avoid loading in production, lazy import?
declare module '$routes/mastodon_fake_data.json' {
	import type {Mastodon_Response_Data} from '$lib/mastodon.js';
	const cached: Mastodon_Response_Data[];
	export default cached;
}
