## Last ned

ISO-bildet er *live*: du kan prøve systemet uten å installere, og hvis du liker det, installere med ikonet
**Install System** på skrivebordet (Calamares-installasjonsprogrammet).

1. Last ned ISO-en ovenfor.
2. Skriv den til en USB-minnepinne med [balenaEtcher](https://etcher.balena.io), Ventoy eller `dd`.
3. Start datamaskinen fra minnepinnen.

### Bruker du allerede Arch Linux?

Legg til pakkebrønnen vår i `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Og installer hele skrivebordet på én gang:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Velg økten **Lingmo** på innloggingsskjermen.
