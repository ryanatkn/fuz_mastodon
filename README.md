# @ryanatkn/fuz_mastodon

[<img src="/static/logo.svg" alt="a friendly purple spider facing you" align="right" width="192" height="192">](https://mastodon.fuz.dev/)

> [Mastodon](https://github.com/mastodon/mastodon) components and helpers for
> [Svelte](https://github.com/sveltejs/svelte), [SvelteKit](https://github.com/sveltejs/kit),
> and [Fuz](https://github.com/ryanatkn/fuz)
> 🦣 [mastodon.fuz.dev](https://mastodon.fuz.dev/)

> ⚠️ This project is still early, and its APIs will change.
> The code is fairly low quality, but the UX for embedding toots should work.

Features:

- embed toots without authentication
- nested replies
- spoiler warnings are behind `<details>`
- allowlisting via likes by the toot author
- customizable caching

Limitations:

- read-only (no authentication is supported)
- only one view/layout
- allowlisting is hardcoded to the original toot author's likes

Planned:

- multiple views and layouts
- a more complete and robust wrapper around the Mastodon API

Need help or want to help? Visit [the Discord community](https://discord.gg/YU5tyeK72X).

## License [🐦](https://wikipedia.org/wiki/Free_and_open-source_software)

[MIT](LICENSE)
