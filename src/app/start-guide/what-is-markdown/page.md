---
title: What is Markdown and  why you should try it
coverImage: '/images/what-is-markdown_cover.png'
nextjs:
  metadata:
    title: What is Markdown and  why you should try it
    description: What is Markdown and  why you should try it
    openGraph:
      images:
        [
          'https://inkdrop-user-guide.vercel.app/images/what-is-markdown_cover.png',
        ]
---

After installing Inkdrop, you may notice that the examples in the app contain symbols like `#` or `**`. These are Markdown syntax — a simple yet powerful way to format text. If you're new to this, no worries. This page introduces you to the world of Markdown and explains why it's such a favorite among developers and tech enthusiasts .{% .lead %}

## What is Markdown? 🤔

Markdown is a lightweight markup language that uses special syntax to format text. It's easy to learn and use. You don't need HTML or other cumbersome markup to make **bolds**, *italics*, [links](https://www.craftz.dog/), and other formatting must-haves. It's also a great way to take notes, write documentation, and create content for the web.

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

* `# Headings`. The more `#` you use, the smaller the heading. `## Heading` gives you a second-level heading.
* \**Italicized*\* and \*\*bold\*\* text-> *Italicized* and **bold** text.
* \[Link](https://www.craftz.dog/) -> [Link](https://www.craftz.dog/).
* \~~Line-through~\~ -> ~~Line-hrough~~.
* \`Inline code\` -> `Inline code`.

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
````
- [ ] Task item 1
- [x] Completed task item 2
````
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

## Markdown role in Inkdrop 📚

The essence of Inkdrop is to provide a seamless note-taking experience, and Markdown plays a crucial role in it. As you get comfortable with Inkdrop and Markdown, you'll realize the power of the duo. It lets you jot down thoughts, code snippets, to-do lists, and more in no time and with minimal effort.

Moreover, as you progress in your software development journey (if that's a path you're on or considering), mastering Markdown becomes an invaluable skill. But even if you're not venturing into software, the sheer convenience of Markdown will enhance your digital note-taking endeavors.

## What's next? 🚀

You're familiar with Markdown now. It's time to learn it by actually crafting notes. Happy writing!

{% calloutToForum /%}
