---
title: Code splitting my.inkdrop.app for faster page load
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Code splitting my.inkdrop.app for faster page load
---

{% callout title="This is an example note" %}
I took this note when the page load performance of my.inkdrop.app was pretty bad.
{% /callout %}

## Performance is pretty bad!

![Bad performance on my.inkdrop.app](/images/example-note_performance-2_01_low-score.png)
File: [HTML report](file:///Users/nora/Google%20Drive/Documents/inkdrop/site/performance/my.inkdrop.app-20200409T105637.html)

### Split code

Ref: [Code-Splitting – React](https://reactjs.org/docs/code-splitting.html)

```diff
diff --git a/src/routes.js b/src/routes.js
index c309e35..9045617 100644
--- a/src/routes.js
+++ b/src/routes.js
@@ -1,29 +1,32 @@
 // @flow
-import React from 'react'
+import React, { lazy } from 'react'
 import { Route, Switch } from 'react-router-dom'
 import AppContainer from './components/app-container'
 import IndexPage from './pages/index'
-import DownloadPage from './pages/download'
-import DownloadBetaPage from './pages/download-beta'
-import DownloadNoticeWindowsInstaller from './pages/download-notice-windows-installer'
-import DemoPage from './pages/demo'
-import AccountPage from './pages/account'
-import NotFoundPage from './pages/notfound'
-import BillingPage from './pages/billing'
-import APIKeysPage from './pages/api-keys'
-import SignupPage from './pages/signup'
-import ErrorPage from './pages/error'
-import ActivatedPage from './pages/activated'
-import PluginsPage from './pages/plugins'
-import PluginDetailPage from './pages/plugin-detail'
-import ReactivateAccountPage from './pages/reactivate'
-import AccountDeletePage from './pages/delete'
-import UnsubscribedPage from './pages/unsubscribed'
-import PurchasePage from './pages/purchase'
-import MaintenancePage from './pages/maintenance'

 const { MAINTENANCE } = process.env

+const DownloadPage = lazy(() => import('./pages/download'))
+const DownloadBetaPage = lazy(() => import('./pages/download-beta'))
+const DownloadNoticeWindowsInstaller = lazy(() =>
+  import('./pages/download-notice-windows-installer')
+)
+const DemoPage = lazy(() => import('./pages/demo'))
+const AccountPage = lazy(() => import('./pages/account'))
+const NotFoundPage = lazy(() => import('./pages/notfound'))
+const BillingPage = lazy(() => import('./pages/billing'))
+const APIKeysPage = lazy(() => import('./pages/api-keys'))
+const SignupPage = lazy(() => import('./pages/signup'))
+const ErrorPage = lazy(() => import('./pages/error'))
+const ActivatedPage = lazy(() => import('./pages/activated'))
+const AccountDeletePage = lazy(() => import('./pages/delete'))
+const UnsubscribedPage = lazy(() => import('./pages/unsubscribed'))
+const PurchasePage = lazy(() => import('./pages/purchase'))
+const MaintenancePage = lazy(() => import('./pages/maintenance'))
+const PluginsPage = lazy(() => import('./pages/plugins'))
+const PluginDetailPage = lazy(() => import('./pages/plugin-detail'))
+const ReactivateAccountPage = lazy(() => import('./pages/reactivate'))
+
 export default function routes(app: Object) {
   if (!MAINTENANCE) {
     return (
```

### Before

```sh
-rw-r--r--  1 nora  admin   3.3M Apr  8 22:26 build/app.js
```

### After

```sh
-rw-r--r--  1 nora  admin    28K Apr  8 22:31 build/0.js
-rw-r--r--  1 nora  admin    34K Apr  8 22:31 build/1.js
-rw-r--r--  1 nora  admin    33K Apr  8 22:31 build/10.js
-rw-r--r--  1 nora  admin    59K Apr  8 22:31 build/11.js
-rw-r--r--  1 nora  admin    36K Apr  8 22:31 build/12.js
-rw-r--r--  1 nora  admin    30K Apr  8 22:31 build/13.js
-rw-r--r--  1 nora  admin   5.6K Apr  8 22:31 build/14.js
-rw-r--r--  1 nora  admin    11K Apr  8 22:31 build/15.js
-rw-r--r--  1 nora  admin    13K Apr  8 22:31 build/16.js
-rw-r--r--  1 nora  admin   3.1K Apr  8 22:31 build/17.js
-rw-r--r--  1 nora  admin    14K Apr  8 22:31 build/18.js
-rw-r--r--  1 nora  admin   6.2K Apr  8 22:31 build/19.js
-rw-r--r--  1 nora  admin   5.3K Apr  8 22:31 build/20.js
-rw-r--r--  1 nora  admin   4.9K Apr  8 22:31 build/21.js
-rw-r--r--  1 nora  admin   5.4K Apr  8 22:31 build/22.js
-rw-r--r--  1 nora  admin   306K Apr  8 22:31 build/3.js
-rw-r--r--  1 nora  admin   122K Apr  8 22:31 build/4.js
-rw-r--r--  1 nora  admin    17K Apr  8 22:31 build/5.js
-rw-r--r--  1 nora  admin    36K Apr  8 22:31 build/6.js
-rw-r--r--  1 nora  admin    55K Apr  8 22:31 build/7.js
-rw-r--r--  1 nora  admin    75K Apr  8 22:31 build/8.js
-rw-r--r--  1 nora  admin    47K Apr  8 22:31 build/9.js
-rw-r--r--  1 nora  admin   2.5M Apr  8 22:31 build/app.js
```

With production build:

```sh
-rw-r--r--  1 nora  admin    31K Apr  9 10:53 build/account.js
-rw-r--r--  1 nora  admin   1.2K Apr  9 10:53 build/activated.js
-rw-r--r--  1 nora  admin    10K Apr  9 10:53 build/api-keys.js
-rw-r--r--  1 nora  admin   822K Apr  9 10:53 build/app.js
-rw-r--r--  1 nora  admin    27K Apr  9 10:53 build/billing.js
-rw-r--r--  1 nora  admin   7.9K Apr  9 10:53 build/delete.js
-rw-r--r--  1 nora  admin    14K Apr  9 10:53 build/demo.js
-rw-r--r--  1 nora  admin   2.5K Apr  9 10:53 build/download-notice-windows-installer.js
-rw-r--r--  1 nora  admin    11K Apr  9 10:53 build/download.js
-rw-r--r--  1 nora  admin   1.5K Apr  9 10:53 build/error.js
-rw-r--r--  1 nora  admin   1.1K Apr  9 10:53 build/maintenance.js
-rw-r--r--  1 nora  admin   879B Apr  9 10:53 build/notfound.js
-rw-r--r--  1 nora  admin   7.3K Apr  9 10:53 build/plugin-detail.js
-rw-r--r--  1 nora  admin   8.2K Apr  9 10:53 build/plugins.js
-rw-r--r--  1 nora  admin    18K Apr  9 10:53 build/purchase.js
-rw-r--r--  1 nora  admin    14K Apr  9 10:53 build/reactivate.js
-rw-r--r--  1 nora  admin    14K Apr  9 10:53 build/signup.js
-rw-r--r--  1 nora  admin   1.0K Apr  9 10:53 build/unsubscribe.js
-rw-r--r--  1 nora  admin   306K Apr  9 10:53 build/vendors~plugin-detail.js
-rw-r--r--  1 nora  admin    17K Apr  9 10:53 build/vendors~plugins.js
```

## Compare page load performance

Improved 150ms! Cool.

Before:
![Before #small](/images/example-note_performance-2_02_before.png)

After:
![After #small](/images/example-note_performance-2_03_after.png)

### Optimization Result

ok, much better!

![Screenshot 2024-03-25 at 15.43.23](/images/example-note_performance-2_04_score-after.png)

## Next: Optimize Semantic UI

But the `app.css` is very large and it is taking 221ms to load.
The work for this is going to be on [Optimize semantic-ui CSS](inkdrop://note:aMGkBaFQe).

