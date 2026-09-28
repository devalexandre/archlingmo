## Preuzimanje

ISO slika je *live*: možete je isprobati bez instalacije i, ako vam se svidi, instalirati je preko ikone
**Install System** na radnoj površini (instaler Calamares).

1. Preuzmite ISO iznad.
2. Snimite ga na USB stick pomoću [balenaEtcher](https://etcher.balena.io), Ventoy ili `dd`.
3. Pokrenite računar s USB sticka.

### Već koristite Arch Linux?

Dodajte naš repozitorij u `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

I instalirajte cijelu radnu površinu odjednom:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Na ekranu za prijavu odaberite sesiju **Lingmo**.
