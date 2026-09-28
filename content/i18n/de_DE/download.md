## Download

Das ISO-Abbild ist ein *Live*-System: Du kannst es ausprobieren, ohne etwas zu installieren, und es bei Gefallen
über das Symbol **Install System** auf dem Desktop installieren (Installationsprogramm Calamares).

1. Lade oben die ISO herunter.
2. Schreibe sie mit [balenaEtcher](https://etcher.balena.io), Ventoy oder `dd` auf einen USB-Stick.
3. Starte den Computer vom USB-Stick.

### Du nutzt schon Arch Linux?

Füge unser Repository zu `/etc/pacman.conf` hinzu:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Und installiere den kompletten Desktop in einem Schritt:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Wähle auf dem Anmeldebildschirm die Sitzung **Lingmo**.
