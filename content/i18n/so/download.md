## Soo dejiso

Sawirka ISO waa *live*: waad tijaabin kartaa adigoon rakibin, haddii uu kaa farxiyana, ku rakib astaanta
**Install System** ee desktop-ka (rakibaha Calamares).

1. Soo dejiso ISO-ga kor ku xusan.
2. Ku qor USB flash ah adigoo isticmaalaya [balenaEtcher](https://etcher.balena.io), Ventoy ama `dd`.
3. Kombiyuutarka ka bilow USB-ga.

### Horey ma u isticmaashaa Arch Linux?

Ku dar kaydkayaga `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Kadibna desktop-ka oo dhan hal mar ku rakib:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Shaashadda gelitaanka, dooro fadhiga **Lingmo**.
