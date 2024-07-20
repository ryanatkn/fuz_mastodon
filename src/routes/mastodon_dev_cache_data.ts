import type {Url} from '@ryanatkn/gro/package_json.js';
import type {Fetch_Value_Cache_Item} from '@ryanatkn/belt/fetch.js';

export const mastodon_dev_cache_data: Array<[Url, Fetch_Value_Cache_Item]> = [
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
				replies_count: 3,
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
					note: '<p>FOSS web dev</p>',
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
					following_count: 71,
					statuses_count: 17,
					last_status_at: '2024-07-09',
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'homepage',
							value:
								'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T18:48:11.596+00:00',
						},
						{
							name: 'GitHub',
							value:
								'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T19:12:25.810+00:00',
						},
						{
							name: 'YouTube',
							value:
								'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
							verified_at: null,
						},
						{
							name: 'webdevladder',
							value:
								'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
							verified_at: '2024-07-09T05:35:14.774+00:00',
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
							note: '<p>FOSS web dev</p>',
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
							following_count: 71,
							statuses_count: 17,
							last_status_at: '2024-07-09',
							noindex: false,
							emojis: [],
							roles: [],
							fields: [
								{
									name: 'homepage',
									value:
										'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T18:48:11.596+00:00',
								},
								{
									name: 'GitHub',
									value:
										'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T19:12:25.810+00:00',
								},
								{
									name: 'YouTube',
									value:
										'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
									verified_at: null,
								},
								{
									name: 'webdevladder',
									value:
										'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
									verified_at: '2024-07-09T05:35:14.774+00:00',
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
							note: '<p>FOSS web dev</p>',
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
							following_count: 71,
							statuses_count: 17,
							last_status_at: '2024-07-09',
							noindex: false,
							emojis: [],
							roles: [],
							fields: [
								{
									name: 'homepage',
									value:
										'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T18:48:11.596+00:00',
								},
								{
									name: 'GitHub',
									value:
										'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T19:12:25.810+00:00',
								},
								{
									name: 'YouTube',
									value:
										'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
									verified_at: null,
								},
								{
									name: 'webdevladder',
									value:
										'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
									verified_at: '2024-07-09T05:35:14.774+00:00',
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
						sensitive: true,
						spoiler_text:
							'(unlisted second reply with a content warning for demo purposes, please ignore)',
						visibility: 'unlisted',
						language: 'en',
						uri: 'https://hci.social/users/ryanatkn/statuses/111491829510427790',
						url: 'https://hci.social/@ryanatkn/111491829510427790',
						replies_count: 0,
						reblogs_count: 0,
						favourites_count: 1,
						edited_at: '2023-12-18T01:27:14.677Z',
						content: '<p>(sensitive content)</p>',
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
							note: '<p>FOSS web dev</p>',
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
							following_count: 71,
							statuses_count: 17,
							last_status_at: '2024-07-09',
							noindex: false,
							emojis: [],
							roles: [],
							fields: [
								{
									name: 'homepage',
									value:
										'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T18:48:11.596+00:00',
								},
								{
									name: 'GitHub',
									value:
										'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T19:12:25.810+00:00',
								},
								{
									name: 'YouTube',
									value:
										'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
									verified_at: null,
								},
								{
									name: 'webdevladder',
									value:
										'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
									verified_at: '2024-07-09T05:35:14.774+00:00',
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
						id: '112757807628264821',
						created_at: '2024-07-09T17:53:21.746Z',
						in_reply_to_id: '111491794208793604',
						in_reply_to_account_id: '109337961591161088',
						sensitive: false,
						spoiler_text: '',
						visibility: 'unlisted',
						language: 'en',
						uri: 'https://hci.social/users/ryanatkn/statuses/112757807628264821',
						url: 'https://hci.social/@ryanatkn/112757807628264821',
						replies_count: 0,
						reblogs_count: 0,
						favourites_count: 0,
						edited_at: '2024-07-09T19:35:54.230Z',
						content: '<p>(unlisted unfavourited reply for demo purposes, please ignore)</p>',
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
							note: '<p>FOSS web dev</p>',
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
							following_count: 71,
							statuses_count: 17,
							last_status_at: '2024-07-09',
							noindex: false,
							emojis: [],
							roles: [],
							fields: [
								{
									name: 'homepage',
									value:
										'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T18:48:11.596+00:00',
								},
								{
									name: 'GitHub',
									value:
										'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
									verified_at: '2022-11-13T19:12:25.810+00:00',
								},
								{
									name: 'YouTube',
									value:
										'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
									verified_at: null,
								},
								{
									name: 'webdevladder',
									value:
										'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
									verified_at: '2024-07-09T05:35:14.774+00:00',
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
					note: '<p>FOSS web dev</p>',
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
					following_count: 71,
					statuses_count: 17,
					last_status_at: '2024-07-09',
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'homepage',
							value:
								'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T18:48:11.596+00:00',
						},
						{
							name: 'GitHub',
							value:
								'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T19:12:25.810+00:00',
						},
						{
							name: 'YouTube',
							value:
								'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
							verified_at: null,
						},
						{
							name: 'webdevladder',
							value:
								'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
							verified_at: '2024-07-09T05:35:14.774+00:00',
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
					note: '<p>FOSS web dev</p>',
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
					following_count: 71,
					statuses_count: 17,
					last_status_at: '2024-07-09',
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'homepage',
							value:
								'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T18:48:11.596+00:00',
						},
						{
							name: 'GitHub',
							value:
								'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T19:12:25.810+00:00',
						},
						{
							name: 'YouTube',
							value:
								'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
							verified_at: null,
						},
						{
							name: 'webdevladder',
							value:
								'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
							verified_at: '2024-07-09T05:35:14.774+00:00',
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
					note: '<p>FOSS web dev</p>',
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
					following_count: 71,
					statuses_count: 17,
					last_status_at: '2024-07-09',
					noindex: false,
					emojis: [],
					roles: [],
					fields: [
						{
							name: 'homepage',
							value:
								'<a href="https://www.ryanatkn.com" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">ryanatkn.com</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T18:48:11.596+00:00',
						},
						{
							name: 'GitHub',
							value:
								'<a href="https://github.com/ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">github.com/ryanatkn</span><span class="invisible"></span></a>',
							verified_at: '2022-11-13T19:12:25.810+00:00',
						},
						{
							name: 'YouTube',
							value:
								'<a href="https://youtube.com/@ryanatkn" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://</span><span class="">youtube.com/@ryanatkn</span><span class="invisible"></span></a>',
							verified_at: null,
						},
						{
							name: 'webdevladder',
							value:
								'<a href="https://www.webdevladder.net/" target="_blank" rel="nofollow noopener noreferrer me" translate="no"><span class="invisible">https://www.</span><span class="">webdevladder.net/</span><span class="invisible"></span></a>',
							verified_at: '2024-07-09T05:35:14.774+00:00',
						},
					],
				},
			],
			etag: null,
			last_modified: null,
		},
	],
	[
		'GET::https://hci.social/api/v1/statuses/112757807628264821/favourited_by',
		{
			key: 'GET::https://hci.social/api/v1/statuses/112757807628264821/favourited_by',
			url: 'https://hci.social/api/v1/statuses/112757807628264821/favourited_by',
			value: [],
			etag: null,
			last_modified: null,
		},
	],
];
