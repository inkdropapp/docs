---
title: ToDo App with React Native
parentPage: '/start-guide/key-note-categories-and-examples'
youtubeVideoId: 'k2h7usLLBhY'
nextjs:
  metadata:
    title: ToDo App with React Native
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note while building a ToDo app using React Native, which I shared in the above video on YouTube.
Here is what I took while working on this project:

- **Inspirations**: Lists sources of UI design and animation ideas, including custom SVG checkbox designs and references to Twitter and Dribbble for UI inspiration.
- **Data Structure**: Outlines the main components of the app, such as Projects and Tasks, and their attributes.
- **UI Design**: Discusses the approach to the app's user interface, including sidebar navigation and swipe-to-delete functionality.
- **Libraries**: Details specific React Native libraries used in the project for animations, SVG support, and more.
- **Theming**: Includes resources for creating color schemes and themes.
- **Illustrations**: Lists links to illustration packs used for the app's visuals.
- **Steps**: Describes the initial setup and development steps, including project initialization with Expo, setting up development tools, and installing various dependencies.

{% /callout %}

## Inspirations

### Check

![](https://pbs.twimg.com/media/Eia2Yy_WsAAkIL8?format=jpg&name=large)

- <https://twitter.com/joincheck>
  - <https://twitter.com/i/status/1338802962211155969>
  - <https://codepen.io/aaroniker/full/BaLpPep>
  - Check animations
    - [Check Task (check.so)](https://codepen.io/aaroniker/pen/BaLpPep)
  - ![#x-small](/images/example-note_small-project-2_unchecked.png)
  - ![#x-small](/images/example-note_small-project-2_checked.png)
- Framer motion based checkbox implementation
  - [Framer Motion Playground](https://framermotionplayground.com/tutorial/checkbox)
  - [Framer Motion: SVG checkbox - CodeSandbox](https://codesandbox.io/s/framer-motion-svg-checkbox-kqm7y?file=/src/Example.tsx)

Okay, I made my own checkbox SVG:

```html
<svg
  width="72"
  height="72"
  viewBox="0 0 72 72"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M0 29C0 8 7.5 0 29 0H43C63.5 0 72 7 72 29V43C72 64.5 64 72 43 72H29C6 72 0 63.5 0 43V29Z"
    fill="#C4C4C4"
  />
  <path
    d="M14.5 34.5C24 42 32.5 51.5 32.5 51.5C32.5 51.5 39.5 30 70 6"
    stroke="black"
  />
</svg>

<svg
  width="64"
  height="64"
  viewBox="0 0 64 64"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    d="M24 0.5H40C48.5809 0.5 54.4147 2.18067 58.117 5.88299C61.8193 9.58532 63.5 15.4191 63.5 24V40C63.5 48.5809 61.8193 54.4147 58.117 58.117C54.4147 61.8193 48.5809 63.5 40 63.5H24C15.4191 63.5 9.58532 61.8193 5.88299 58.117C2.18067 54.4147 0.5 48.5809 0.5 40V24C0.5 15.4191 2.18067 9.58532 5.88299 5.88299C9.58532 2.18067 15.4191 0.5 24 0.5Z"
    stroke="black"
  />
  <path d="M8 32.5C18 39 26 47 26 47C26 47 33 28 63.5 4" stroke="black" />
</svg>
```

### Dribbble

[![](https://cdn.dribbble.com/users/551602/screenshots/14153121/media/b88a82824f496847d76fc3f04b205b1f.png?compress=1&resize=1600x1200)](https://dribbble.com/shots/14153121-ToDo-App-Dark-Theme)

![](https://cdn.dribbble.com/users/345970/screenshots/14210741/media/e895a8753cbdbda05aaacaa93e42bbcc.png?compress=1&resize=1600x1200)

![](https://cdn.dribbble.com/users/204298/screenshots/13891655/media/c5273e8d3e7d4fc7af963793685ede6f.png?compress=1&resize=1600x1200)

- <https://github.com/Jamyth/react-native-neu-element>

## Data structure

- Projects -> Tasks

### Project

- Shows progress
- Description
- Color

### Task

- Checkbox
- Description
- Pin-to-top
- URL

## UI design

- Sidebar
- Swipe to delete

## Libraries

- react-native-reanimated
- react-native-svg
  - Shadow implementation: [react-native-neu-element/Shadow.js](https://github.com/Jamyth/react-native-neu-element/blob/master/lib/Shadow.js)
- [Kureev/react-native-blur: React Native Blur component](https://github.com/Kureev/react-native-blur)
- [GitHub - nandorojo/moti: 🐼 The React Native (+ Web) animation library, powered by Reanimated 2.](https://github.com/nandorojo/moti)
- [IjzerenHein/react-navigation-shared-element: React Navigation bindings for react-native-shared-element 💫](https://github.com/IjzerenHein/react-navigation-shared-element)

## Theming

- [Themera | Create Chakra UI Color Schemes in seconds](https://themera.vercel.app/)
- [Default Theme - Chakra UI](https://chakra-ui.com/docs/theming/theme)

## Illustrations

- [SALY - 3D Illustration Pack – Figma](https://www.figma.com/community/file/890095002328610853)
- [Nikuu 3d Illustration Pack by Paperpillar – Figma](https://www.figma.com/community/file/1000311109311441524)
- [BAM Free 3D Illustration Kit - uistore.design](https://www.uistore.design/items/bam-free-3d-illustration-kit/)

## Steps

### ~~Init project with NativeBase~~

```bash
expo init animated-todo --template expo-template-native-base-typescript
```

This template project has too many typescript errors. Stopped using.
This works fine:

```bash
npx create-react-native-app -t with-moti
```

Then, install typescript:

```bash
yarn add typescript @types/react @types/react-native prettier
```

### Init Expo blank project

```bash
expo init animated-todo -t expo-template-blank-typescript
```

### Set up dev tools

```bash
vim tsconfig.json
yarn add -D prettier
vim prettier.config.js
```

### Install ReactNavigation

```bash
yarn add @react-navigation/native @react-navigation/drawer react-native-screens
```

### Install NativeBase

```bash
yarn add native-base react-native-svg styled-components styled-system
```

### Install Moti

- [Installation | Moti](https://moti.fyi/installation)

```bash
yarn add moti react-native-reanimated
```

### Install other deps

```bash
yarn add react-native-safe-area-context shortid @types/shortid expo-linking
```
