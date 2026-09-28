## Tải về

Ảnh ISO là bản *live*: bạn có thể dùng thử mà không cần cài đặt và, nếu thích, cài đặt bằng biểu tượng
**Install System** trên màn hình nền (trình cài đặt Calamares).

1. Tải ISO ở phía trên.
2. Ghi vào USB bằng [balenaEtcher](https://etcher.balena.io), Ventoy hoặc `dd`.
3. Khởi động máy tính từ USB.

### Bạn đã dùng Arch Linux?

Thêm kho của chúng tôi vào `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Rồi cài toàn bộ môi trường desktop chỉ trong một lần:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Tại màn hình đăng nhập, chọn phiên **Lingmo**.
