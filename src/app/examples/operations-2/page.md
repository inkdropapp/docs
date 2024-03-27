---
title: Configure DMARC record
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Configure DMARC record
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I configured the DMARC record for the `inkdrop.app` domain to improve email deliverability.
First, I learned how to configure DMARC, then, check my current domain configuration, and finally, set up the DMARC record.
{% /callout %}

## References

- [Define your DMARC record - Google Workspace Admin Help](https://support.google.com/a/answer/10032169)
- [Add your DMARC record - Google Workspace Admin Help](https://support.google.com/a/answer/2466563#dmarc-record-tags)

## Define DMARC record for `inkdrop.app`

- [Complying with DMARC using Amazon SES - Amazon Simple Email Service](https://docs.aws.amazon.com/ses/latest/dg/send-email-authentication-dmarc.html)

`_dmarc TXT`:

```
v=DMARC1;p=none;rua=mailto:***@inkdrop.app;pct=100;adkim=s;aspf=s
```

- `v`: Required DMARC version. Must be DMARC1.
- `p`: Instructs the receiving mail server what to do with messages that don’t pass authentication.
- `rua`: Email address to receive reports about DMARC activity for your domain
- `adkim`: Sets the alignment policy for DKIM, which defines how strictly message information must match DKIM signatures
  - `s` = Strict
- `aspf`: Sets the alignment policy for SPF, which specifies how strictly message information must match SPF signatures
  - `s` = Strict

### Check

```sh
❯ nslookup -type=TXT _dmarc.inkdrop.app
Server:         xxxx:xxxx:xxxx::a
Address:        xxxx:xxxx:xxxx::a#53

Non-authoritative answer:
_dmarc.inkdrop.app      text = "v=DMARC1;p=none;rua=mailto:***@inkdrop.app;pct=100;adkim=s;aspf=s"

Authoritative answers can be found from:

```

Now I can see `dmarc` in the ARC-Authentication-Results header:

```
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@inkdrop.app header.s=axxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx header.b=xxxx+xxx;
       dkim=pass header.i=@amazonses.com header.s=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx header.b=xxxxxxxx;
       spf=pass (google.com: domain of xxxxxxxxxxxxxxxx-xxxxxxxx-b2e2-4544-8e7f-xxxxxxxxxxxx-000000@xxxxx.amazonses.com designates xx.xxx.xx.xx as permitted sender) smtp.mailfrom=xxxxxxxxxxxxxxxx-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-xxxxxx@xxxxx.amazonses.com;
       dmarc=pass (p=NONE sp=NONE dis=NONE) header.from=inkdrop.app
```

- {% check v=true /%} Inkdrop Forum
- {% check v=true /%} Amazon SES from the Inkdrop server
- {% check v=true /%} Gmail

## Change SPF record

- [What is the difference between SPF ~all and -all? - dmarcian](https://dmarcian.com/what-is-the-difference-between-spf-all-and-all/)
  - “softfail” in the case of `~`
  - “fail” in the case of `-`

So, change it from softfail to fail.

From:

```
"google-site-verification=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxx"
"v=spf1 include:amazonses.com include:_spf.google.com ~all"
```

To:

```
"google-site-verification=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-xxxxxx"
"v=spf1 include:amazonses.com include:_spf.google.com -all"
```

## Set up for craftz.dog as well

```
v=DMARC1;p=none;rua=mailto:***@craftz.dog;pct=100;adkim=s;aspf=s
```

Enable quarantine:

```
v=DMARC1;p=quarantine;rua=mailto:***@craftz.dog;pct=100;adkim=s;aspf=s
```

## Got a report

```xml
<?xml version="1.0" encoding="UTF-8" ?>
<feedback>
  <report_metadata>
    <org_name>google.com</org_name>
    <email>noreply-dmarc-support@google.com</email>
    <extra_contact_info>https://support.google.com/a/answer/2466580</extra_contact_info>
    <report_id>xxxxxxxxxxxxxxxxxxxx</report_id>
    <date_range>
      <begin>1664668800</begin>
      <end>1664755199</end>
    </date_range>
  </report_metadata>
  <policy_published>
    <domain>inkdrop.app</domain>
    <adkim>s</adkim>
    <aspf>s</aspf>
    <p>none</p>
    <sp>none</sp>
    <pct>100</pct>
  </policy_published>
  <record>
    <row>
      <source_ip>xx.xxx.xx.xxx</source_ip>
      <count>4</count>
      <policy_evaluated>
        <disposition>none</disposition>
        <dkim>pass</dkim>
        <spf>fail</spf>
      </policy_evaluated>
    </row>
    <identifiers>
      <header_from>inkdrop.app</header_from>
    </identifiers>
    <auth_results>
      <dkim>
        <domain>inkdrop.app</domain>
        <result>pass</result>
        <selector>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</selector>
      </dkim>
      <dkim>
        <domain>amazonses.com</domain>
        <result>pass</result>
        <selector>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</selector>
      </dkim>
      <spf>
        <domain>xxxxx.amazonses.com</domain>
        <result>pass</result>
      </spf>
    </auth_results>
  </record>
```

- [amazon web services - Why does spf fail in DMARC report from Google? - Server Fault](https://serverfault.com/questions/1082949/why-does-spf-fail-in-dmarc-report-from-google)
  > Ensure that your sending domain uses a relaxed policy for SPF. If you haven't changed your domain's policy alignment, it uses a relaxed policy by default

Looks like I should set the DMARC SPF alignment test to relaxed (`r`).

```
v=DMARC1;p=none;rua=mailto:***@inkdrop.app;pct=100;adkim=s;aspf=r
```

No, that's not enough.

## Configure a custom MAIL FROM domain

> When you send emails using Amazon SES, the Mail From or Envelope From domain is **amazonses.com** by default, and your **From domain is the domain that you verified**. These values **fail** SPF alignment and DMARC validation.
> https://aws.amazon.com/premiumsupport/knowledge-center/ses-dmarc-spf-dkim-alignment/
>
> To resolve this, you must [set up a **custom MAIL FROM domain**](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/mail-from.html) so that the **Mail From** value is a subdomain of your verified domain. For example, if your verified domain (the **From** domain) is **example.com**, then you can set up the custom **Mail From** domain to be **mail.example.com**. These values pass SPF alignment and DMARC validation.

![CleanShot 2022-10-03 at 19.43.53@2x](/images/example-note_operations-2_custom-mail-from.png)

## Google Workspace Domain alias cause the SPF failure

> SPF is failing because of [misalignment](https://easydmarc.com/blog/why-is-dmarc-failing/). When you send an email from Alias setup (from Google Workspace), your MailFrom: will be your Primary domain (primarydomain.com), and your From: address your Alias domain(aliasdomain.com), failing alignment, leading to SPF failure in regards to DMARC.
> <https://serverfault.com/questions/1052373/i-try-to-sent-emails-from-different-domain-names-using-one-email-account-and-get>

```xml
<record>
  <row>
    <source_ip>xxx.xx.xxx.xx</source_ip>
    <count>1</count>
    <policy_evaluated>
      <disposition>none</disposition>
      <dkim>pass</dkim>
      <spf>fail</spf>
    </policy_evaluated>
  </row>
  <identifiers>
    <header_from>inkdrop.app</header_from>
  </identifiers>
  <auth_results>
    <dkim>
      <domain>inkdrop.app</domain>
      <result>pass</result>
      <selector>google</selector>
    </dkim>
    <spf>
      <domain>***.com</domain>
      <result>pass</result>
    </spf>
  </auth_results>
</record>
```

Ouch.

> Use [the `redirect` modifier](http://www.open-spf.org/SPF_Record_Syntax/#redirect) to "replace" the SPF record for the alias domain with that of the primary domain.
>
> Thus, the SPF record for `aliasdomain.com` ends up looking like this:
>
> ```
> v=spf1 redirect=primarydomain.com
> ```
>
> Note that no `all` mechanism is required, the final clause of the `primarydomain.com` record will apply.
>
> <https://serverfault.com/a/805106>

I found this information as well:

> Identifier Alignment: When the domain in the RFC5322.From address matches a domain validated by SPF **or** DKIM (or both), it has Identifier Alignment.

hmmmmmm

- <http://www.open-spf.org/SPF_Record_Syntax/#redirect>

```
"v=spf1 redirect=craftz.dog"
```

```
"v=spf1 redirect=inkdrop.app"
```

### Set up a custom MAIL FROM domain

- {% check v=false /%} [Using a custom MAIL FROM domain - Amazon Simple Email Service](https://docs.aws.amazon.com/ses/latest/dg/mail-from.html)

Let's use `mail.inkdrop.app`.

- `mail.inkdrop.app`: `MX 10 feedback-smtp.xxxxx.amazonses.com`
- `mail.inkdrop.app`: `TXT "v=spf1 include:amazonses.com ~all"`

## Enable quarantine

Enabled `q=quarantine` on 2023/04/20.

```
v=DMARC1;p=quarantine;rua=mailto:***@inkdrop.app;pct=100;adkim=s;aspf=r
```

### Sent a test newsletter from the inkdrop server

- View it on Gmail: https://mail.google.com/mail/u/2/?xxxxxxxxxxxxxxxx

```
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@inkdrop.app header.s=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx header.b=RKZOHoMk;
       dkim=pass header.i=@amazonses.com header.s=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx header.b=XM5180Fd;
       spf=pass (google.com: domain of xxxxxxxxxeaaxxbd-axxxxbxe-aexx-xxxx-xxxe-exxxafxxeaed-xxxxxx@us-west-x.amazonses.com designates xx.xxx.xx.xx as permitted sender) smtp.mailfrom=xxxxxxxxxeaaxxbd-axxxxbxe-aexx-xxxx-xxxe-exxxafxxeaed-xxxxxx@us-west-x.amazonses.com;
       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=inkdrop.app
...
Received-SPF: pass (google.com: domain of xxxxxxxxxxxxxxxx-xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx-xxxxxx@us-west-x.amazonses.com designates xx.xxx.xx.xx as permitted sender) client-ip=xx.xxx.xx.xx;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@inkdrop.app header.s=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx header.b=RKZOHoMk;
       dkim=pass header.i=@amazonses.com header.s=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx header.b=XMxxxxFd;
       spf=pass (google.com: domain of xxxxxxxxxeaaxxbd-axxxxbxe-aexx-xxxx-xxxe-exxxafxxeaed-xxxxxx@us-west-x.amazonses.com designates xx.xxx.xx.xx as permitted sender) smtp.mailfrom=xxxxxxxxxeaaxxbd-axxxxbxe-aexx-xxxx-xxxe-exxxafxxeaed-xxxxxx@us-west-x.amazonses.com;
       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=inkdrop.app
```

### Sent from an email client

Looks ok.

- View it on Gmail: https://mail.google.com/mail/u/0/?xxxxxxxxxxxx

```
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@inkdrop.app header.s=google header.b=eouxygLZ;
       spf=pass (google.com: domain of t@***.com designates xxx.xx.xxx.xx as permitted sender) smtp.mailfrom=t@***.com;
       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=inkdrop.app
...
Received-SPF: pass (google.com: domain of t@***.com designates xxx.xx.xxx.xx as permitted sender) client-ip=xxx.xx.xxx.xx;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@inkdrop.app header.s=google header.b=eouxygLZ;
       spf=pass (google.com: domain of t@***.com designates xxx.xx.xxx.xx as permitted sender) smtp.mailfrom=t@***.com;
       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=inkdrop.app
```

### Sent from the user forum

- View it on Gmail: https://mail.google.com/mail/u/0/?xxxxxxxxxxxxxxxxx

```
ARC-Authentication-Results: i=1; mx.google.com;
       dkim=pass header.i=@inkdrop.app header.s=xxonxxxtvbfxxbydhgbzxfaomwuxbixx header.b=Luvprxx+;
       dkim=pass header.i=@amazonses.com header.s=hsbnpxpxensaochzwyqxwwmceodymuwv header.b=rxRefyx+;
       spf=pass (google.com: domain of xxxxxxxxxebxxxex-xxaxxxfx-bxxa-xdxa-xxxx-xxbxaxxxbxex-xxxxxx@us-west-x.amazonses.com designates xx.xxx.xx.xxx as permitted sender) smtp.mailfrom=xxxxxxxxxebxxxex-xxaxxxfx-bxxa-xdxa-xxxx-xxbxaxxxbxex-xxxxxx@us-west-x.amazonses.com;
       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=inkdrop.app
Received-SPF: pass (google.com: domain of xxxxxxxxxebxxxex-xxaxxxfx-bxxa-xdxa-xxxx-xxbxaxxxbxex-xxxxxx@us-west-x.amazonses.com designates xx.xxx.xx.xxx as permitted sender) client-ip=xx.xxx.xx.xxx;
Authentication-Results: mx.google.com;
       dkim=pass header.i=@inkdrop.app header.s=xxonxxxtvbfxxbydhgbzxfaomwuxbixx header.b=Luvprxx+;
       dkim=pass header.i=@amazonses.com header.s=hsbnpxpxensaochzwyqxwwmceodymuwv header.b=rxRefyx+;
       spf=pass (google.com: domain of xxxxxxxxxebxxxex-xxaxxxfx-bxxa-xdxa-xxxx-xxbxaxxxbxex-xxxxxx@us-west-x.amazonses.com designates xx.xxx.xx.xxx as permitted sender) smtp.mailfrom=xxxxxxxxxebxxxex-xxaxxxfx-bxxa-xdxa-xxxx-xxbxaxxxbxex-xxxxxx@us-west-x.amazonses.com;
       dmarc=pass (p=QUARANTINE sp=QUARANTINE dis=NONE) header.from=inkdrop.app
```
