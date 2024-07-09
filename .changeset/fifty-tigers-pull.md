---
'@ryanatkn/fuz_mastodon': patch
---

add rules to toot visibility

- replies are now always included by default when `include_replies` is `true`
- to get the old behavior, set `Toot` prop `get_reply_filter_rules`
  to `(status) => [{type: 'favourited_by', favourited_by: [status.account.acct]}]`
