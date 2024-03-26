---
title: Review a pull request locally
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Review a pull request locally
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I needed to review a pull request.
{% /callout %}

Use [GitHub CLI | Take GitHub to the command line](https://cli.github.com/manual/gh_pr)

## Check out

```sh
gh pr list
gh pr checkout <pr>
```

## Push changes

**DO NOT `g ps`!!!**

```sh
❯ g push origin pull/9/head
error: src refspec pull/9/head does not match any
error: failed to push some refs to 'github.com:inkdropapp/docs-next.git'
```

hmmmm

oh!!!!!! you can simple do to push changes back to the PR:

```sh
g push
```

- <https://stackoverflow.com/a/60496420>

But in some cases it makes an error like so:

```sh
❯ g push
fatal: The upstream branch of your current branch does not match
the name of your current branch.  To push to the upstream branch
on the remote, use

    git push git@github.com:dmitriyrotaenko/docs-new.git HEAD:main

To push to the branch of the same name on the remote, use

    git push git@github.com:dmitriyrotaenko/docs-new.git HEAD

To avoid automatically configuring an upstream branch when its name
won't match the local branch, see option 'simple' of branch.autoSetupMerge
in 'git help config'.
```
