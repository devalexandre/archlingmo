## Pobierz

Obraz ISO działa w trybie *live*: możesz wypróbować system bez instalacji, a jeśli ci się spodoba, zainstalować go ikoną
**Install System** na pulpicie (instalator Calamares).

1. Pobierz ISO powyżej.
2. Nagraj je na pendrive za pomocą [balenaEtcher](https://etcher.balena.io), Ventoy lub `dd`.
3. Uruchom komputer z pendrive'a.

### Używasz już Arch Linux?

Dodaj nasze repozytorium do `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

I zainstaluj całe środowisko za jednym razem:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Na ekranie logowania wybierz sesję **Lingmo**.
