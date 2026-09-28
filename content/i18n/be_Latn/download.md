## Spampavać

ISO-vobraz — *live*: jaho možna pasprabavać biez ustaloŭki, a kali spadabajecca, ustalavać praz značok
**Install System** na pracoŭnym stale (ustaloŭščyk Calamares).

1. Spampujcie ISO vyšej.
2. Zapišycie jaho na fłešku z dapamohaj [balenaEtcher](https://etcher.balena.io), Ventoy abo `dd`.
3. Zahruzicie kampjutar z fłeški.

### Užo karystajeciesia Arch Linux?

Dadajcie naš repazitoryj u `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

I ŭstalujcie ŭsio pracoŭnaje asiaroddzie adrazu:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Na ekranie ŭvachodu vybierycie sieans **Lingmo**.
