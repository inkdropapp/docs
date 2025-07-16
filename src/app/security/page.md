---
title: How secure is Inkdrop?
nextjs:
  metadata:
    title: How secure is Inkdrop?
    description: Inkdrop uses use industry-standard transport and end-to-end encryption technologies
---

At Inkdrop, the security of your data is our highest priority.

![E2EE](/images/security_e2ee.png)

## Transport Encryption

Inkdrop uses industry standard encryption to protect your data in transit. This is commonly referred to as transport layer security (“TLS”) or secure socket layer (“SSL”) technology.

## End-to-end Encryption

End-to-end encryption (E2EE) is a method of secure communication that prevents third-parties from accessing data while it's transferred from one end system or device to another.
Having data encrypted with this method will make it almost impossible for someone to tap your network, to access or steal our disk and get access to the original data.
All your notes, notebooks, tags and attachments are encrypted using AES-256 encryption on your own device when transporting them to the Inkdrop server.
A common key is generated when you sign up to Inkdrop.
This key, along with an initialization vector, is used to encrypt your data in GCM (Galois/Counter Mode).
The key is also encrypted while stored on disk, with a 256-bit AES key derived with PBKDF2 from your login password.

## Two-Factor Authentication

You can enable two-factor authentication (2FA) on your Inkdrop account to protect against unauthorized access to your account and notes, by using [a time-based one-time password (TOTP)](https://en.wikipedia.org/wiki/Time-based_one-time_password) from an authenticator app.
Check out [how to configure 2FA](/reference/configure-2fa) to learn more.

## Don't Forget Your Password

We never store a copy of this common key without encryption and don't use any escrow mechanism to recover your encrypted data. This means that if you forget your login password, we cannot recover your data and we can't even reset your password.
So we strongly recommend you to use a password manager to store your password of Inkdrop.

## Take a Back-up

We humans are not perfect.
No matter how much you are careful to manage your password, you possibly lose it for various reasons.
No matter how much we are carefully operating our servers, we possibly lose your data.
So, please do take a backup!
The desktop app supports [backing up your data](/reference/data-backup) continuously.
