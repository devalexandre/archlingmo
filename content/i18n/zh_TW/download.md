## 下載

ISO 映像檔是 *Live* 版：不必安裝就能試用，喜歡的話，再點選桌面上的
**Install System** 圖示安裝（Calamares 安裝程式）。

1. 下載上方的 ISO。
2. 使用 [balenaEtcher](https://etcher.balena.io)、Ventoy 或 `dd` 寫入 USB 隨身碟。
3. 從 USB 隨身碟開機。

### 已經在用 Arch Linux？

將我們的軟體庫加入 `/etc/pacman.conf`：

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

然後一次安裝整個桌面：

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

在登入畫面選擇 **Lingmo** 工作階段。
