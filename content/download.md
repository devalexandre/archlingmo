## Download

A imagem ISO é *live*: dá para experimentar sem instalar e, se gostar, instalar pelo ícone
**Install System** na área de trabalho (instalador Calamares).

1. Baixe a ISO acima.
2. Grave num pendrive com o [balenaEtcher](https://etcher.balena.io), o Ventoy ou `dd`.
3. Inicie o computador pelo pendrive.

### Já usa Arch Linux?

Adicione o nosso repositório ao `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

E instale o desktop inteiro de uma vez:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Na tela de login, escolha a sessão **Lingmo**.
