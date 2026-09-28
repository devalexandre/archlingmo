## Pakua

Picha ya ISO ni *live*: unaweza kuijaribu bila kusakinisha na, ukiipenda, kuisakinisha kupitia aikoni ya
**Install System** kwenye eneo-kazi (kisakinishi cha Calamares).

1. Pakua ISO iliyo hapo juu.
2. Iandike kwenye flash disk kwa kutumia [balenaEtcher](https://etcher.balena.io), Ventoy au `dd`.
3. Washa kompyuta kutoka kwenye flash disk.

### Tayari unatumia Arch Linux?

Ongeza hazina yetu kwenye `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Kisha sakinisha eneo-kazi lote kwa mara moja:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Kwenye skrini ya kuingia, chagua kipindi cha **Lingmo**.
