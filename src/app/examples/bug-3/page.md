---
title: App crashes when exporting as PDF on iPad
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: App crashes when exporting as PDF on iPad
---

{% callout title="This is an example note" %}
I took this note when I get a bug report on the user forum, which is about exporting as PDF on iPad.
{% /callout %}

- Bug report: <https://forum.inkdrop.app/t/pdf-export-crashes-inkdrop-on-ipad/4279>

## Exception

```
Exception	NSException *	"UIPopoverPresentationController (<UIPopoverPresentationController: 0x1611467a0>) should have a non-nil sourceView or barButtonItem set before the presentation occurs."	0x0000600000e3d740
```

## Solutions

- [How to present UIActivityViewController on iPhone and iPad | by Dushyant Bansal | Medium](https://dushyant37.medium.com/how-to-present-uiactivityviewcontroller-on-iphone-and-ipad-ae72013d2a5a)
  > The error message is self explanatory. UIActivityViewController is presented in a popover on iPad. Even documentations mentions this
  >
  > ```
  > On iPad, you must present the view controller in a popover.
  > ```
  >
  > Therefore, on iPad, you must configure `popoverPresentationController` by providing either a `sourceView` and `sourceRect` or a `barButtonItem`.

It works!

```diff
diff --git a/ios/Inkdrop/PDFExporter.m b/ios/Inkdrop/PDFExporter.m
index 8a2047a..2115ae6 100644
--- a/ios/Inkdrop/PDFExporter.m
+++ b/ios/Inkdrop/PDFExporter.m
@@ -37,6 +37,11 @@ RCT_EXPORT_METHOD(exportAsPDF:(NSString* __nonnull)title
           UIActivityViewController* activityViewController = [[UIActivityViewController alloc] initWithActivityItems:dataToShare applicationActivities:nil];
           if (activityViewController != nil) {
             AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
+            if ([[UIDevice currentDevice] userInterfaceIdiom] == UIUserInterfaceIdiomPad) {
+              CGRect screenRect = [[UIScreen mainScreen] bounds];
+              activityViewController.popoverPresentationController.sourceView = delegate.window.rootViewController.view;
+              activityViewController.popoverPresentationController.sourceRect = CGRectMake(screenRect.size.width / 2, screenRect.size.height, 10, 10);
+            }
             [delegate.window.rootViewController presentViewController:activityViewController animated:YES completion:^() {
             }];
           }
```

- Commit: https://github.com/inkdropapp/xxxxxx/commit/xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

