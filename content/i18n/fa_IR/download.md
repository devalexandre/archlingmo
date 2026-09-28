## دانلود

ایمیج ISO به‌صورت *live* است: می‌توانید بدون نصب امتحانش کنید و اگر پسندیدید، از نماد
**Install System** روی میزکار نصبش کنید (نصب‌کنندهٔ Calamares).

1. ISO بالا را دانلود کنید.
2. آن را با [balenaEtcher](https://etcher.balena.io)، Ventoy یا `dd` روی یک فلش USB بنویسید.
3. رایانه را از روی فلش راه‌اندازی کنید.

### از قبل Arch Linux دارید؟

مخزن ما را به `/etc/pacman.conf` اضافه کنید:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

و کل میزکار را یک‌جا نصب کنید:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

در صفحهٔ ورود، نشست **Lingmo** را انتخاب کنید.
