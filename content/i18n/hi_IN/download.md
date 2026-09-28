## डाउनलोड

ISO इमेज *live* है: आप इसे बिना इंस्टॉल किए आज़मा सकते हैं, और पसंद आए तो डेस्कटॉप पर मौजूद
**Install System** आइकन से इंस्टॉल कर सकते हैं (Calamares इंस्टॉलर)।

1. ऊपर से ISO डाउनलोड करें।
2. इसे [balenaEtcher](https://etcher.balena.io), Ventoy या `dd` से पेन ड्राइव पर लिखें।
3. कंप्यूटर को पेन ड्राइव से बूट करें।

### पहले से Arch Linux इस्तेमाल करते हैं?

हमारी रिपॉज़िटरी को `/etc/pacman.conf` में जोड़ें:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

और पूरा डेस्कटॉप एक साथ इंस्टॉल करें:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

लॉगिन स्क्रीन पर **Lingmo** सेशन चुनें।
