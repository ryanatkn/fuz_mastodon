# @ryanatkn/fuz_mastodon

## 0.16.0

### Minor Changes

- rename `Toot` prop `url` from `initial_url` and `updated_url` from `url` ([#9](https://github.com/ryanatkn/fuz_mastodon/pull/9))
- rename `reply_filters` from `get_reply_filters` ([#9](https://github.com/ryanatkn/fuz_mastodon/pull/9))

## 0.15.0

### Minor Changes

- add rules to toot visibility ([#8](https://github.com/ryanatkn/fuz_mastodon/pull/8))

  - replies are now always included by default when `include_replies` is `true`
  - to get the old behavior, set `Toot` prop `get_reply_filters`
    to `(status) => [{type: 'favourited_by', favourited_by: [status.account.acct]}]`

## 0.14.2

### Patch Changes

- add tsconfig `sourceRoot` ([4477305](https://github.com/ryanatkn/fuz_mastodon/commit/4477305))
- enable tsconfig `declaration` and `declarationMap` ([161ad35](https://github.com/ryanatkn/fuz_mastodon/commit/161ad35))
- publish src files ([9c24f65](https://github.com/ryanatkn/fuz_mastodon/commit/9c24f65))

## 0.14.1

### Patch Changes

- add `sideEffects` to `package.json` ([b571ea1](https://github.com/ryanatkn/fuz_mastodon/commit/b571ea1))
- switch to `esm-env` from using `import.meta.env` ([#6](https://github.com/ryanatkn/fuz_mastodon/pull/6))

## 0.14.0

### Minor Changes

- add peer deps for Svelte and SvelteKit ([36738de](https://github.com/ryanatkn/fuz_mastodon/commit/36738de))

## 0.13.1

### Patch Changes

- upgrade gro with correctly formatted exports ([7006216](https://github.com/ryanatkn/fuz_mastodon/commit/7006216))

## 0.13.0

### Minor Changes

- support `node@20.12` and later ([ee77b51](https://github.com/ryanatkn/fuz_mastodon/commit/ee77b51))

## 0.12.0

### Minor Changes

- upgrade `node@22.3` ([#4](https://github.com/ryanatkn/fuz_mastodon/pull/4))

## 0.11.1

### Patch Changes

- work around Svelte 5 transition bug ([aa41d24](https://github.com/ryanatkn/fuz_mastodon/commit/aa41d24))

## 0.11.0

### Minor Changes

- upgrade to svelte 5 ([#3](https://github.com/ryanatkn/fuz_mastodon/pull/3))

## 0.10.0

### Minor Changes

- upgrade svelte-intersect@0.12.1 ([7a76383](https://github.com/ryanatkn/fuz_mastodon/commit/7a76383))

## 0.9.0

### Minor Changes

- upgrade @ryanatkn/fuz@0.91 ([36153b3](https://github.com/ryanatkn/fuz_mastodon/commit/36153b3))

## 0.8.0

### Minor Changes

- upgrade deps ([968210e](https://github.com/ryanatkn/fuz_mastodon/commit/968210e))

## 0.7.0

### Minor Changes

- republish ([1ee1ad2](https://github.com/ryanatkn/fuz_mastodon/commit/1ee1ad2))
- upgrade deps ([1ee1ad2](https://github.com/ryanatkn/fuz_mastodon/commit/1ee1ad2))

## 0.6.0

### Minor Changes

- upgrade deps ([bc34cb6](https://github.com/ryanatkn/fuz_mastodon/commit/bc34cb6))

## 0.5.0

### Minor Changes

- upgrade @grogarden/util to use `fetch_value` ([#2](https://github.com/ryanatkn/fuz_mastodon/pull/2))

## 0.4.1

### Patch Changes

- fix `Mastodon_Status_Tree` ([40bc404](https://github.com/ryanatkn/fuz_mastodon/commit/40bc404))

## 0.4.0

### Minor Changes

- cleanup `Mastodon_Status_Tree` API ([080d66e](https://github.com/ryanatkn/fuz_mastodon/commit/080d66e))

## 0.3.0

### Minor Changes

- unpublish package.ts ([e332cd8](https://github.com/ryanatkn/fuz_mastodon/commit/e332cd8))

## 0.2.4

### Patch Changes

- handle 429s ([7034797](https://github.com/ryanatkn/fuz_mastodon/commit/7034797))

## 0.2.3

### Patch Changes

- improve ratelimit handling ([e11b6fc](https://github.com/ryanatkn/fuz_mastodon/commit/e11b6fc))

## 0.2.2

### Patch Changes

- respect rate limits in `fetch_data` ([f8c1f65](https://github.com/ryanatkn/fuz_mastodon/commit/f8c1f65))

## 0.2.1

### Patch Changes

- fix a name ([b36c7c8](https://github.com/ryanatkn/fuz_mastodon/commit/b36c7c8))

## 0.2.0

### Minor Changes

- rename to `Proper_Snakes` ([73447c0](https://github.com/ryanatkn/fuz_mastodon/commit/73447c0))

## 0.1.3

### Patch Changes

- upgrade `@grogarden/gro` to fix `package.ts` ([e7f5d95](https://github.com/ryanatkn/fuz_mastodon/commit/e7f5d95))

## 0.1.2

### Patch Changes

- use `import.meta.env.SSR` instead of `browser` from `$app/environment` ([6cab5ac](https://github.com/ryanatkn/fuz_mastodon/commit/6cab5ac))

## 0.1.1

### Patch Changes

- add peer deps ([48c518c](https://github.com/ryanatkn/fuz_mastodon/commit/48c518c))

## 0.1.0

### Minor Changes

- init ([0aa8e9c](https://github.com/ryanatkn/fuz_mastodon/commit/0aa8e9c))
