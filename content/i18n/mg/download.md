## Sintony

*Live* ny sary ISO: azonao andramana tsy mila apetraka, ary raha tianao dia apetraho amin'ny alalan'ny kisary
**Install System** eo amin'ny birao (mpametraka Calamares).

1. Sintony ny ISO etsy ambony.
2. Soraty ao anaty kapila USB (pendrive) amin'ny [balenaEtcher](https://etcher.balena.io), Ventoy na `dd`.
3. Alefaso avy amin'ny kapila USB ny solosaina.

### Efa mampiasa Arch Linux ve ianao?

Ampio ao amin'ny `/etc/pacman.conf` ny tahirinay:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Ary apetraho indray mandeha ny birao manontolo:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Eo amin'ny efijery fidirana, safidio ny session **Lingmo**.
