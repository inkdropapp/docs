---
title: Slow launch speed
parentPage: '/start-guide/key-note-categories-and-examples'
youtubeVideoId: '2eohPPTIw1I'
nextjs:
  metadata:
    title: Slow launch speed
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I needed to improve the launch speed of the desktop app for Inkdrop.
{% /callout %}

## Loading modules is still slow

Loading `browser-main.js` already takes 210ms..

![Browser Main](/images/example-note_performance-1_01_browser-main.png)

## ✅ Preload packages

`loadPackages()` requires main scripts, that causes slowing down.

- Commit: https://github.com/inkdropapp/desktop/commit/6fa202b56eef80507e1d6e4ec2d7da900d69f991

Pre-loading package can defer running the main script.

## 🤔 some modules are huge

- {% check v=false /%} `lodash/debounce`:  
   ![#x-small](/images/example-note_performance-1_02_debounce.png)
- {% check v=true /%} `lodash/isEqual`:  
   ![#x-small](/images/example-note_performance-1_03_lodash-isequal.png)
  - Sometimes it takes 19ms
- {% check v=true /%} `lodash/assignIn`
  - 4ms
- {% check v=true /%} `lodash/cloneDeep`  
   ![#x-small](/images/example-note_performance-1_04_lodash-clonedeep.png)

- {% check v=false /%} `lodash/throttle`
  - 1.3ms - 4ms
- {% check v=true /%} `lodash/pick`
  - 2.5ms - 5ms
- {% check v=true /%} `yaml`
  - `@inkdropapp/yeason`  
    ![#x-small](/images/example-note_performance-1_05_yaml.png)
  - Convert CSON to JSON. Do not use YAML by default.

If I could remove all the loading times, it would make the app **70ms faster** to launch.

Maybe Bugsnag can be removed:

- {% check v=true /%} Bugsnag (13ms)\
   ![#x-small](/images/example-note_performance-1_06_bugsnag.png)
- {% check v=true /%} Defer loading bugsnag
  - It is required in many files
- {% check v=false /%} rimraf takes 10ms (required by @craftzdog/fs-plus)

## ✅ note-list-item-summary-view requires remark!

![oh #x-small](/images/example-note_performance-1_07_note-list-item-summary-view.png)

- {% check v=true /%} `note-revision-view`

## ✅ Modules are not code-splitted

Changed `module` in `tsconfig.json` like so:

```js
{
  "compilerOptions": {
    "module": "esnext" /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', or 'ESNext'. */,
```

ok, it works

## Improve the main process loading speed

- [Debugging the Main Process | Electron](https://www.electronjs.org/docs/latest/tutorial/debugging-main-process)

```shell
electron --inspect-brk=5858 your/app
```

- Open <chrome://inspect>.
- Click the `Open dedicated DevTools for Node` button

### The migration util should defer loading remark until necessary

![Screenshot 2023-07-06 at 22.22.53](/images/example-note_performance-1_08_pouchdb.png)
