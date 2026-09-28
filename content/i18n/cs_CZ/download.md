## Stažení

Obraz ISO je *live*: můžete si ho vyzkoušet bez instalace, a pokud se vám zalíbí, nainstalovat ho ikonou
**Install System** na ploše (instalátor Calamares).

1. Stáhněte si ISO výše.
2. Zapište ho na USB flash disk pomocí [balenaEtcher](https://etcher.balena.io), Ventoy nebo `dd`.
3. Spusťte počítač z USB flash disku.

### Už používáte Arch Linux?

Přidejte náš repozitář do `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

A nainstalujte celé prostředí najednou:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Na přihlašovací obrazovce zvolte relaci **Lingmo**.
