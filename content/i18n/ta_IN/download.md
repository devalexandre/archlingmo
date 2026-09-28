## பதிவிறக்கம்

ISO படிமம் *live* வகை: நிறுவாமலேயே முயன்று பார்க்கலாம்; பிடித்திருந்தால் டெஸ்க்டாப்பில் உள்ள
**Install System** ஐகான் மூலம் நிறுவலாம் (Calamares நிறுவி).

1. மேலே உள்ள ISO-வைப் பதிவிறக்குங்கள்.
2. [balenaEtcher](https://etcher.balena.io), Ventoy அல்லது `dd` மூலம் அதை ஒரு USB டிரைவில் எழுதுங்கள்.
3. கணினியை USB டிரைவிலிருந்து தொடங்குங்கள்.

### ஏற்கனவே Arch Linux பயன்படுத்துகிறீர்களா?

எங்கள் களஞ்சியத்தை `/etc/pacman.conf` இல் சேர்க்கவும்:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

பின்னர் முழு டெஸ்க்டாப்பையும் ஒரே முறையில் நிறுவுங்கள்:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

உள்நுழைவுத் திரையில் **Lingmo** அமர்வைத் தேர்ந்தெடுங்கள்.
