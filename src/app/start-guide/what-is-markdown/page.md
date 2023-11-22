---
title: What and why is Markdown?
coverImage: '/images/what-is-markdown_cover.png'
nextjs:
  metadata:
    title: What and why is Markdown?
    description: What is Markdown and why it is used
    openGraph:
      images:
        [
          'https://inkdrop-user-guide.vercel.app/images/what-is-markdown_cover.png',
        ]
---

After installing Inkdrop, you may notice that the example notes in the app are written in a format called Markdown. If you're new to this, don't worry. We're here to introduce you to the world of Markdown and explain why it's such a favorite among developers and tech enthusiasts.{% .lead %}

## Inkdrop is like a drafting table for programmers

Imagine you're an architect. You have ideas brimming in your mind, designs waiting to take shape.
Now, you could sketch these on any piece of paper, but you choose a drafting table.
Why? Because it's tailored for your work.
It has the right tools and features that make designing more efficient, precise, and effective.
This is similar to why you should choose Markdown for writing your notes, instead of sticking to plain text.
And, Inkdrop is the best drafting table for taking tech notes in Markdown.

## Markdown is great for tech note-taking

At its core, Markdown is a lightweight markup language, designed to be easily readable and writeable by humans. Think of it as a simpler cousin to HTML. Instead of using intricate tags and attributes like HTML, Markdown uses plain text symbols. For instance, wrapping a word in `*` asterisks `*` will make it _italicized_, while using `**` double asterisks `**` will make it **bold**.

{% snippet lang="md" filename="example.md" %}

```
Hello, **World**!
This is *Italic*.
Please visit [my homepage](https://www.craftz.dog/)

- List item 1
- List item 2
```

{% /snippet %}

But if you're a programmer or diving into the tech world, you might often hear about "[GitHub-flavored Markdown](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax)" or GFM for short. This is a particular style of Markdown with some added features tailored specifically for the needs of developers:

- **Code Blocks**: With GFM, you can easily insert blocks of code by wrapping them with three backticks (\```). This not only differentiates the code from the rest of the text but also applies syntax highlighting based on the language of the code.
- **Task Lists**: Easily track to-dos using checkboxes.
- **Mermaid**: An amazing feature that lets you generate diagrams and flowcharts from text-based descriptions. This is particularly useful for jotting down complex ideas visually.
- **Math Expressions**: For those in more technical or scientific fields, GFM's support for math notation can be a lifesaver, allowing for LaTeX-style mathematical expressions.

For example:

{% snippet lang="md" filename="github-flavored.md" %}

````
\```js
function helloWorld() {
  console.log("Hello, world!");
}
\```

- [ ] Task item 1
- [x] Completed task item 2

\```mermaid
graph TD;
    A-->B;
    A-->C;
\```

\```math
E = mc^2
\```
````

{% /snippet %}

It yields:

![GFM example](/images/what-is-markdown_gfm-example.png)

It looks powerful yet simple, right? Inkdrop embraces these extended features of GitHub-flavored Markdown, ensuring that your notes can be as technical, detailed, and intricate as needed. This makes it perfect for jotting down everything from code snippets and algorithms to complex mathematical theories and flowcharts.

## Markdown lets you avoid vendor lock-in and have access to a vast toolset

Using Markdown is like unlocking the door to a universal language of digital note-taking.

1. **Simplicity**: You don't need to be a programmer to understand or use Markdown. Its syntax is straightforward, making it accessible to beginners.

2. **Portability**: Because Markdown is just plain text, you can open and edit it in any text editor. This means your notes, documents, and writings are not tied down to a specific software or platform.

3. **Versatility**: As you dive deeper into the tech world, you'll discover that Markdown is almost everywhere:

   - **Code Hosting Platforms**: GitHub and GitLab, where millions of developers host their projects, use Markdown for README files, comments, and documentation.
   - **Communication Tools**: Apps like Slack and Discord allow you to format messages with Markdown.
   - **Forums**: Discourse, a popular forum software, adopts Markdown for its posts.
   - **Websites and Blogs**: Many modern website generators like Ghost, Jekyll, and Gatsby use Markdown as their primary content format.

4. **Consistency**: Since Markdown renders uniformly across platforms, what you write is what you get. Whether you're viewing your note in Inkdrop, on GitHub, or any other Markdown-supporting platform, the presentation remains consistent.

5. **Open Standard**: Markdown is not owned by a corporation or tied to a specific software. It's an open standard, which means anyone can use or adapt it.

## Learning Markdown and its Role in Inkdrop

The essence of Inkdrop is to provide a seamless note-taking experience, and Markdown plays a pivotal role in that. As you get comfortable with Inkdrop and Markdown, you'll realize the power of being able to quickly jot down thoughts, code snippets, to-do lists, and more, all with the same simple syntax.

Moreover, as you progress in your software development journey (if that's a path you're on or considering), mastering Markdown becomes an invaluable skill. But even if you're not venturing into software, the sheer convenience of Markdown will enhance your digital note-taking endeavors.

## Conclusion

While Inkdrop offers a plethora of features to enhance your note-taking experience, the use of Markdown is at its heart. Embrace it, experiment with it, and soon, you'll wonder how you ever wrote without it. Whether or not Inkdrop becomes your go-to note-taking app, the world of Markdown is vast and worth exploring. Happy writing!
