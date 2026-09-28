## Transferir

A imagem ISO é *live*: pode experimentar sem instalar e, se gostar, instalar pelo ícone
**Install System** no ambiente de trabalho (instalador Calamares).

1. Transfira a ISO acima.
2. Grave-a numa pen USB com o [balenaEtcher](https://etcher.balena.io), o Ventoy ou `dd`.
3. Arranque o computador a partir da pen USB.

### Já usa Arch Linux?

Adicione o nosso repositório ao `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

E instale todo o ambiente de trabalho de uma vez:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

No ecrã de início de sessão, escolha a sessão **Lingmo**.
