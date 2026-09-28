## Скачать

ISO-образ — это *live*-система: её можно попробовать без установки, а если понравится — установить с помощью значка
**Install System** на рабочем столе (установщик Calamares).

1. Скачайте ISO по кнопке выше.
2. Запишите образ на флешку с помощью [balenaEtcher](https://etcher.balena.io), Ventoy или `dd`.
3. Загрузите компьютер с флешки.

### Уже пользуетесь Arch Linux?

Добавьте наш репозиторий в `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

И установите весь рабочий стол одной командой:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

На экране входа выберите сеанс **Lingmo**.
