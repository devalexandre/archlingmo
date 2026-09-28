## 下載

ISO 映像檔是 *live* 版本：毋須安裝即可試用；如果喜歡，可透過桌面上的
**Install System** 圖示安裝（Calamares 安裝程式）。

1. 下載上方的 ISO。
2. 以 [balenaEtcher](https://etcher.balena.io)、Ventoy 或 `dd` 寫入 USB 手指。
3. 用 USB 手指啟動電腦。

### 已經在用 Arch Linux？

將我們的軟件庫加入 `/etc/pacman.conf`：

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

然後一次過安裝整個桌面：

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

在登入畫面選擇 **Lingmo** 工作階段。
