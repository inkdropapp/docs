---
title: Incorrect FROM name
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Incorrect FROM name
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I took this note when I found that the `From` field in the emails sent from the app server is not as expected.
{% /callout %}

## via Contact Desk??

![Screenshot 2024-01-13 at 00.01.26](/images/example-note_troubleshooting-3_01_via-contact-desk.png)

In the emails sent from the app server, the `From` field has the following name:

```
From: "'Takuya at Inkdrop' via Contact desk" <contact@**MASKED**.info>
```

Why is it still sent from `**MASKED**.info`?

## That is due to Google Workspace Domain alias

- [Configure DMARC record](internal note link)

So, you have to set up a custom MAIL FROM domain..

> ## Set up a custom MAIL FROM domain
>
> - [ ] [Using a custom MAIL FROM domain - Amazon Simple Email Service](https://docs.aws.amazon.com/ses/latest/dg/mail-from.html)
>
> Let's use `mail.inkdrop.app`.
>
> - `mail.inkdrop.app`: `MX 10 ***.amazonses.com`
> - `mail.inkdrop.app`: `TXT "v=spf1 include:amazonses.com ~all"`

## Looks like it is displayed when the recipient is Gmail

When sending to my iCloud email, the `From` header looks as expected:

```
From: Takuya at Inkdrop <****@inkdrop.app>
```

And, no 'via' label.
So, I can ignore this issue for now.

On Apple Mail:

![Screenshot 2024-01-13 at 00.16.20](/images/example-note_troubleshooting-3_02_apple-mail.png)
On Spark:

![Screenshot 2024-01-13 at 00.16.34](/images/example-note_troubleshooting-3_03_spark.png)

## It doesn't happen when sending via Loops

- [Try Loops](inkdrop://note/WPweN_aW5)

![Screenshot 2024-01-13 at 00.18.46](/images/example-note_troubleshooting-3_04_loops.png)

## ✅ Changed the group name from 'Contact desk' to 'Inkdrop'

Now it looks like so:

![Screenshot 2024-01-13 at 00.19.44](/images/example-note_troubleshooting-3_05_changed-group-name.png)
