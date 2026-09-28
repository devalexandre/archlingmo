## Letöltés

Az ISO-képfájl *live* rendszer: telepítés nélkül is kipróbálhatod, és ha tetszik, telepítheted az asztalon lévő
**Install System** ikonnal (Calamares telepítő).

1. Töltsd le a fenti ISO-t.
2. Írd ki egy pendrive-ra a [balenaEtcher](https://etcher.balena.io), a Ventoy vagy a `dd` segítségével.
3. Indítsd el a számítógépet a pendrive-ról.

### Már Arch Linuxot használsz?

Add hozzá a tárolónkat az `/etc/pacman.conf` fájlhoz:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Majd telepítsd egyszerre a teljes asztali környezetet:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

A bejelentkezési képernyőn válaszd a **Lingmo** munkamenetet.
