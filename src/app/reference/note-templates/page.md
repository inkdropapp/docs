---
title: Note templates
nextjs:
  metadata:
    title: Note templates
    description: Start new notes from ready-made templates and create your own
---

Templates are ready-made notes for common tasks — a daily report, a bug-fix write-up, a feature plan, and more. Start a note from a template to skip the blank page and keep your notes consistent.{% .lead %}

Inkdrop ships with a set of built-in templates, and you can add your own.

## The Templates section on the sidebar

You'll find **Templates** in the sidebar, just below **All Notes**. Click it to browse every template available to you.

![The Templates section on the sidebar](/images/note-templates_sidebar.png)

The list shows your own templates first, under a **Custom** section (which appears once you have at least one), followed by the built-in templates grouped by category.

Selecting a template here opens it for viewing or editing — it does **not** create a note. To create a note from a template, use the **Create a new note** picker described below.

## Create a note from a template

When you create a note, Inkdrop opens the **Create a new note** picker, where you can start from a blank note or from a template.

![The Create a new note picker](/images/write-notes_template-picker.png)

1. Click {% icon name="pencil-write" /%} in the upper-right corner of the note list, or press {% kbd s="Command+N" /%} / {% kbd s="Ctrl+N" /%}.
2. Type in the search field to filter the list, or use the {% kbd s="Up" /%} / {% kbd s="Down" /%} arrow keys to browse. The pane on the right previews the selected template.
3. Press {% kbd s="Enter" /%}, or click a template, to create a note from it.

Your most recently used templates appear in a **Recently used** section at the top of the list, so the templates you rely on stay within easy reach.

{% callout title="Tip" %}
To start with a plain, empty note, select **Blank note** at the top of the list, or just press {% kbd s="Command+N" /%} / {% kbd s="Ctrl+N" /%} again.
{% /callout %}

## Built-in templates

Inkdrop comes with templates for a range of everyday tech tasks, grouped by category:

| Category          | Examples                                                                                     |
| ----------------- | -------------------------------------------------------------------------------------------- |
| **Brainstorming** | Feasibility spike, Options comparison                                                        |
| **Debugging**     | Bug fix, Crash bug, Race condition bug, Security bug, and more                               |
| **Learning**      | Codebase exploration, Concept deep dive, Reading summary, Tool hands-on                      |
| **Planning**      | Feature planning, Implementation plan, Refactoring plan, Release plan, Architectural changes |
| **Productivity**  | Daily Report                                                                                 |

You can't overwrite a built-in template, but you can build on one — edit it directly, and Inkdrop saves your changes as a new custom template (see below).

## Create a custom template

A custom template is simply a note that lives in the built-in **Templates** notebook. Any note you put there becomes available in the **Create a new note** picker and the **Templates** section on the sidebar.

To create one from scratch:

1. Click **Templates** in the sidebar.
2. Press {% kbd s="Command+N" /%} / {% kbd s="Ctrl+N" /%}, or click {% icon name="pencil-write" /%}.  
   Because you're in the Templates section, Inkdrop creates a new template note directly — the picker is skipped.
3. Give it a title and write the content you want to reuse. It's saved as a template automatically.

Your custom templates show up under the **Custom** section in both the sidebar's Templates list and the **Create a new note** picker.

### Customize a built-in template

To base your own template on one of the built-in ones, edit it directly — there's no need to copy it first:

1. Open the **Templates** section on the sidebar and select the built-in template you want to start from.
2. Edit its content.  
   When you save, Inkdrop keeps the original built-in template intact and saves your changes as a new template under **Custom**.

## Set tags and status

A template works like any other note: the tags and [status](/reference/note-statuses) you set on it in the editor — using the fields under the note's title — carry over to every note you create from it.

Alternatively, you can also declare them in the template's frontmatter (see below).

## Configure a template with frontmatter

The name shown for a template comes from the title of the template note itself. For everything else — a description, a custom or dynamic title for the notes it creates, or the notebook they're filed into — add a `_template` block to the note's YAML frontmatter, the section between the `---` lines at the top of the note. Every field is optional.

```markdown
---
_template:
  title: "{{ 'now' | date: '%Y-%m-%d' }} - Daily Report"
  description: What I did today, what I plan for tomorrow, and any blockers.
  tags:
    - report
  notebook: Journal
  status: active
---

## What I worked on

1.

## Blockers

1.
```

| Field         | What it does                                                                                                                                                                                  |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`       | The title given to notes created from the template. Supports dynamic values (see below).                                                                                                      |
| `description` | A short note about when to use the template.                                                                                                                                                  |
| `tags`        | Tags applied to the new note, as an alternative to setting them in the editor. Accepts tag names or tag IDs (such as `tag:wMfp1xah`); a name that doesn't exist yet is created automatically. |
| `notebook`    | The notebook new notes are filed into. Accepts a notebook name or a notebook ID (such as `book:SnbaRB4w`).                                                                                    |
| `status`      | The new note's initial [status](/reference/note-statuses) — `none`, `active`, `onHold`, `completed`, or `dropped` — as an alternative to setting it in the editor.                            |

### Insert the current date and other dynamic values

Both the `title` and the body of a template can include placeholders that are filled in the moment a note is created:

- **Current date** — `{{ 'now' | date: '%Y-%m-%d' }}` inserts today's date (for example, `2026-07-16`). Adjust the format string to change it — `%H:%M` for the time, `%A` for the weekday, and so on.
- **Random ID** — `{% uuid %}` inserts a random UUID.

{% callout title="Leaving instructions out of the generated note" %}
While authoring a template, you can add a blockquote whose heading starts with `!` — such as `> # !Instructions` or `> # !Example` — to leave guidance for yourself or an AI agent. It's especially useful for telling an [AI agent](/reference/mcp-server) how to fill the template out properly: the agent can read these instructions from the source template, while they're stripped out automatically so they never appear in the notes you create from it.
{% /callout %}

## See also

- [Write notes](/reference/write-notes)
- [Note statuses](/reference/note-statuses)
- [Organize notebooks](/reference/organize-notebooks)
