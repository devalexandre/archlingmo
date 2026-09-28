## Ladda ner

ISO-avbilden är *live*: du kan prova den utan att installera och, om du gillar den, installera den via ikonen
**Install System** på skrivbordet (installationsprogrammet Calamares).

1. Ladda ner ISO-filen ovan.
2. Skriv den till ett USB-minne med [balenaEtcher](https://etcher.balena.io), Ventoy eller `dd`.
3. Starta datorn från USB-minnet.

### Använder du redan Arch Linux?

Lägg till vårt förråd i `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Och installera hela skrivbordet på en gång:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Välj sessionen **Lingmo** på inloggningsskärmen.
