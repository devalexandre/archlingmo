## הורדה

קובץ ה-ISO הוא *live*: אפשר לנסות את המערכת בלי להתקין, ואם היא מוצאת חן בעיניכם, להתקין אותה דרך הסמל
**Install System** בשולחן העבודה (המתקין Calamares).

1. הורידו את קובץ ה-ISO שלמעלה.
2. צרבו אותו על דיסק און קי בעזרת [balenaEtcher](https://etcher.balena.io), ‏Ventoy או `dd`.
3. הפעילו את המחשב מהדיסק און קי.

### כבר משתמשים ב-Arch Linux?

הוסיפו את המאגר שלנו לקובץ `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

והתקינו את כל שולחן העבודה בבת אחת:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

במסך הכניסה, בחרו בהפעלה **Lingmo**.
