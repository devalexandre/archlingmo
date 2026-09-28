## Download

L'immagine ISO è *live*: puoi provarla senza installare nulla e, se ti piace, installarla dall'icona
**Install System** sul desktop (installer Calamares).

1. Scarica la ISO qui sopra.
2. Scrivila su una chiavetta USB con [balenaEtcher](https://etcher.balena.io), Ventoy o `dd`.
3. Avvia il computer dalla chiavetta USB.

### Usi già Arch Linux?

Aggiungi il nostro repository a `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

E installa l'intero desktop in un colpo solo:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Nella schermata di accesso, scegli la sessione **Lingmo**.
