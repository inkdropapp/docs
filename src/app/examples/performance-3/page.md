---
title: Changing orientation is so slow on tablets
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Changing orientation is so slow on tablets
---

{% callout title="This is an example note" %}
I took this note when encountered a bottleneck in changing orientation on tablets.
{% /callout %}

## Restyle causes the problem

Found this code in `useRestyle.ts`:

```js
57   // Theme should not change between renders, so we can disable rules-of-hooks
58   // We want to avoid calling useWindowDimensions if breakpoints are not defined
59   // as this hook is called extremely often and incurs some performance hit.
60   const dimensions = theme.breakpoints
61     ? // eslint-disable-next-line react-hooks/rules-of-hooks
62       useWindowDimensions()
63     : null;
```

It comes from this PR: [Performance improvements by fortmarek · Pull Request #220 · Shopify/restyle · GitHub](https://github.com/Shopify/restyle/pull/220/files)

So, I tried disabling breakpoints in my themes:

```js
// breakpoints: {
//   phone: 0,
//   tablet: 768
// },
```

Then, the performance has been drastically improved.

But some themes like nord needs breakpoints..

```js
noteList: {
  borderLeftWidth: {
    phone: 0,
    tablet: 1
  },
  borderLeftColor: '$mainLayoutColumnSeparatorBorderColor',
  borderRightWidth: {
    phone: 0,
    tablet: 1
  },
  borderRightColor: '$mainLayoutColumnSeparatorBorderColor'
}
```

## `useResponsiveProp` is slow

- useThemeColor
  - Because of `useResponsiveProp`
  - It uses `useWindowDimensions`...

It was possible to be fixed by simply avoiding using it:

```diff
diff --git a/src/hooks/use-theme-color.ts b/src/hooks/use-theme-color.ts
index 0dacfbf..fe3208a 100644
--- a/src/hooks/use-theme-color.ts
+++ b/src/hooks/use-theme-color.ts
@@ -5,13 +5,7 @@ type ColorProp = ColorProps<Theme>['color']

 const useThemeColor = (color: ColorProp = '$foreground') => {
   const theme = useTheme<Theme>()
-  const colorProp = useResponsiveProp(color)
-  if (colorProp) {
-    const vColor = theme.colors[colorProp]
-    return vColor
-  } else {
-    return undefined
-  }
+  return theme.colors[color]
 }

 export default useThemeColor
```

## breakpoints are unnecessary?

Decided to stop using breakpoints.

```diff
---
 src/themes/dark.ts           | 10 ++--------
 src/themes/light.ts          | 14 ++------------
 src/themes/nord.ts           | 10 ++--------
 src/themes/solarized-dark.ts | 10 ++--------
 4 files changed, 8 insertions(+), 36 deletions(-)

diff --git a/src/themes/dark.ts b/src/themes/dark.ts
index a44e7e8..6ea9d56 100644
--- a/src/themes/dark.ts
+++ b/src/themes/dark.ts
@@ -115,15 +115,9 @@ export const theme: Theme = createTheme({
       shadowRadius: 8
     },
     noteList: {
-      borderLeftWidth: {
-        phone: 0,
-        tablet: 0
-      },
+      borderLeftWidth: 0,
       borderLeftColor: '$mainLayoutColumnSeparatorBorderColor',
-      borderRightWidth: {
-        phone: 0,
-        tablet: 0
-      },
+      borderRightWidth: 0,
       borderRightColor: '$mainLayoutColumnSeparatorBorderColor'
     }
   }
```

- Commit: https://github.com/inkdropapp/mobile/commit/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
