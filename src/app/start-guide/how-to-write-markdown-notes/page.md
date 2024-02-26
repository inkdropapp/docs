---
title: How to write Markdown notes
coverImage: '/images/how-to-write-markdown-notes_cover.jpg'
youtubeVideoId: 'k0NbSPIOX54?list=PLFzcienOaLeP-tVCPYCThLfqG6NNg0HBF'
nextjs:
  metadata:
    title: What is Markdown and how to write it
    description: What is Markdown and how to write it on Inkdrop
    openGraph:
      images:
        [
          'https://inkdrop-user-guide.vercel.app/images/what-is-markdown_cover.png',
        ]
---

After installing Inkdrop, you may notice that the examples in the app contain symbols like `#` or `**`. These are Markdown syntax — a simple yet powerful way to format text. If you're new to this, no worries. This page introduces you to the world of Markdown and explains why it's such a favorite among developers and tech enthusiasts .{% .lead %}

## What is Markdown? 🤔

Markdown is a lightweight markup language that uses special syntax to format text. It's easy to learn and use. You don't need HTML or other cumbersome markup to make **bolds**, _italics_, [links](https://www.craftz.dog/), and other formatting must-haves. It's also a great way to take notes, write documentation, and create content for the web.

## Where Markdown is used? 🌏

Well, basically everywhere. Markdown is used in many places, including the following:

- **GitHub**: GitHub uses Markdown for README files, comments, and documentation.
- **Slack and Discord**: Slack and Discord allow you to format messages with Markdown.
- **Discourse**: Discourse, a popular forum software, adopts Markdown for its posts.
- **Websites and Blogs**: Many static site generators like Docusaurus, Jekyll, and Gatsby use Markdown as their primary content format.
- **Inkdrop**: Supports vanilla Markdown as well as its modifications.

## Why should I try it? 🔮

Imagine you're an architect. You have ideas brimming in your mind, designs waiting to take shape.
Now, you could sketch these on any piece of paper, but you choose a drafting table.
Why? Because it's tailored for your work.
It has the right tools and features for productive work.
With Markdown, you don't write notes, you craft them. And, Inkdrop is the best tool for crafting.

## What can I do with Markdown? 📝

Inkdrop lets you format text in many ways. Here are some basic examples:

- `# Headings`. The more `#` you use, the smaller the heading. `## Heading` gives you a second-level heading.
- \*_Italicized_\* and \*\*bold\*\* text-> _Italicized_ and **bold** text.
- \[Link](https://www.craftz.dog/) -> [Link](https://www.craftz.dog/).
- \~~Line-through~\~ -> ~~Line-hrough~~.
- \`Inline code\` -> `Inline code`.

That's not all, though.

### Advanced formatting with GitHub-flavored Markdown 🤓

If you're a programmer or diving into the tech world, you might have heard about [GitHub-flavored Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) (GFM for short). This is a superset of Markdown. It includes all the features of Markdown and adds a few more to meet day-to-day needs of developers:

- **Fenced code Blocks**: With GFM, you can easily insert code blocks by wrapping them with three backticks (\```). You can also specify a specific programming language for correct syntax highlighting.

{% snippet lang="md" filename="Code blocks" %}

````
\```js
function helloWorld() {
  console.log("Hello, world!");
}
\```

\```python
def hello_world():
    print("Hello, world!")

hello_world()
\```
````

{% /snippet %}

- **Task Lists**: Easily track to-dos using checkboxes.

{% snippet lang="md" filename="To-dos" %}

```
- [ ] Task item 1
- [x] Completed task item 2
```

{% /snippet %}

- **Mermaid**: An amazing feature that lets you generate diagrams and flowcharts from text-based descriptions. This is particularly useful for jotting down complex ideas visually. (Requires [Mermaid plugin](https://my.inkdrop.app/plugins/mermaid))

{% snippet lang="md" filename="Diagrams" %}

````
\```mermaid
graph TD;
    A-->B;
    A-->C;
\```
````

{% /snippet %}

- **Math Expressions**: For those in more technical or scientific fields, GFM's support for math notation can be a lifesaver, allowing for LaTeX-style mathematical expressions. (Requires [Math plugin](https://my.inkdrop.app/plugins/math))

{% snippet lang="md" filename="Math expressions" %}

````
\```math
E = mc^2
\```
````

{% /snippet %}

In Inkdrop, these examples are rendered like the following:

![GFM example](/images/what-is-markdown_gfm-example.png)

It looks powerful yet simple, right? Inkdrop supports GFM, ensuring that your notes can be as technical, detailed, and intricate as needed. This makes it perfect for jotting down everything from code snippets and algorithms to complex mathematical theories and flowcharts.

## Create your first note

You're familiar with Markdown now. It's time to learn it by actually crafting notes.

To create a new note, you can either click the {% icon name="pencil-write" /%} icon on the right top of the note list or use the {% kbd %}Command+N{% /kbd %} / {% kbd %}Ctrl+N{% /kbd %} shortcut.

![AddNote](/images/basic-usage_addnote.png)

A brand new note will appear in the rightmost **Editor** section.
After editing, the newly created note will appear in the **Note list** section.

![New note](/images/create-your-first-note_new-note.png)

## Start writing Markdown

Begin typing whatever you want. If you are new to Markdown, you can press the buttons of the editor toolbar to make text bold, italic, or add a link.

![Use Toolbar](/images/create-your-first-note_toolbar.png)

### Distraction Free Mode

You may notice that the sidebar and note list bar are hidden in the above screenshot.
That is 'Distraction Free Mode' — It lets you focus on the writing process by hiding the sidebar and note list.

To toggle the 'Distraction Free Mode':

- Use {% kbd s="Command+Shift+D" /%} / {% kbd s="Ctrl+Shift+D" /%}.

You can even hide the toolbar with controls for quick formatting. For this, take the following steps:

1. Open **Preferences** by clicking the {% icon name="cog" /%} icon in the upper right corner of the sidebar.  
   You can also use {% kbd s="Command+," /%} / {% kbd s="Ctrl+," /%}.
2. Go to **Editing** and clear the **Toolbar** checkbox.  
   The toolbar is hidden.

### Live preview

Inkdrop lets you preview notes to see what they eventually look like.

To preview a note:

- Open a note and use {% kbd s="Command+P" /%} / {% kbd s="Ctrl+P" /%}.  
   The note and its preview are displayed side-by-side.  
  ![SideBySide](/images/writing-note_sidebyside.png)

There're 2 more ways to toggle preview. In the lower right corner of the editor:

- Click {% icon name="view-1" /%} to switch between the note and its preview.
- Click {% icon name="layout-two-columns" /%} to toggle note and its preview side-by-side.

![Toggle buttons](/images/writing-note_toggle_buttons.png)

{% callout %}
Note that the icons are hidden by default. Hover the mouse cursor over the editor and icons will appear in the lower right corner of the editor.
{% /callout %}

## Markdown role in Inkdrop 📚

The essence of Inkdrop is to provide a seamless note-taking experience, and Markdown plays a crucial role in it. As you get comfortable with Inkdrop and Markdown, you'll realize the power of the duo. It lets you jot down thoughts, code snippets, to-do lists, and more in no time and with minimal effort.

Moreover, as you progress in your software development journey (if that's a path you're on or considering), mastering Markdown becomes an invaluable skill. But even if you're not venturing into software, the sheer convenience of Markdown will enhance your digital note-taking endeavors.
