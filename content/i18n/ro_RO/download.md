## Descărcare

Imaginea ISO este *live*: puteți încerca sistemul fără să-l instalați și, dacă vă place, îl instalați din pictograma
**Install System** de pe desktop (programul de instalare Calamares).

1. Descărcați ISO-ul de mai sus.
2. Scrieți-l pe un stick USB cu [balenaEtcher](https://etcher.balena.io), Ventoy sau `dd`.
3. Porniți calculatorul de pe stick.

### Folosiți deja Arch Linux?

Adăugați depozitul nostru în `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Și instalați tot mediul desktop dintr-o dată:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Pe ecranul de autentificare, alegeți sesiunea **Lingmo**.
