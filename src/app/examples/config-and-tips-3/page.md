---
title: Install rbenv
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Install rbenv
---

{% callout title="This is an example note" %}
I took this note when I needed to install rbenv for getting CocoaPods working during developing my React Native app.
{% /callout %}

## CocoaPods not working

```sh
❯ npx pod-install
npm info using npm@9.2.0
npm info using node@v19.4.0
npm http fetch GET 200 https://registry.npmjs.org/pod-install 680ms (cache revalidated)
Scanning for pods...
1.11.3
> pod install

[!] Invalid `Podfile` file:
[!] Invalid `RNGestureHandler.podspec` file: undefined method `exists?' for File:Class.

 #  from /Users/nora/Developments/inkdrop/inkdrop-mobile-next/node_modules/react-native-gesture-handler/RNGestureHandler.podspec:5
 #  -------------------------------------------
 #
 >  isUserApp = File.exists?(File.join(__dir__, "..", "..", "node_modules", "react-native", "package.json"))
 #  if isUserApp
 #  -------------------------------------------
.

 #  from /Users/nora/Developments/inkdrop/inkdrop-mobile-next/ios/Podfile:8
 #  -------------------------------------------
 #  target 'Inkdrop' do
 >    config = use_native_modules!
 #
 #  -------------------------------------------
Couldn't install Pods. Updating the Pods project and trying again...
> pod install --repo-update

[!] Invalid `Podfile` file:
[!] Invalid `RNGestureHandler.podspec` file: undefined method `exists?' for File:Class.

 #  from /Users/nora/Developments/inkdrop/inkdrop-mobile-next/node_modules/react-native-gesture-handler/RNGestureHandler.podspec:5
 #  -------------------------------------------
 #
 >  isUserApp = File.exists?(File.join(__dir__, "..", "..", "node_modules", "react-native", "package.json"))
 #  if isUserApp
 #  -------------------------------------------
.

 #  from /Users/nora/Developments/inkdrop/inkdrop-mobile-next/ios/Podfile:8
 #  -------------------------------------------
 #  target 'Inkdrop' do
 >    config = use_native_modules!
 #
 #  -------------------------------------------
Couldn't install Pods. Updating the Pods project and trying again...
Command `pod install` failed.
└─ Cause: Invalid `Podfile` file:
[!] Invalid `RNGestureHandler.podspec` file: undefined method `exists?' for File:Class.

 #  from /Users/nora/Developments/inkdrop/inkdrop-mobile-next/node_modules/react-native-gesture-handler/RNGestureHandler.podspec:5
 #  -------------------------------------------
 #
 >  isUserApp = File.exists?(File.join(__dir__, "..", "..", "node_modules", "react-native", "package.json"))
 #  if isUserApp
 #  -------------------------------------------
.

 #  from /Users/nora/Developments/inkdrop/inkdrop-mobile-next/ios/Podfile:8
 #  -------------------------------------------
 #  target 'Inkdrop' do
 >    config = use_native_modules!
 #
 #  -------------------------------------------
```

## Needs to upgrade Ruby

- [Invalid `hermes-engine.podspec` file: undefined method `exists?` for File:Class · Issue #35807 · facebook/react-native · GitHub](https://github.com/facebook/react-native/issues/35807)

## Install rbenv

```sh
brew install rbenv ruby-build
rbenv init
```

```sh
❯ rbenv install 3.2.0
To follow progress, use 'tail -f /var/folders/_8/_02tkrcd1k10kns_l0q1yqmm0000gn/T/ruby-build.20230119110619.5472.log' or pass --verbose
Downloading openssl-3.0.7.tar.gz...
-> https://dqw8nmjcqpjn7.cloudfront.net/83049d042a260e696f62406ac5c08bf706fd84383f945cf21bd61e9ed95c396e
Installing openssl-3.0.7...
Installed openssl-3.0.7 to /Users/nora/.rbenv/versions/3.2.0

Downloading ruby-3.2.0.tar.gz...
-> https://cache.ruby-lang.org/pub/ruby/3.2/ruby-3.2.0.tar.gz
Installing ruby-3.2.0...
ruby-build: using readline from homebrew
ruby-build: using gmp from homebrew
Installed ruby-3.2.0 to /Users/nora/.rbenv/versions/3.2.0


NOTE: to activate this Ruby version as the new default, run: rbenv global 3.2.0

❯ rbenv global 3.2.0

❯ ruby -v
ruby 3.2.0 (2022-12-25 revision a528908271) [arm64-darwin22]
```

## fish

- [GitHub - rbenv/fish-rbenv: Rbenv support plugin for fish-shell](https://github.com/rbenv/fish-rbenv)

```sh
fisher install rbenv/fish-rbenv
```

## Install Cocoapods via Ruby

Because pod of Homebrew still uses the old ruby in `/opt/homebrew/opt/ruby/bin/ruby`.

- [CocoaPods Guides - Getting Started](https://guides.cocoapods.org/using/getting-started.html)

Wait, it's 3.2.0!

```sh
❯ /opt/homebrew/opt/ruby/bin/ruby -v
ruby 3.2.0 (2022-12-25 revision a528908271) [arm64-darwin22]
```

Okay, that's because `exists?' for File:Class.` deprecated in the recent Ruby versions.

- [Ruby 3.2 - 無くなったメソッド](https://zenn.dev/tmtms/articles/202212-ruby32-5)

## Update deps

Let's try updating `react-native-gesture-handler`.
Ok, it solved. Upgrading other deps as well.

- `react-native-reanimated`

Ok, it solved!

```sh
❯ npx pod-install
npm info using npm@9.2.0
npm info using node@v19.4.0
npm http fetch GET 200 https://registry.npmjs.org/pod-install 78ms (cache revalidated)
Scanning for pods...
1.11.3
> pod install
Auto-linking React Native modules for target `Inkdrop`: RNCAsyncStorage, RNCClipboard, RNDeviceInfo, RNFS, RNGestureHandler, RNReactNativeHapticFeedback, RNReanimated, RNSVG, RNScreens, react-native-aes-gcm-crypto, react-native-aes-gcm-simple, react-native-get-random-values, react-native-image-picker, react-native-japanese-tokenizer, react-native-mmkv, react-native-quick-base64, react-native-quick-md5, react-native-quick-sqlite, react-native-safe-area-context, react-native-simple-crypto, and react-native-webview
[Codegen] Generating ./build/generated/ios/React-Codegen.podspec.json
Analyzing dependencies
[Codegen] Found FBReactNativeSpec
Downloading dependencies
Installing RNGestureHandler 2.9.0 (was 2.8.0)
Installing RNReanimated 2.14.2 (was 2.13.0)
Installing react-native-image-picker (5.0.0)
Generating Pods project
Setting REACT_NATIVE build settings
Setting CLANG_CXX_LANGUAGE_STANDARD to c++17 on /Users/nora/Developments/inkdrop/inkdrop-mobile-next/ios/Inkdrop.xcodeproj
Pod install took 13 [s] to run
Update config react-native-quick-sqlite Release
Update config react-native-quick-sqlite Debug
Integrating client project
Pod installation complete! There are 80 dependencies from the Podfile and 72 total pods installed.
    - Use the `$(inherited)` flag, or
    - Remove the build settings from the target.
    - Use the `$(inherited)` flag, or
    - Remove the build settings from the target.
npm info ok
```
