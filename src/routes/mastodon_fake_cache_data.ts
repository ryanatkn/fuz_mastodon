import type {Url} from '@ryanatkn/gro/paths.js';
import type {Fetch_Value_Cache_Item} from '@ryanatkn/belt/fetch.js';

export const mastodon_fake_cache_data: Array<[Url, Fetch_Value_Cache_Item]> = [
	[
		'GET::https://hci.social/api/v1/statuses/111491794208793604',
		{
			key: 'GET::https://hci.social/api/v1/statuses/111491794208793604',
			url: 'https://hci.social/api/v1/statuses/111491794208793604',
			value: {
				id: '111491794208793604',
				created_at: '2023-11-29T03:49:30.034Z',
				in_reply_to_id: null,
				in_reply_to_account_id: null,
				sensitive: false,
				spoiler_text: '',
				visibility: 'unlisted',
				language: 'en',
				uri: 'https://hci.social/users/ryanatkn/statuses/111491794208793604',
				url: 'https://hci.social/@ryanatkn/111491794208793604',
				replies_count: 2,
				reblogs_count: 0,
				favourites_count: 0,
				edited_at: '2023-11-29T04:21:46.799Z',
				content:
					'<p>this post is embedded on <a href="https://mastodon.fuz.dev/" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="">mastodon.fuz.dev/</span><span class="invisible"></span></a> using a <a href="https://hci.social/tags/Svelte" class="mention hashtag" rel="tag">#<span>Svelte</span></a> component that loads the data in your browser on demand</p><p>the code is rough and early but works if you&#39;re reading this on mastodon.fuz.dev - <a href="https://github.com/fuz-dev/fuz_mastodon" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="ellipsis">github.com/fuz-dev/fuz_mastodo</span><span class="invisible">n</span></a></p><p>replies to this post that I favourite will appear on <a href="https://mastodon.fuz.dev/" target="_blank" rel="nofollow noopener noreferrer" translate="no"><span class="invisible">https://</span><span class="">mastodon.fuz.dev/</span><span class="invisible"></span></a></p>',
				reblog: null,
				application: {name: 'Web', website: null},
				account: {
					id: '109337961591161088',
					username: 'ryanatkn',
					acct: 'ryanatkn',
					display_name: 'Ryan Atkinson',
					locked: false,
					bot: false,
					discoverable: true,
					group: false,
					created_at: '2022-11-13T00:00:00.000Z',
					note: '<p>open source web dev, working on felt.dev, fuz.dev, grogarden.org, and spiderspace.org, <a href="https://hci.social/tags/ActivityStreams" class="mention hashtag" rel="tag">#<span>ActivityStreams</span></a> <a href="https://hci.social/tags/ActivityPub" class="mention hashtag" rel="tag">#<span>ActivityPub</span></a> <a href="https://hci.social/tags/JS" class="mention hashtag" rel="tag">#<span>JS</span></a> <a href="https://hci.social/tags/CSS" class="mention hashtag" rel="tag">#<span>CSS</span></a> <a href="https://hci.social/tags/HTML" class="mention hashtag" rel="tag">#<span>HTML</span></a> <a href="https://hci.social/tags/svelte" class="mention hashtag" rel="tag">#<span>svelte</span></a> <a href="https://hci.social/tags/SvelteKit" class="mention hashtag" rel="tag">#<span>SvelteKit</span></a></p>',
					url: 'https://hci.social/@ryanatkn',
					uri: 'https://hci.social/users/ryanatkn',
					avatar:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					avatar_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					header:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					header_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					followers_count: 37,
					following_count: 96,
					statuses_count: 13,
					last_status_at: '2023-11-29',
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'home',
							value:
								'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T18:48:11.596+00:00',
						},
						{
							name: 'code',
							value:
								'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T19:12:25.810+00:00',
						},
						{
							name: 'feltjs',
							value:
								'<a href="https://www.felt.dev" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">felt.dev</span><span class="invisible"></span></a>',
							verified_at: '2023-09-20T03:27:04.768+00:00',
						},
						{
							name: 'youtube',
							value:
								'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
							verified_at: null,
						},
					],
				},
				media_attachments: [],
				mentions: [],
				tags: [{name: 'svelte', url: 'https://hci.social/tags/svelte'}],
				emojis: [],
				card: {
					url: 'https://mastodon.fuz.dev/',
					title: '@fuz.dev/fuz_mastodon',
					description: '',
					language: 'en',
					type: 'link',
					author_name: '',
					author_url: '',
					provider_name: '',
					provider_url: '',
					html: '',
					width: 0,
					height: 0,
					image: null,
					image_description: '',
					embed_url: '',
					blurhash: null,
					published_at: null,
				},
				poll: null,
			},
			etag: null,
			last_modified: null,
		},
	],
	[
		'GET::https://hci.social/api/v1/statuses/111491794208793604/context',
		{
			key: 'GET::https://hci.social/api/v1/statuses/111491794208793604/context',
			url: 'https://hci.social/api/v1/statuses/111491794208793604/context',
			value: {
				ancestors: [],
				descendants: [
					{
						id: '111491816409848117',
						created_at: '2023-11-29T03:55:08.790Z',
						in_reply_to_id: '111491794208793604',
						in_reply_to_account_id: '109337961591161088',
						sensitive: false,
						spoiler_text: '',
						visibility: 'unlisted',
						language: 'en',
						uri: 'https://hci.social/users/ryanatkn/statuses/111491816409848117',
						url: 'https://hci.social/@ryanatkn/111491816409848117',
						replies_count: 1,
						reblogs_count: 0,
						favourites_count: 1,
						edited_at: null,
						content: '<p>(unlisted reply for demo purposes, please ignore)</p>',
						reblog: null,
						application: {name: 'Web', website: null},
						account: {
							id: '109337961591161088',
							username: 'ryanatkn',
							acct: 'ryanatkn',
							display_name: 'Ryan Atkinson',
							locked: false,
							bot: false,
							discoverable: true,
							group: false,
							created_at: '2022-11-13T00:00:00.000Z',
							note: '<p>open source web dev, working on felt.dev, fuz.dev, grogarden.org, and spiderspace.org, <a href="https://hci.social/tags/ActivityStreams" class="mention hashtag" rel="tag">#<span>ActivityStreams</span></a> <a href="https://hci.social/tags/ActivityPub" class="mention hashtag" rel="tag">#<span>ActivityPub</span></a> <a href="https://hci.social/tags/JS" class="mention hashtag" rel="tag">#<span>JS</span></a> <a href="https://hci.social/tags/CSS" class="mention hashtag" rel="tag">#<span>CSS</span></a> <a href="https://hci.social/tags/HTML" class="mention hashtag" rel="tag">#<span>HTML</span></a> <a href="https://hci.social/tags/svelte" class="mention hashtag" rel="tag">#<span>svelte</span></a> <a href="https://hci.social/tags/SvelteKit" class="mention hashtag" rel="tag">#<span>SvelteKit</span></a></p>',
							url: 'https://hci.social/@ryanatkn',
							uri: 'https://hci.social/users/ryanatkn',
							avatar:
								'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
							avatar_static:
								'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
							header:
								'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
							header_static:
								'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
							followers_count: 37,
							following_count: 96,
							statuses_count: 13,
							last_status_at: '2023-11-29',
							noindex: false,
							emojis: [],
							roles: [],
							fields: [
								{
									name: 'home',
									value:
										'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T18:48:11.596+00:00',
								},
								{
									name: 'code',
									value:
										'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T19:12:25.810+00:00',
								},
								{
									name: 'feltjs',
									value:
										'<a href="https://www.felt.dev" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">felt.dev</span><span class="invisible"></span></a>',
									verified_at: '2023-09-20T03:27:04.768+00:00',
								},
								{
									name: 'youtube',
									value:
										'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
									verified_at: null,
								},
							],
						},
						media_attachments: [],
						mentions: [],
						tags: [],
						emojis: [],
						card: null,
						poll: null,
					},
					{
						id: '111491828406951988',
						created_at: '2023-11-29T03:58:11.852Z',
						in_reply_to_id: '111491816409848117',
						in_reply_to_account_id: '109337961591161088',
						sensitive: false,
						spoiler_text: '',
						visibility: 'unlisted',
						language: 'en',
						uri: 'https://hci.social/users/ryanatkn/statuses/111491828406951988',
						url: 'https://hci.social/@ryanatkn/111491828406951988',
						replies_count: 0,
						reblogs_count: 0,
						favourites_count: 1,
						edited_at: null,
						content: '<p>(unlisted reply to a reply for demo purposes, please ignore)</p>',
						reblog: null,
						application: {name: 'Web', website: null},
						account: {
							id: '109337961591161088',
							username: 'ryanatkn',
							acct: 'ryanatkn',
							display_name: 'Ryan Atkinson',
							locked: false,
							bot: false,
							discoverable: true,
							group: false,
							created_at: '2022-11-13T00:00:00.000Z',
							note: '<p>open source web dev, working on felt.dev, fuz.dev, grogarden.org, and spiderspace.org, <a href="https://hci.social/tags/ActivityStreams" class="mention hashtag" rel="tag">#<span>ActivityStreams</span></a> <a href="https://hci.social/tags/ActivityPub" class="mention hashtag" rel="tag">#<span>ActivityPub</span></a> <a href="https://hci.social/tags/JS" class="mention hashtag" rel="tag">#<span>JS</span></a> <a href="https://hci.social/tags/CSS" class="mention hashtag" rel="tag">#<span>CSS</span></a> <a href="https://hci.social/tags/HTML" class="mention hashtag" rel="tag">#<span>HTML</span></a> <a href="https://hci.social/tags/svelte" class="mention hashtag" rel="tag">#<span>svelte</span></a> <a href="https://hci.social/tags/SvelteKit" class="mention hashtag" rel="tag">#<span>SvelteKit</span></a></p>',
							url: 'https://hci.social/@ryanatkn',
							uri: 'https://hci.social/users/ryanatkn',
							avatar:
								'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
							avatar_static:
								'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
							header:
								'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
							header_static:
								'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
							followers_count: 37,
							following_count: 96,
							statuses_count: 13,
							last_status_at: '2023-11-29',
							noindex: false,
							emojis: [],
							roles: [],
							fields: [
								{
									name: 'home',
									value:
										'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T18:48:11.596+00:00',
								},
								{
									name: 'code',
									value:
										'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T19:12:25.810+00:00',
								},
								{
									name: 'feltjs',
									value:
										'<a href="https://www.felt.dev" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">felt.dev</span><span class="invisible"></span></a>',
									verified_at: '2023-09-20T03:27:04.768+00:00',
								},
								{
									name: 'youtube',
									value:
										'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
									verified_at: null,
								},
							],
						},
						media_attachments: [],
						mentions: [],
						tags: [],
						emojis: [],
						card: null,
						poll: null,
					},
					{
						id: '111491829510427790',
						created_at: '2023-11-29T03:58:28.689Z',
						in_reply_to_id: '111491794208793604',
						in_reply_to_account_id: '109337961591161088',
						sensitive: false,
						spoiler_text: '',
						visibility: 'unlisted',
						language: 'en',
						uri: 'https://hci.social/users/ryanatkn/statuses/111491829510427790',
						url: 'https://hci.social/@ryanatkn/111491829510427790',
						replies_count: 0,
						reblogs_count: 0,
						favourites_count: 1,
						edited_at: null,
						content: '<p>(unlisted second reply for demo purposes, please ignore)</p>',
						reblog: null,
						application: {name: 'Web', website: null},
						account: {
							id: '109337961591161088',
							username: 'ryanatkn',
							acct: 'ryanatkn',
							display_name: 'Ryan Atkinson',
							locked: false,
							bot: false,
							discoverable: true,
							group: false,
							created_at: '2022-11-13T00:00:00.000Z',
							note: '<p>open source web dev, working on felt.dev, fuz.dev, grogarden.org, and spiderspace.org, <a href="https://hci.social/tags/ActivityStreams" class="mention hashtag" rel="tag">#<span>ActivityStreams</span></a> <a href="https://hci.social/tags/ActivityPub" class="mention hashtag" rel="tag">#<span>ActivityPub</span></a> <a href="https://hci.social/tags/JS" class="mention hashtag" rel="tag">#<span>JS</span></a> <a href="https://hci.social/tags/CSS" class="mention hashtag" rel="tag">#<span>CSS</span></a> <a href="https://hci.social/tags/HTML" class="mention hashtag" rel="tag">#<span>HTML</span></a> <a href="https://hci.social/tags/svelte" class="mention hashtag" rel="tag">#<span>svelte</span></a> <a href="https://hci.social/tags/SvelteKit" class="mention hashtag" rel="tag">#<span>SvelteKit</span></a></p>',
							url: 'https://hci.social/@ryanatkn',
							uri: 'https://hci.social/users/ryanatkn',
							avatar:
								'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
							avatar_static:
								'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
							header:
								'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
							header_static:
								'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
							followers_count: 37,
							following_count: 96,
							statuses_count: 13,
							last_status_at: '2023-11-29',
							noindex: false,
							emojis: [],
							roles: [],
							fields: [
								{
									name: 'home',
									value:
										'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T18:48:11.596+00:00',
								},
								{
									name: 'code',
									value:
										'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T19:12:25.810+00:00',
								},
								{
									name: 'feltjs',
									value:
										'<a href="https://www.felt.dev" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">felt.dev</span><span class="invisible"></span></a>',
									verified_at: '2023-09-20T03:27:04.768+00:00',
								},
								{
									name: 'youtube',
									value:
										'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
									verified_at: null,
								},
							],
						},
						media_attachments: [],
						mentions: [],
						tags: [],
						emojis: [],
						card: null,
						poll: null,
					},
				],
			},
			etag: null,
			last_modified: null,
		},
	],
	[
		'GET::https://hci.social/api/v1/statuses/111491816409848117/favourited_by',
		{
			key: 'GET::https://hci.social/api/v1/statuses/111491816409848117/favourited_by',
			url: 'https://hci.social/api/v1/statuses/111491816409848117/favourited_by',
			value: [
				{
					id: '109337961591161088',
					username: 'ryanatkn',
					acct: 'ryanatkn',
					display_name: 'Ryan Atkinson',
					locked: false,
					bot: false,
					discoverable: true,
					group: false,
					created_at: '2022-11-13T00:00:00.000Z',
					note: '<p>open source web dev, working on felt.dev, fuz.dev, grogarden.org, and spiderspace.org, <a href="https://hci.social/tags/ActivityStreams" class="mention hashtag" rel="tag">#<span>ActivityStreams</span></a> <a href="https://hci.social/tags/ActivityPub" class="mention hashtag" rel="tag">#<span>ActivityPub</span></a> <a href="https://hci.social/tags/JS" class="mention hashtag" rel="tag">#<span>JS</span></a> <a href="https://hci.social/tags/CSS" class="mention hashtag" rel="tag">#<span>CSS</span></a> <a href="https://hci.social/tags/HTML" class="mention hashtag" rel="tag">#<span>HTML</span></a> <a href="https://hci.social/tags/svelte" class="mention hashtag" rel="tag">#<span>svelte</span></a> <a href="https://hci.social/tags/SvelteKit" class="mention hashtag" rel="tag">#<span>SvelteKit</span></a></p>',
					url: 'https://hci.social/@ryanatkn',
					uri: 'https://hci.social/users/ryanatkn',
					avatar:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					avatar_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					header:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					header_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					followers_count: 37,
					following_count: 96,
					statuses_count: 13,
					last_status_at: '2023-11-29',
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'home',
							value:
								'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T18:48:11.596+00:00',
						},
						{
							name: 'code',
							value:
								'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T19:12:25.810+00:00',
						},
						{
							name: 'feltjs',
							value:
								'<a href="https://www.felt.dev" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">felt.dev</span><span class="invisible"></span></a>',
							verified_at: '2023-09-20T03:27:04.768+00:00',
						},
						{
							name: 'youtube',
							value:
								'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
							verified_at: null,
						},
					],
				},
			],
			etag: null,
			last_modified: null,
		},
	],
	[
		'GET::https://hci.social/api/v1/statuses/111491828406951988/favourited_by',
		{
			key: 'GET::https://hci.social/api/v1/statuses/111491828406951988/favourited_by',
			url: 'https://hci.social/api/v1/statuses/111491828406951988/favourited_by',
			value: [
				{
					id: '109337961591161088',
					username: 'ryanatkn',
					acct: 'ryanatkn',
					display_name: 'Ryan Atkinson',
					locked: false,
					bot: false,
					discoverable: true,
					group: false,
					created_at: '2022-11-13T00:00:00.000Z',
					note: '<p>open source web dev, working on felt.dev, fuz.dev, grogarden.org, and spiderspace.org, <a href="https://hci.social/tags/ActivityStreams" class="mention hashtag" rel="tag">#<span>ActivityStreams</span></a> <a href="https://hci.social/tags/ActivityPub" class="mention hashtag" rel="tag">#<span>ActivityPub</span></a> <a href="https://hci.social/tags/JS" class="mention hashtag" rel="tag">#<span>JS</span></a> <a href="https://hci.social/tags/CSS" class="mention hashtag" rel="tag">#<span>CSS</span></a> <a href="https://hci.social/tags/HTML" class="mention hashtag" rel="tag">#<span>HTML</span></a> <a href="https://hci.social/tags/svelte" class="mention hashtag" rel="tag">#<span>svelte</span></a> <a href="https://hci.social/tags/SvelteKit" class="mention hashtag" rel="tag">#<span>SvelteKit</span></a></p>',
					url: 'https://hci.social/@ryanatkn',
					uri: 'https://hci.social/users/ryanatkn',
					avatar:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					avatar_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					header:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					header_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					followers_count: 37,
					following_count: 96,
					statuses_count: 13,
					last_status_at: '2023-11-29',
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'home',
							value:
								'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T18:48:11.596+00:00',
						},
						{
							name: 'code',
							value:
								'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T19:12:25.810+00:00',
						},
						{
							name: 'feltjs',
							value:
								'<a href="https://www.felt.dev" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">felt.dev</span><span class="invisible"></span></a>',
							verified_at: '2023-09-20T03:27:04.768+00:00',
						},
						{
							name: 'youtube',
							value:
								'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
							verified_at: null,
						},
					],
				},
			],
			etag: null,
			last_modified: null,
		},
	],
	[
		'GET::https://hci.social/api/v1/statuses/111491829510427790/favourited_by',
		{
			key: 'GET::https://hci.social/api/v1/statuses/111491829510427790/favourited_by',
			url: 'https://hci.social/api/v1/statuses/111491829510427790/favourited_by',
			value: [
				{
					id: '109337961591161088',
					username: 'ryanatkn',
					acct: 'ryanatkn',
					display_name: 'Ryan Atkinson',
					locked: false,
					bot: false,
					discoverable: true,
					group: false,
					created_at: '2022-11-13T00:00:00.000Z',
					note: '<p>open source web dev, working on felt.dev, fuz.dev, grogarden.org, and spiderspace.org, <a href="https://hci.social/tags/ActivityStreams" class="mention hashtag" rel="tag">#<span>ActivityStreams</span></a> <a href="https://hci.social/tags/ActivityPub" class="mention hashtag" rel="tag">#<span>ActivityPub</span></a> <a href="https://hci.social/tags/JS" class="mention hashtag" rel="tag">#<span>JS</span></a> <a href="https://hci.social/tags/CSS" class="mention hashtag" rel="tag">#<span>CSS</span></a> <a href="https://hci.social/tags/HTML" class="mention hashtag" rel="tag">#<span>HTML</span></a> <a href="https://hci.social/tags/svelte" class="mention hashtag" rel="tag">#<span>svelte</span></a> <a href="https://hci.social/tags/SvelteKit" class="mention hashtag" rel="tag">#<span>SvelteKit</span></a></p>',
					url: 'https://hci.social/@ryanatkn',
					uri: 'https://hci.social/users/ryanatkn',
					avatar:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					avatar_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/avatars/109/337/961/591/161/088/original/c3fe65d180008d03.png',
					header:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					header_static:
						'https://storage.googleapis.com/hci-social-storage/accounts/headers/109/337/961/591/161/088/original/e002ff8d78a865ce.jpg',
					followers_count: 37,
					following_count: 96,
					statuses_count: 13,
					last_status_at: '2023-11-29',
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'home',
							value:
								'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T18:48:11.596+00:00',
						},
						{
							name: 'code',
							value:
								'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T19:12:25.810+00:00',
						},
						{
							name: 'feltjs',
							value:
								'<a href="https://www.felt.dev" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">felt.dev</span><span class="invisible"></span></a>',
							verified_at: '2023-09-20T03:27:04.768+00:00',
						},
						{
							name: 'youtube',
							value:
								'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
							verified_at: null,
						},
					],
				},
			],
			etag: null,
			last_modified: null,
		},
	],
];
