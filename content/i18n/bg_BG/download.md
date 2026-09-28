## Изтегляне

ISO образът е *live*: можете да го изпробвате без инсталиране и, ако ви хареса, да го инсталирате от иконата
**Install System** на работния плот (инсталатор Calamares).

1. Изтеглете ISO файла по-горе.
2. Запишете го на USB флашка с [balenaEtcher](https://etcher.balena.io), Ventoy или `dd`.
3. Стартирайте компютъра от флашката.

### Вече ползвате Arch Linux?

Добавете нашето хранилище в `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

И инсталирайте цялата работна среда наведнъж:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

На екрана за вход изберете сесията **Lingmo**.
