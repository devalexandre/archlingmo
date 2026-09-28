## ダウンロード

ISO イメージは *ライブ* 起動に対応しています。インストールせずに試すことができ、気に入ったらデスクトップの
**Install System** アイコンからインストールできます（Calamares インストーラー）。

1. 上のボタンから ISO をダウンロードします。
2. [balenaEtcher](https://etcher.balena.io)、Ventoy、または `dd` で USB メモリに書き込みます。
3. USB メモリからパソコンを起動します。

### すでに Arch Linux をお使いですか？

`/etc/pacman.conf` に私たちのリポジトリを追加してください：

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

そしてデスクトップ一式をまとめてインストールします：

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

ログイン画面でセッション **Lingmo** を選択してください。
