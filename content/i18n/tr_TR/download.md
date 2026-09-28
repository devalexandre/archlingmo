## İndir

ISO kalıbı *live*'dır: kurmadan deneyebilir, beğenirseniz masaüstündeki
**Install System** simgesiyle kurabilirsiniz (Calamares yükleyici).

1. Yukarıdaki ISO'yu indirin.
2. [balenaEtcher](https://etcher.balena.io), Ventoy ya da `dd` ile bir USB belleğe yazın.
3. Bilgisayarı USB bellekten başlatın.

### Zaten Arch Linux mu kullanıyorsunuz?

Depomuzu `/etc/pacman.conf` dosyasına ekleyin:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Ve masaüstünün tamamını tek seferde kurun:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Giriş ekranında **Lingmo** oturumunu seçin.
