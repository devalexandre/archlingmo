## Atsisiųsti

ISO atvaizdas yra *live*: galite išbandyti sistemą jos neįdiegę, o jei patiks, įdiegti paspaudę darbalaukyje piktogramą
**Install System** (Calamares diegimo programa).

1. Atsisiųskite ISO failą aukščiau.
2. Įrašykite jį į USB atmintuką su [balenaEtcher](https://etcher.balena.io), Ventoy arba `dd`.
3. Paleiskite kompiuterį iš atmintuko.

### Jau naudojate Arch Linux?

Pridėkite mūsų saugyklą į `/etc/pacman.conf`:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

Ir įdiekite visą darbalaukį iš karto:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

Prisijungimo ekrane pasirinkite seansą **Lingmo**.
