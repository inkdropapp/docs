---
title: Teach AI agents with Agent Skills
nextjs:
  metadata:
    title: Teach AI agents with Agent Skills
    description: Install the Inkdrop Agent Skills so your AI coding agent writes notes in Inkdrop's Markdown dialect and can run note-driven workflows.
---

Agent Skills teach your AI coding agent how to work with Inkdrop.{% .lead %}

The [MCP server](/reference/mcp-server) gives an agent the _hands_ to create, read, and update your notes.
Skills give it the _know-how_: Inkdrop's Markdown dialect and the note-driven workflows you'd otherwise have to spell out in every prompt.
With both in place, plans, research, and documentation land in your notebooks looking the way you'd write them by hand.

{% callout type="note" %}
Skills on their own can't touch your notes. Set up the [Inkdrop MCP server](/reference/mcp-server) first—that's what gives the agent the note tools these skills refer to.
{% /callout %}

## Install

The [skills.sh](https://skills.sh) CLI works with Claude Code, Codex, Cursor, and 70+ other agents:

```sh
npx skills@latest add inkdropapp/skills
```

Pick the skills and agents you want, and it copies them into place.
That's it—the agent picks up each skill on its own when a task matches its description.

### Installing manually

A skill is just a folder with a `SKILL.md` file, so you can copy or symlink one into your agent's skills directory yourself.
For Claude Code:

```sh
git clone https://github.com/inkdropapp/skills.git

# User-level — available across all your projects
cp -r skills/skills/note-taking ~/.claude/skills/

# Project-level — scoped to one repository
cp -r skills/skills/note-taking .claude/skills/
```

## Available skills

Skills split on one axis: who invokes them.
**Model-invoked** skills are reached for automatically when the work fits, and hold reusable know-how.
**User-invoked** skills run only when you type them, and orchestrate a task.

### note-taking (model-invoked)

The Markdown reference for Inkdrop note bodies: code-block attributes, [Mermaid diagrams and KaTeX math](/start-guide/how-to-write-markdown-notes), and note links.

The agent reaches for it whenever it writes a note, so you get code blocks that stay clickable:

````markdown
```tsx filename="src/index.ts" line=70 title="what this snippet shows"
const filteredTags = workspace.loading ? {} : stats?.tags || {}
```
````

—and real note links (`[Title](inkdrop://note/tFz4sfEw)`) instead of `[[wiki-links]]`, which Inkdrop doesn't support.

### fill-out-template (user-invoked)

Fills out a note created from a [template](/reference/note-templates) in place, following the template's own instructions.

Create a note from your planning template, describe the task in it, then point your agent at it:

```text
> Read [Support XXX](inkdrop://note/xxxxxx) and fill out the template
```

The agent reads the note together with its source template, applies the guidance the template carries in its `!Instructions` and `!Example` blocks, asks about any decision that would change what gets built, and saves the filled-out plan back.
It's a planning step, so it stops there and waits for your go-ahead before writing any code.

## Write your own skill

Add a `SKILL.md` with frontmatter and instructions to your agent's skills directory:

```markdown
---
name: my-skill
description: One line telling the agent when to reach for this skill.
argument-hint: [optional-arg]
---

# My skill

Instructions the agent should follow…
```

Keep the `description` specific—it's what the agent matches against to decide whether the skill is relevant.
Including `argument-hint` makes it a user-invoked slash command instead of a model-invoked one.

Contributions to the shared skills are welcome at [inkdropapp/skills](https://github.com/inkdropapp/skills).
