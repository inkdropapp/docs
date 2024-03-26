---
title: Tmux italics not working
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Tmux italics not working
---

{% callout title="This is an example note" %}
I took this note when I encountered an issue where italics were not working in tmux.
I pasted some screenshots to explain the issue and how I fixed it.
{% /callout %}

it works properly without tmux.

![Screenshot 2023-10-04 at 11.05.00](/images/example-note_troubleshooting-1_issue.png)
Both on tmux and without tmux:

```sh
❯ echo $TERM
xterm-256color
```

- [Tmux 2.6 italic not working... · Issue #1202 · tmux/tmux · GitHub](https://github.com/tmux/tmux/issues/1202#issuecomment-352800839)

Added:

```sh
set -as terminal-overrides ',xterm*:sitm=\E[3m'
```

Restarted tmux.

```sh
printf '\033[3mabcdef'
```

It solved!

![Screenshot 2023-10-04 at 11.10.44](/images/example-note_troubleshooting-1_fixed.png)

For some reason, undercurl starts working 🤯

![Screenshot 2023-10-04 at 11.11.03](/images/example-note_troubleshooting-1_undercurl.png)

