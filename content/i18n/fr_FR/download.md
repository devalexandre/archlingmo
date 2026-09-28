## Téléchargement

L’image ISO est *live* : vous pouvez l’essayer sans l’installer et, si elle vous plaît, l’installer depuis l’icône
**Install System** sur le bureau (installateur Calamares).

1. Téléchargez l’ISO ci-dessus.
2. Copiez-la sur une clé USB avec [balenaEtcher](https://etcher.balena.io), Ventoy ou `dd`.
3. Démarrez l’ordinateur sur la clé USB.

### Vous utilisez déjà Arch Linux ?

Ajoutez notre dépôt à `/etc/pacman.conf` :

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Puis installez tout le bureau d’un coup :

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Sur l’écran de connexion, choisissez la session **Lingmo**.
