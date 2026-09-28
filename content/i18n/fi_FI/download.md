## Lataa

ISO-levykuva on *live*-järjestelmä: voit kokeilla sitä asentamatta mitään ja halutessasi asentaa sen työpöydän
**Install System** -kuvakkeesta (Calamares-asennusohjelma).

1. Lataa ISO yllä olevasta painikkeesta.
2. Kirjoita se USB-muistitikulle [balenaEtcherillä](https://etcher.balena.io), Ventoylla tai `dd`:llä.
3. Käynnistä tietokone muistitikulta.

### Käytätkö jo Arch Linuxia?

Lisää ohjelmistolähteemme tiedostoon `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Ja asenna koko työpöytä kerralla:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Valitse kirjautumisnäytössä istunnoksi **Lingmo**.
