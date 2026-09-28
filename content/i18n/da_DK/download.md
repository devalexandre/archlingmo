## Download

ISO-billedet er *live*: du kan prøve det uden at installere og, hvis du kan lide det, installere det via ikonet
**Install System** på skrivebordet (Calamares-installationsprogrammet).

1. Download ISO-filen ovenfor.
2. Skriv den til et USB-stik med [balenaEtcher](https://etcher.balena.io), Ventoy eller `dd`.
3. Start computeren fra USB-stikket.

### Bruger du allerede Arch Linux?

Tilføj vores pakkearkiv til `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Og installér hele skrivebordet på én gang:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Vælg sessionen **Lingmo** på loginskærmen.
