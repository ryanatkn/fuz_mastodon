// TODO @multiple refactor mastodon fake data, avoid loading in production, lazy import?
declare module '$routes/mastodon_fake_data.json' {
	import type {MastodonResponseData} from '$lib/mastodon.js';
	const cached: MastodonResponseData[];
	export default cached;
}
