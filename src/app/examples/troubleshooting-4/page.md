---
title: Bump up Electron to 28
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Bump up Electron to 28
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I documented the process and issues I encountered while I try to bump up Electron to the latest version for Inkdrop.
{% /callout %}

## Mica/Acrylic support

- [fix: frameless mica/acrylic windows by clavin · Pull Request #39708 · electron/electron · GitHub](https://github.com/electron/electron/pull/39708)

Looks not stable still:

- [[Bug]: set "transparent" to true and "titleBarStyle” to "hidden", a title bar is shown when window loses focus, "backgroundMaterial" not work until resizing the window. · Issue #39959 · electron/electron · GitHub](https://github.com/electron/electron/issues/39959)

## Electron rebuild

```
❯ electron-rebuild
⠹ Building module: fsevents, Completed: 1  SOLINK_MODULE(target) Release/.node
  CXX(target) Release/obj.target/fse/fsevents.o
In file included from ../fsevents.cc:6:
../../../../nan/nan.h:686:39: warning: 'IdleNotificationDeadline' is deprecated: Use MemoryPressureNotification() to influence the GC schedule. [-Wdeprecated-declarations]
    return v8::Isolate::GetCurrent()->IdleNotificationDeadline(
                                      ^
/Users/nora/.electron-gyp/28.1.3/include/node/v8-isolate.h:1343:3: note: 'IdleNotificationDeadline' has been explicitly marked deprecated here
  V8_DEPRECATE_SOON(
  ^
/Users/nora/.electron-gyp/28.1.3/include/node/v8config.h:561:41: note: expanded from macro 'V8_DEPRECATE_SOON'
#   define V8_DEPRECATE_SOON(message) [[deprecated(message)]]
                                        ^
In file included from ../fsevents.cc:6:
In file included from ../../../../nan/nan.h:60:
In file included from /Users/nora/.electron-gyp/28.1.3/include/node/node.h:79:
In file included from /Users/nora/.electron-gyp/28.1.3/include/node/v8.h:24:
In file included from /Users/nora/.electron-gyp/28.1.3/include/node/v8-array-buffer.h:12:
/Users/nora/.electron-gyp/28.1.3/include/node/v8-local-handle.h:261:5: error: static assertion failed due to requirement 'std::is_base_of<v8::Value, v8::Data>::value': type check
    static_assert(std::is_base_of<T, S>::value, "type check");
    ^             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
../../../../nan/nan_callbacks_12_inl.h:175:20: note: in instantiation of function template specialization 'v8::Local<v8::Value>::Local<v8::Data>' requested here
      cbinfo(info, obj->GetInternalField(kDataIndex));
                   ^
1 warning and 1 error generated.
make: *** [Release/obj.target/fse/fsevents.o] Error 1
Error: `make` failed with exit code: 2
    at ChildProcess.onExit (/Users/nora/Developments/inkdrop/desktop/node_modules/node-gyp/lib/build.js:203:23)
    at ChildProcess.emit (node:events:519:28)
    at ChildProcess._handle.onexit (node:internal/child_process:294:12)

✖ Rebuild Failed
```

Upadting `nan` from `2.17.0` to `2.18.0` solved.

## Cannot start the app

```
❯ npm start
npm info using npm@10.2.4
npm info using node@v21.4.0

> inkdrop@5.6.2 start
> electron build

2024-01-15 09:55:10.269 Electron[79398:7414266] WARNING: Secure coding is automatically enabled for restorable state! However, not on all supported macOS versions of this application. Opt-in to secure coding explicitly by implementing NSApplicationDelegate.applicationSupportsSecureRestorableState:.
Failed to init app: TypeError: Cannot read properties of undefined (reading 'filename')
    at launchApp (/Users/nora/Developments/inkdrop/desktop/build/main.js:4044:98)
    at /Users/nora/Developments/inkdrop/desktop/build/main.js:9971:15
  app:debug Loaded! +0ms
```

Looks like `global.require.main!.filename` is no longer available?

```
global.require.main: undefined
```

ok... 🤔

- Found a related bug report: [[Bug]: Undefined process.mainModule / require.main after 28.0.0-nightly.20230831 · Issue #40501 · electron/electron · GitHub](https://github.com/electron/electron/issues/40501)

Any alternative?

![Screenshot 2024-01-15 at 10.02.24](/images/example-note_troubleshooting-4_apppath.png)

I guess `app.getAppPath()` is equivalent to it.

Got it to work!

## Renderer process errors

![Screenshot 2024-01-15 at 10.05.41](/images/example-note_troubleshooting-4_errors.png)

It fails to load:

```
Message REMOTE_RENDERER_CALLBACK sent by unexpected WebContents
```

- Found a related issue: [Remove of IpcRendererEvent.senderId breaks REMOTE_RENDERER_CALLBACK with Electron 28 · Issue #170 · electron/remote · GitHub](https://github.com/electron/remote/issues/170)

Updating `@electron/remote` solved!

## Test

- {% check v=true /%} macOS
- {% check v=true /%} Windows
- {% check v=true /%} Linux
