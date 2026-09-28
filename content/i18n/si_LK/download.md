## බාගන්න

ISO රූපය *live* එකකි: ස්ථාපනය නොකර අත්හදා බැලිය හැකි අතර, කැමති නම් ඩෙස්ක්ටොපයේ ඇති
**Install System** අයිකනයෙන් ස්ථාපනය කළ හැක (Calamares ස්ථාපකය).

1. ඉහත ISO බාගන්න.
2. [balenaEtcher](https://etcher.balena.io), Ventoy හෝ `dd` භාවිතයෙන් එය USB පෙන් ඩ්‍රයිව් එකකට ලියන්න.
3. පෙන් ඩ්‍රයිව් එකෙන් පරිගණකය ආරම්භ කරන්න.

### දැනටමත් Arch Linux භාවිත කරනවාද?

අපගේ ගබඩාව `/etc/pacman.conf` වෙත එක් කරන්න:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

ඉන්පසු සම්පූර්ණ ඩෙස්ක්ටොපයම එකවර ස්ථාපනය කරන්න:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

පිවිසුම් තිරයේදී **Lingmo** සැසිය තෝරන්න.
