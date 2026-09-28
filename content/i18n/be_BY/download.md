## Спампаваць

ISO-вобраз працуе ў рэжыме *live*: сістэму можна паспрабаваць без усталёўкі, а калі спадабаецца, усталяваць праз значок
**Install System** на працоўным стале (усталёўшчык Calamares).

1. Спампуйце ISO вышэй.
2. Запішыце яго на флэшку з дапамогай [balenaEtcher](https://etcher.balena.io), Ventoy або `dd`.
3. Загрузіце камп'ютар з флэшкі.

### Ужо карыстаецеся Arch Linux?

Дадайце наш рэпазіторый у `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

І ўсталюйце ўсё асяроддзе адразу:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

На экране ўваходу выберыце сеанс **Lingmo**.
