## Unduh

Image ISO ini bersifat *live*: Anda bisa mencobanya tanpa memasang dan, jika suka, memasangnya lewat ikon
**Install System** di desktop (pemasang Calamares).

1. Unduh ISO di atas.
2. Tulis ke flashdisk dengan [balenaEtcher](https://etcher.balena.io), Ventoy, atau `dd`.
3. Nyalakan komputer dari flashdisk.

### Sudah memakai Arch Linux?

Tambahkan repositori kami ke `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Lalu pasang seluruh desktop sekaligus:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Di layar masuk, pilih sesi **Lingmo**.
