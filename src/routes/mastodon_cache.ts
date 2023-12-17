import type {Fetch_Value_Cache} from '@grogarden/util/fetch.js';

import mastodon_fake_data from '$routes/mastodon_fake_data.json';

// TODO @multiple refactor mastodon fake data, avoid loading in production, lazy import?

export const mastodon_cache: Fetch_Value_Cache = new Map(mastodon_fake_data.map((d) => [d.url, d]));
