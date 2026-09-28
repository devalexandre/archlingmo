## Stiahnutie

Obraz ISO je *live*: môžete si ho vyskúšať bez inštalácie a ak sa vám zapáči, nainštalovať ho cez ikonu
**Install System** na ploche (inštalátor Calamares).

1. Stiahnite si ISO vyššie.
2. Zapíšte ho na USB kľúč pomocou [balenaEtcher](https://etcher.balena.io), Ventoy alebo `dd`.
3. Spustite počítač z USB kľúča.

### Už používate Arch Linux?

Pridajte náš repozitár do `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

A nainštalujte celé prostredie naraz:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Na prihlasovacej obrazovke vyberte reláciu **Lingmo**.
