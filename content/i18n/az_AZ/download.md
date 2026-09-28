## Yüklə

ISO təsviri *live* sistemdir: quraşdırmadan sınaya bilərsiniz, bəyənsəniz, iş masasındakı
**Install System** ikonu ilə quraşdırın (Calamares quraşdırıcısı).

1. Yuxarıdakı ISO-nu yükləyin.
2. Onu [balenaEtcher](https://etcher.balena.io), Ventoy və ya `dd` ilə fleşkaya yazın.
3. Kompüteri fleşkadan başladın.

### Artıq Arch Linux istifadə edirsiniz?

Depomuzu `/etc/pacman.conf` faylına əlavə edin:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Və bütün iş masasını bir dəfəyə quraşdırın:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Giriş ekranında **Lingmo** sessiyasını seçin.
