---
title: Discourse is slow, needs to scale up
parentPage: '/start-guide/key-note-categories-and-examples'
nextjs:
  metadata:
    title: Discourse is slow, needs to scale up
    openGraph:
      images: ['https://docs.inkdrop.app/images/key-note-categories_cover.png']
---

{% callout title="This is an example note" %}
I use Discourse for the Inkdrop user forum, which is running on a DigitalOcean droplet.
I found that the server was slow and needed to scale up.
I documented the process of upgrading the server.
{% /callout %}

It uses Swap memory:

```
root@inkdrop-discourse:/var/discourse# free -m
              total        used        free      shared  buff/cache   available
Mem:            976         747          65          27         163          60
Swap:          2047         568        1479
```

So, RAM is insufficient for running Discourse now.

Currently the droplet spec is:

- 1 GB Memory / 30 GB Disk / NYC3 - Ubuntu 16.04.3 x64

Plan to increase the size to:

![resize](/images/example-note_operations-1_digital-ocean.png)

Upgraded but it already uses Swap?!🤯

```
root@inkdrop-discourse:~# free -m
              total        used        free      shared  buff/cache   available
Mem:           1971         975         211          56         784         765
Swap:          2047          41        2006
```

## Disk size is not resized?

```
root@inkdrop-discourse:~# df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            941M     0  941M   0% /dev
tmpfs           198M  1.2M  197M   1% /run
/dev/vda1        29G   20G  9.1G  69% /
```

- [How to Resize Droplets :: DigitalOcean Documentation](https://docs.digitalocean.com/products/droplets/how-to/resize/)

```sh
root@inkdrop-discourse:~# gdisk -l /dev/vda
GPT fdisk (gdisk) version 1.0.5

Partition table scan:
  MBR: protective
  BSD: not present
  APM: not present
  GPT: present

Found valid GPT with protective MBR; using GPT.
Disk /dev/vda: 62914560 sectors, 30.0 GiB
Sector size (logical/physical): 512/512 bytes
Disk identifier (GUID): xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx
Partition table holds up to 128 entries
Main partition table begins at sector 2 and ends at sector 33
First usable sector is 34, last usable sector is 62914526
Partitions will be aligned on 2048-sector boundaries
Total free space is 2014 sectors (1007.0 KiB)

Number  Start (sector)    End (sector)  Size       Code  Name
   1          227328        62914526   29.9 GiB    8300
  14            2048           10239   4.0 MiB     EF02
  15           10240          227327   106.0 MiB   0700
```

No, it was already 30GB:

```sh
root@inkdrop-discourse:~# growpart /dev/vda 1
NOCHANGE: partition 1 is size 62687199. it cannot be grown

root@inkdrop-discourse:~# df -Th /dev/vda1
Filesystem     Type  Size  Used Avail Use% Mounted on
/dev/vda1      ext4   29G   20G  9.1G  69% /
```

## ✅ 2 days later

Looks like it's working fine:

```sh
root@inkdrop-discourse:~# free -m
              total        used        free      shared  buff/cache   available
Mem:           1971        1163         113         143         694         496
Swap:          2047         157        1890
```

The swap size is not growing up.
