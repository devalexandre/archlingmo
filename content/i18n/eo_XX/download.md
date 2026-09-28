## Elŝuto

La ISO-bildo estas *viva*: vi povas provi ĝin sen instali kaj, se ĝi plaĉas al vi, instali ĝin per la piktogramo
**Install System** sur la labortablo (instalilo Calamares).

1. Elŝutu la supran ISO-n.
2. Skribu ĝin sur USB-memorilon per [balenaEtcher](https://etcher.balena.io), Ventoy aŭ `dd`.
3. Startigu la komputilon de la USB-memorilo.

### Ĉu vi jam uzas Arch Linux?

Aldonu nian deponejon al `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Kaj instalu la tutan labortablon unufoje:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Ĉe la ensaluta ekrano, elektu la seancon **Lingmo**.
