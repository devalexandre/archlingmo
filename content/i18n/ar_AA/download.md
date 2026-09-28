## التنزيل

صورة ISO *حية* (live): يمكنك تجربتها دون تثبيت، وإن أعجبتك ثبّتها من أيقونة
**Install System** على سطح المكتب (مثبّت Calamares).

1. نزّل ملف ISO أعلاه.
2. اكتبه على ذاكرة USB باستخدام [balenaEtcher](https://etcher.balena.io) أو Ventoy أو `dd`.
3. شغّل الحاسوب من ذاكرة USB.

### هل تستخدم Arch Linux بالفعل؟

أضف مستودعنا إلى `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

ثم ثبّت سطح المكتب كاملًا دفعة واحدة:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

في شاشة تسجيل الدخول، اختر جلسة **Lingmo**.
