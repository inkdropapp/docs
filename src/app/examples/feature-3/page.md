---
title: Export PDF support
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Export PDF support
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when implementing the feature to export a note as a PDF file on the mobile app.
{% /callout %}

Looks like you need to extend webview like attachment processor.

## iOS

- [createPDF(configuration:completionHandler:) - Apple Developer Documentation](https://developer.apple.com/documentation/webkit/wkwebview/3650490-createpdf)

```objc
[wv createPDFWithConfiguration:nil completionHandler:^(NSData* data, NSError* error) {
    if (error != nil) {
      NSLog(@"Error %@", error);
    }
    [self.bi raiseUIEvent:nil event:@"pdf_created::" params:@[data, @(error == nil)]];
  }
];
```

Get a blob and share it with:

- [GitHub - react-native-share/react-native-share: Social share, sending simple data to other apps.](https://github.com/react-native-share/react-native-share)

Oh no, `RNCWebView` doesn't expose the access to the internal webview instance..

It works!

```objc
RCT_EXPORT_METHOD(exportAsPDF:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject) {
  RCTUnsafeExecuteOnMainQueueSync(^{
    RCTUIManager* uiManager = [self.bridge moduleForClass:[RCTUIManager class]];
    RNCWebView* rnWebView = (RNCWebView*)[uiManager viewForReactTag:self.webViewReactTag];
    WKWebView* webView = [(id)rnWebView webView];
    if (webView) {
      [webView createPDFWithConfiguration:nil completionHandler:^(NSData * _Nullable pdfDocumentData, NSError * _Nullable error) {
        if (!error) {
          NSLog(@"%@", pdfDocumentData);

          NSString * title =[NSString stringWithFormat:@"PDF"];
          NSArray* dataToShare = @[pdfDocumentData];
          UIActivityViewController* activityViewController = [[UIActivityViewController alloc] initWithActivityItems:dataToShare applicationActivities:nil];
          if (activityViewController != nil) {
            AppDelegate *delegate = (AppDelegate *)[[UIApplication sharedApplication] delegate];
            [delegate.window.rootViewController presentViewController:activityViewController animated:YES completion:^() {
            }];
          }
          resolve(@"OK");
        }
      }];
    } else {
      reject(@"ENOENT", @"WebView is not loaded", nil);
    }
  });
}
```

## Android

- [How to Convert WebView to PDF in Android? - GeeksforGeeks](https://www.geeksforgeeks.org/how-to-convert-webview-to-pdf-in-android/)

`webView.createPrintDocumentAdapter`.

```java
@RequiresApi(api = Build.VERSION_CODES.LOLLIPOP)
private void PrintTheWebPage(WebView webView) {
  // set printBtnPressed true
  printBtnPressed = true;

  // Creating  PrintManager instance
  PrintManager printManager = (PrintManager) this
          .getSystemService(Context.PRINT_SERVICE);

  // setting the name of job
  String jobName = getString(R.string.app_name) + " webpage" + webView.getUrl();

  // Creating  PrintDocumentAdapter instance
  PrintDocumentAdapter printAdapter = webView.createPrintDocumentAdapter(jobName);

  // Create a print job with name and adapter instance
  assert printManager != null;
  printJob = printManager.print(jobName, printAdapter,
          new PrintAttributes.Builder().build());
}
```

## 💡 Use `reactTag` to get an instance of WebView

Just like I did for attachments.

### Android

It works!!!

```java
WebView webView = (WebView) uiManagerModule.resolveView(this.webViewReactTag);
PrintManager printManager = (PrintManager) this.reactContext.getCurrentActivity().getSystemService(Context.PRINT_SERVICE);
String jobName = "Inkdrop note";
PrintDocumentAdapter printAdapter = webView.createPrintDocumentAdapter(jobName);
if (printAdapter!= null) {
    printManager.print(jobName, printAdapter, new PrintAttributes.Builder().build());
}
```

It should be run on the main thread:

```java
@ReactMethod(isBlockingSynchronousMethod = false)
public void exportAsPDF() {
    PDFExporterModule self = this;
    UiThreadUtil.runOnUiThread(new Runnable() {
        public void run() {
            UIManagerModule uiManagerModule = self.reactContext.getNativeModule(UIManagerModule.class);
            WebView webView = (WebView) uiManagerModule.resolveView(self.webViewReactTag);
            PrintManager printManager = (PrintManager) self.reactContext.getCurrentActivity().getSystemService(Context.PRINT_SERVICE);
            String jobName = "Inkdrop note";
            PrintDocumentAdapter printAdapter = webView.createPrintDocumentAdapter(jobName);
            if (printAdapter!= null) {
                printManager.print(jobName, printAdapter, new PrintAttributes.Builder().build());
            }
        }
    });
}
```

## ✅ Merged

- https://github.com/inkdropapp/xxxxxx/pull/3
