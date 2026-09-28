## Завантаження

ISO-образ є *live*-системою: його можна спробувати без встановлення, а якщо сподобається — встановити через значок
**Install System** на стільниці (інсталятор Calamares).

1. Завантажте ISO вище.
2. Запишіть його на флешку за допомогою [balenaEtcher](https://etcher.balena.io), Ventoy або `dd`.
3. Завантажте комп'ютер із флешки.

### Уже користуєтеся Arch Linux?

Додайте наш репозиторій до `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

І встановіть усю стільницю за один раз:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

На екрані входу оберіть сеанс **Lingmo**.
