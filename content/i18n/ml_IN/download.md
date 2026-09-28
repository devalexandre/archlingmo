## ഡൗൺലോഡ്

ISO ഇമേജ് ഒരു *live* സിസ്റ്റമാണ്: ഇൻസ്റ്റാൾ ചെയ്യാതെ തന്നെ പരീക്ഷിക്കാം, ഇഷ്ടപ്പെട്ടാൽ ഡെസ്ക്ടോപ്പിലെ
**Install System** ഐക്കൺ വഴി ഇൻസ്റ്റാൾ ചെയ്യാം (Calamares ഇൻസ്റ്റാളർ).

1. മുകളിലുള്ള ISO ഡൗൺലോഡ് ചെയ്യുക.
2. [balenaEtcher](https://etcher.balena.io), Ventoy, അല്ലെങ്കിൽ `dd` ഉപയോഗിച്ച് ഒരു USB ഡ്രൈവിലേക്ക് എഴുതുക.
3. USB ഡ്രൈവിൽ നിന്ന് കമ്പ്യൂട്ടർ ബൂട്ട് ചെയ്യുക.

### ഇതിനകം Arch Linux ഉപയോഗിക്കുന്നുണ്ടോ?

ഞങ്ങളുടെ റിപ്പോസിറ്ററി `/etc/pacman.conf`-ൽ ചേർക്കുക:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

എന്നിട്ട് ഡെസ്ക്ടോപ്പ് മുഴുവനും ഒറ്റയടിക്ക് ഇൻസ്റ്റാൾ ചെയ്യുക:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

ലോഗിൻ സ്ക്രീനിൽ **Lingmo** സെഷൻ തിരഞ്ഞെടുക്കുക.
