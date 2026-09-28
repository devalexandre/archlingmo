## Lejupielāde

ISO attēls ir *live*: to var izmēģināt bez instalēšanas un, ja patīk, instalēt ar ikonu
**Install System** uz darbvirsmas (Calamares instalētājs).

1. Lejupielādējiet ISO augstāk.
2. Ierakstiet to USB zibatmiņā ar [balenaEtcher](https://etcher.balena.io), Ventoy vai `dd`.
3. Palaidiet datoru no USB zibatmiņas.

### Jau lietojat Arch Linux?

Pievienojiet mūsu krātuvi failam `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Un instalējiet visu darbvirsmu uzreiz:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Pieteikšanās ekrānā izvēlieties sesiju **Lingmo**.
