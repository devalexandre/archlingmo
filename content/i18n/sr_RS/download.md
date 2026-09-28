## Преузимање

ISO слика је *live*: можете је испробати без инсталирања и, ако вам се допадне, инсталирати преко иконице
**Install System** на радној површи (инсталатер Calamares).

1. Преузмите ISO изнад.
2. Упишите га на USB флеш диск помоћу [balenaEtcher](https://etcher.balena.io), Ventoy-а или `dd`.
3. Покрените рачунар са USB флеш диска.

### Већ користите Arch Linux?

Додајте нашу ризницу у `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

И инсталирајте цело радно окружење одједном:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

На екрану за пријаву изаберите сесију **Lingmo**.
