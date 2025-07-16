---
title: Basic writing and formatting syntax
nextjs:
  metadata:
    title: Basic writing and formatting syntax
    description: Create sophisticated formatting for your prose and code with simple syntax
---

Create sophisticated formatting for your tech notes on Inkdrop with simple syntax.{% .lead %}

This is intended as a quick reference and showcase.
For more complete info, see [John Gruber's original spec](https://daringfireball.net/projects/markdown/) and the [Github-flavored Markdown spec page](https://github.github.com/gfm/).

## Headings

To create a heading, add one to six `#` symbols before your heading text. The number of `#` you use will determine the hierarchy level and typeface size of the heading.

```markdown
# A first-level heading

## A second-level heading

### A third-level heading
```

![Screenshot of rendered GitHub Markdown showing sample h1, h2, and h3 headers, which descend in type size and visual weight to indicate descending hierarchy level.](/images/markdown-cheatsheet_headings.png)

## Styling text

You can indicate emphasis with bold, italic, strikethrough, subscript, or superscript text in comment fields and `.md` files.

| Style                  | Syntax              | Keyboard shortcut                                 | Example                                  | Output                                        |
| ---------------------- | ------------------- | ------------------------------------------------- | ---------------------------------------- | --------------------------------------------- |
| Bold                   | `** **` or `__ __`  | `Command`+`B` (Mac) or `Ctrl`+`B` (Windows/Linux) | `**This is bold text**`                  | **This is bold text**                         |
| Italic                 | `* *` or `_ _`      | `Command`+`I` (Mac) or `Ctrl`+`I` (Windows/Linux) | `_This text is italicized_`              | _This text is italicized_                     |
| Strikethrough          | `~~ ~~`             | None                                              | `~~This was mistaken text~~`             | ~~This was mistaken text~~                    |
| Bold and nested italic | `** **` and `_ _`   | None                                              | `**This text is _extremely_ important**` | **This text is *extremely* important**        |
| All bold and italic    | `*** ***`           | None                                              | `***All this text is important***`       | **_All this text is important_**              |
| Subscript              | `<sub> </sub>`      | None                                              | `This is a <sub>subscript</sub> text`    | This is a {% sub %}subscript{% /sub %} text   |
| Superscript            | `<sup> </sup>`      | None                                              | `This is a <sup>superscript</sup> text`  | This is a {% sup %}superscript{% /sup %} text |

## Quoting text

You can quote text with a `>`.
You can also press the {% kbd s="Command+'" /%} (Mac) or {% kbd s="Ctrl+'" /%} (Windows/Linux) keyboard shortcut to toggle the lines for a block quote.

```markdown
Text that is not a quote

> Text that is a quote
```

Quoted text is indented, with a different type color.

![Screenshot of rendered GitHub Markdown showing sample quoted text. The quote is indented with a vertical line on the left, and its text is dark gray rather than black.](/images/markdown-cheatsheet_quotes.png)

## Quoting code

You can call out code or a command within a sentence with single backticks. The text within the backticks will not be formatted.

```markdown
Use `git status` to list all new or modified files that haven't yet been committed.
```

![Screenshot of rendered GitHub Markdown showing the appearance of characters surrounded by backticks. The words "git status" appear in a fixed-width typeface, highlighted in light gray.](/images/markdown-cheatsheet_inline-code.png)

To format code or text into its own distinct block, use triple backticks.

````
Some basic Git commands are:
```
git status
git add
git commit
```
````

![Screenshot of rendered GitHub Markdown showing a code block. The words "git status," "git add," and "git commit" appear in a fixed-width typeface, highlighted in light gray.](/images/markdown-cheatsheet_codeblocks.png)

### Syntax highlighting

You can add an optional language identifier to enable syntax highlighting in your fenced code block.

Syntax highlighting changes the color and style of source code to make it easier to read.

For example, to syntax highlight Ruby code:

````
```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```
````

This will display the code block with syntax highlighting:

![Screenshot of three lines of Ruby code as displayed on GitHub. Elements of the code display in purple, blue, and red type, making the lines more visually scannable.](/images/markdown-cheatsheet_syntax-highlighting.png)

## Supported color models

You can call out colors within a sentence by using backticks. A supported color model within backticks will display a visualization of the color.

```markdown
The background color is `#ffffff` for light mode and `#000000` for dark mode.
```

![Screenshot of rendered GitHub Markdown showing how HEX values within backticks create small circles of color. #ffffff shows a white circle, and #000000 shows a black circle.](/images/markdown-cheatsheet_highlighting-colors.png)

Here are the currently supported color models.

| Color | Syntax             | Example                    | Output                                                                                                                                                             |
| ----- | ------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| HEX   | `` `#RRGGBB` ``    | `` `#0969DA` ``            | ![Screenshot of rendered GitHub Markdown showing how HEX value #0969DA appears with a blue circle.](/images/markdown-cheatsheet_highlighting-colors-hex.png)       |
| RGB   | `` `rgb(R,G,B)` `` | `` `rgb(9, 105, 218)` ``   | ![Screenshot of rendered GitHub Markdown showing how RGB value 9, 105, 218 appears with a blue circle.](/images/markdown-cheatsheet_highlighting-colors-rgb.png)   |
| HSL   | `` `hsl(H,S,L)` `` | `` `hsl(212, 92%, 45%)` `` | ![Screenshot of rendered GitHub Markdown showing how HSL value 212, 92%, 45% appears with a blue circle.](/images/markdown-cheatsheet_highlighting-colors-hsl.png) |

{% callout title="Note" type="warning" %}
A supported color model cannot have any leading or trailing spaces within the backticks.
{% /callout %}

## Links

You can create an inline link by wrapping link text in brackets `[ ]`, and then wrapping the URL in parentheses `( )`. You can also use the keyboard shortcut {% kbd s="Command+K" /%}(Mac) or {% kbd s="Ctrl+K" /%}(Windows/Linux) to create a link. When you have text selected, you can paste a URL from your clipboard to automatically create a link from the selection.

`This note was written using [Inkdrop](https://www.inkdrop.app/).`

![Screenshot of rendered GitHub Markdown showing how text within brackets, "Inkdrop," appears as a blue hyperlink.](/images/markdown-cheatsheet_link.png)

## Images

You can display an image by adding `!` and wrapping the alt text in `[ ]`. Alt text is a short text equivalent of the information in the image. Then, wrap the link for the image in parentheses `()`.

`![Inu-san is sleeping.](https://docs.inkdrop.app/images/inu-san_sleeping.png)`

![Inu-san is sleeping.](https://docs.inkdrop.app/images/inu-san_sleeping.png)

## Lists

You can make an unordered list by preceding one or more lines of text with `-`, `*`, or `+`.

```markdown
- George Washington

* John Adams

- Thomas Jefferson
```

![Screenshot of rendered GitHub Markdown showing a bulleted list of the names of the first three American presidents.](/images/markdown-cheatsheet_unordered-list.png)

To order your list, precede each line with a number.

```markdown
1. James Madison
1. James Monroe
1. John Quincy Adams
```

![Screenshot of rendered GitHub Markdown showing a numbered list of the names of the fourth, fifth, and sixth American presidents.](/images/markdown-cheatsheet_numbered-list.png)

### Nested Lists

You can create a nested list by indenting one or more list items below another item.

To create a nested list using the web editor on GitHub or a text editor that uses a monospaced font, you can align your list visually.
Type space characters in front of your nested list item until the list marker character (`-` or `*`) lies directly below the first character of the text in the item above it.

```markdown
1. First list item
   - First nested list item
     - Second nested list item
```

You can indent or dedent one or more lines of text by first highlighting the desired lines and then using `Tab` or `Shift`+`Tab` respectively.

![Screenshot of rendered GitHub Markdown showing a numbered item followed by a bulleted item nested one level to the right, and another bulleted item nested yet further to the right.](/images/markdown-cheatsheet_nested-list.png)

For more examples, see the [GitHub Flavored Markdown Spec](https://github.github.com/gfm/#example-265).

## Task lists

To create a task list, preface list items with a hyphen and space followed by `[ ]`. To mark a task as complete, use `[x]`.

```markdown
- [ ] inkdrop://note/31p7dWY2e
- [ ] [Support highlighting color codes](inkdrop://note/d4c01itk6)
- [ ] Add delight to the experience when all tasks are complete 🎉
```

![Screenshot showing the rendered version of the markdown. The references to issues are rendered as issue titles.](/images/markdown-cheatsheet_task-list.png)

## Using emoji

If you would prefer using GitHub-style emojis, then install [markdown-emoji](https://my.inkdrop.app/plugins/markdown-emoji) plugin.
It allows you to add emoji to your writing by typing `:EMOJICODE:`, a colon followed by the name of the emoji.

`:white_check_mark: I've finished working on this feature. It's ready to merge! :tada:`

![Screenshot of rendered GitHub Markdown showing how emoji codes for +1 and shipit render visually as emoji.](/images/markdown-cheatsheet_emoji.png)

For a full list of available emoji and codes, see [the Emoji-Cheat-Sheet](https://github.com/wooorm/gemoji/blob/main/support.md).

## Paragraphs

You can create a new paragraph by leaving a blank line between lines of text.

## Line Breaks

To create a line break or new line (`<br>`), end a line with two, more spaces or a backslash (`\`), and then type return.

```markdown
This is the first line.  
And this is the second line.\
```

## Footnotes

You can add footnotes to your content by using this bracket syntax:

```text
Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.
  This is a second line.
```

The footnote will render like this:

![Screenshot of rendered Markdown showing superscript numbers used to indicate footnotes, along with optional line breaks inside a note.](/images/markdown-cheatsheet_footnotes.png)

{% callout type="note" title="Note" %}
The position of a footnote in your Markdown does not influence where the footnote will be rendered. You can write a footnote right after your reference to the footnote, and the footnote will still render at the bottom of the Markdown.
{% /callout %}

Footnotes are not supported in wikis.

## Alerts

Alerts are a Markdown extension based on the blockquote syntax that you can use to emphasize critical information. On Inkdrop, they are displayed with distinctive colors and icons to indicate the significance of the content.

Use alerts only when they are crucial for user success and limit them to one or two per article to prevent overloading the reader. Additionally, you should avoid placing alerts consecutively. Alerts cannot be nested within other elements.

To add an alert, use a special blockquote line specifying the alert type, followed by the alert information in a standard blockquote. Five types of alerts are available:

```markdown
> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
```

Here are the rendered alerts:

![Screenshot of rendered GitHub Markdown showing how alerts are displayed with distinctive colors and icons to indicate the significance of the content](/images/markdown-cheatsheet_alerts.png)

## Hiding content with comments

You can tell Inkdrop to hide content from the rendered Markdown by placing the content in an HTML comment.

```
<!-- This content will not appear in the rendered Markdown -->
```

## Ignoring Markdown formatting

You can tell Inkdrop to ignore (or escape) Markdown formatting by using `\` before the Markdown character.

`Let's rename \*our-new-project\* to \*our-old-project\*.`

![Screenshot of rendered GitHub Markdown showing how backslashes prevent the conversion of asterisks to italics. The text reads, "Let's rename our-new-project to our-old-project."](/images/markdown-cheatsheet_ignore-markdown.png)

## Tables

GFM enables the `table` extension, where an additional leaf block type is available.

```
Colons can be used to align columns.

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

| Markdown | Less      | Pretty     |
| -------- | --------- | ---------- |
| _Still_  | `renders` | **nicely** |
| 1        | 2         | 3          |
```

Here are the rendered tables:

![Markdown Cheatsheet Tables](/images/markdown-cheatsheet_tables.png)

---

This cheatsheet is written based on [GitHub's documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax).
