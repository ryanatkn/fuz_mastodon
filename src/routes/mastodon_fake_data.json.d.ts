// TODO @multiple refactor mastodon fake data
declare module '$routes/mastodon_fake_data.json' {
	import type {MastodonResponseData} from '$lib/mastodon.js';
	const cached: MastodonResponseData[];
	export default cached;
}
