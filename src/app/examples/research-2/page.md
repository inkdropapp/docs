---
title: Rebuild mobile app
parentPage: '/start-guide/key-note-categories-and-examples'
youtubeVideoId: 'wg1frpp8Vvw'
nextjs:
  metadata:
    title: Rebuild mobile app
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I was planning to rebuild my React Native app for Inkdrop. I created a check list of promising libraries and resources. Some ideas are also included.
{% /callout %}

- {% check v=true /%} Read [Blog · React Native](https://reactnative.dev/blog)
- {% check v=true /%} [GitHub - Shopify/restyle: A type-enforced system for building UI components in React Native with TypeScript.](https://github.com/Shopify/restyle)
  - {% check v=true /%} [shoutem/theme: Style your React Native components on one place](https://github.com/shoutem/theme)
  - {% check v=true /%} ❌ [React Native Paper](https://reactnativepaper.com/)
- {% check v=true /%} [Native Base v3](https://docs.nativebase.io/theme)
  - It supports dynamically changing themes! Promising.
  - The project is intensively active now.
  - It is based on [Styled System](https://styled-system.com/). Cool!
    - https://github.com/GeekyAnts/NativeBase/blob/master/src/theme/styled-system.ts
- {% check v=true /%} [React Navigation 6](https://reactnavigation.org/blog/2021/08/14/react-navigation-6.0)
- {% check v=true /%} [react-native-image-picker/react-native-image-picker: A React Native module that allows you to use native UI to select media from the device library or directly from the camera.](https://github.com/react-native-image-picker/react-native-image-picker/)
- {% check v=true /%} Bigger toolbar icons
- {% check v=true /%} [codemirror/codemirror.next: The next generation of the CodeMirror in-browser editor](https://github.com/codemirror/codemirror.next)
  - [lezer](https://github.com/lezer-parser)
  - [lezer-parser/markdown: A lezer-integrated Markdown parser](https://github.com/lezer-parser/markdown)
    - Oh, it looks like it supports GFM!
    - But tables are not supported -> No, it now supports it!
- {% check v=true /%} ❌ Zoom image - [react-native-reanimated-zoom: Component for zooming react native views. 🔎](https://github.com/intergalacticspacehighway/react-native-reanimated-zoom)
  - [GitHub - andresribeiro/react-native-reanimated-image-viewer: A image viewer for React Native created with Reanimated](https://github.com/andresribeiro/react-native-reanimated-image-viewer)
    - It has `onRequestClose` event
- {% check v=true /%} Try Sentry - [React Native | Sentry Documentation](https://docs.sentry.io/platforms/react-native/)
- {% check v=false /%} Menu - [nandorojo/zeego: Menus for React (Native) done right.](https://github.com/nandorojo/zeego)
- {% check v=false /%} Add a paste button on the toolbar
- {% check v=false /%} Display OSS licenses
  - Use [license-report](https://github.com/ironSource/license-report) or [license-checker](https://github.com/davglass/license-checker)

## Bug fix

- {% check v=true /%} Crashes when deleting a notebook
- {% check v=true /%} [Fix URL scheme for note links](inkdrop://note/JMI4LaqB8)

## Rebuild UI

- [oblador/react-native-animatable: Standard set of easy to use animations and declarative transitions for React Native](https://github.com/oblador/react-native-animatable)
- [Create a UI mockup using Restyle](inkdrop://note/FmIrJlT-O)

## Bug tracking

- Upgrade lib: [Bugsnag docs › React Native › Navigation libraries](https://docs.bugsnag.com/platforms/react-native/react-native/navigation-libraries/)

## Hack Stack Navigation Controller

To prevent unmounting the editor screen.
Is that possible?

- https://reactnavigation.org/docs/custom-navigators/

Looks so hard to hack the Stack Navigator.
