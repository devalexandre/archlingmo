## Yuklab olish

ISO tasvir *live* rejimida ishlaydi: tizimni o‘rnatmasdan sinab ko‘rishingiz, yoqsa, ish stolidagi
**Install System** belgisi orqali o‘rnatishingiz mumkin (Calamares o‘rnatuvchisi).

1. Yuqoridagi ISO’ni yuklab oling.
2. Uni [balenaEtcher](https://etcher.balena.io), Ventoy yoki `dd` yordamida fleshkaga yozing.
3. Kompyuterni fleshkadan yuklang.

### Arch Linux’dan allaqachon foydalanyapsizmi?

Omborimizni `/etc/pacman.conf` fayliga qo‘shing:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Va butun ish stolini birdaniga o‘rnating:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Kirish ekranida **Lingmo** seansini tanlang.
