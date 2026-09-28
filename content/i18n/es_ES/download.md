## Descarga

La imagen ISO es *live*: puedes probarla sin instalar nada y, si te gusta, instalarla desde el icono
**Install System** del escritorio (instalador Calamares).

1. Descarga la ISO de arriba.
2. Grábala en un pendrive con [balenaEtcher](https://etcher.balena.io), Ventoy o `dd`.
3. Arranca el ordenador desde el pendrive.

### ¿Ya usas Arch Linux?

Añade nuestro repositorio a `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

E instala todo el escritorio de una vez:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

En la pantalla de inicio de sesión, elige la sesión **Lingmo**.
