---
title: Resize images
nextjs:
  metadata:
    title: Resize images
    description: Inkdrop allows resizing images in Markdown notes by defining custom styles in the styles.css file for different size specifications
---

Inkdrop basically follows GitHub-flavored Markdown which does not support specifying image size.
To change image sizes in your notes, you have to define [custom stylesheet](https://developers.inkdrop.app/guides/style-tweaks).
Add the following rules to your `styles.css`.
These target both the inline image widgets in the editor (`.cm-image-widget-img`) and the rendered Markdown preview (`.mde-preview img`):

```css
.cm-editor .cm-image-widget-img[alt$='#small'],
.mde-preview img[alt$='#small'] {
  max-width: 75% !important;
  min-width: 200pt !important;
}

.cm-editor .cm-image-widget-img[alt$='#x-small'],
.mde-preview img[alt$='#x-small'] {
  max-width: 50% !important;
  min-width: 100pt !important;
}

.cm-editor .cm-image-widget-img[alt$='#xx-small'],
.mde-preview img[alt$='#xx-small'] {
  max-width: 25% !important;
  min-width: 50pt !important;
}
```

With these rules defined, your images with `alt` attribute ending with `#small` will be rendered in small size.
You can insert images in Markdown as following:

```markdown
![image.jpg](inkdrop://file:srPsQH8nx)
![image.jpg #small](inkdrop://file:srPsQH8nx)
![image.jpg #x-small](inkdrop://file:srPsQH8nx)
![image.jpg #xx-small](inkdrop://file:srPsQH8nx)
```

The app will render like so:

![example](/images/resizing-images-example.png)
