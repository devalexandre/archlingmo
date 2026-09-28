## Descargar

Li image ISO es *live*: on posse provar it sin installar, e si it plese vos, installar it per li icone
**Install System** sur li pupitre (installator Calamares).

1. Descargar li ISO ci-supra.
2. Scrir it sur un clave USB con [balenaEtcher](https://etcher.balena.io), Ventoy o `dd`.
3. Lansar li computator ex li clave USB.

### Vu ja usa Arch Linux?

Adjunter nor depositoria a `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

E installar li tot ambientie de pupitre in un vez:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Sur li ecran de apertion de session, selecter li session **Lingmo**.
