## Download

The ISO image is *live*: you can try it without installing and, if you like it, install it from the
**Install System** icon on the desktop (Calamares installer).

1. Download the ISO above.
2. Write it to a USB stick with [balenaEtcher](https://etcher.balena.io), Ventoy or `dd`.
3. Boot your computer from the USB stick.

### Already on Arch Linux?

Add our repository to `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Then install the whole desktop in one go:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

On the login screen, choose the **Lingmo** session.
