## 下载

ISO 镜像支持 *live* 模式：无需安装即可试用，满意的话，点击桌面上的
**Install System** 图标即可安装（Calamares 安装程序）。

1. 下载上方的 ISO。
2. 使用 [balenaEtcher](https://etcher.balena.io)、Ventoy 或 `dd` 将其写入 U 盘。
3. 从 U 盘启动电脑。

### 已经在用 Arch Linux？

将我们的软件仓库添加到 `/etc/pacman.conf`：

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

然后一次性安装整个桌面：

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

在登录界面选择 **Lingmo** 会话。
