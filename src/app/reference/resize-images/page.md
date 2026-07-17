---
title: Resize images
nextjs:
  metadata:
    title: Resize images
    description: Control how large images render in your notes with Marp-style size specifiers and the image resize toolbar
---

Inkdrop lets you control how large an image renders straight from Markdown, using **Marp-style image size specifiers**. Set a size with a quick toolbar or by typing the specifier yourself — no custom CSS or plugin required.{% .lead %}

## Use the image resize toolbar

![The image resize toolbar](/images/resize-images_toolbar.png)

The easiest way to resize an image is with the toolbar:

1. Place the cursor anywhere inside an image in the editor.  
   An **Image Size** toolbar appears above it.
2. Choose a preset:
   - **Auto** — the image's natural size (no specifier).
   - **Small** — 30% of the available width.
   - **Half** — 50% of the available width.
   - **Full** — 100% of the available width.

![The image resize example](/images/resize-images_example.png)

The toolbar highlights the preset matching the image's current size and writes the specifier into the image for you.

## Write size specifiers by hand

You can also type the specifier into the image's alt text. Inkdrop follows the [Marp image syntax](https://marpit.marp.app/image-syntax) — set the width, the height, or both:

```markdown
![width:200px](inkdrop://file:srPsQH8nx)
![height:120px](inkdrop://file:srPsQH8nx)
![width:200px height:120px](inkdrop://file:srPsQH8nx)
![width:50%](inkdrop://file:srPsQH8nx)
```

`width:` and `height:` have the shorthands `w:` and `h:`:

```markdown
![w:320 h:240](inkdrop://file:srPsQH8nx)
```

- A bare number is treated as pixels, so `w:320` is the same as `width:320px`.
- Any caption text in the alt is preserved — `![Diagram w:50%](…)` keeps the “Diagram” label.

### Supported units

A size can be a percentage (`50%`), a pixel value (`200px` or a bare `200`), or any of these CSS length units: `px`, `pt`, `pc`, `in`, `cm`, `mm`, `em`, `ex`, `ch`. To return an image to its natural size, use the **Auto** preset or remove the specifier.
