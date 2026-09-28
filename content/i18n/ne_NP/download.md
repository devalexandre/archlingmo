## डाउनलोड

ISO इमेज *live* हो: इन्स्टल नगरी नै प्रयोग गरेर हेर्न सकिन्छ, र मन परे डेस्कटपमा रहेको
**Install System** आइकनबाट इन्स्टल गर्न सकिन्छ (Calamares इन्स्टलर)।

1. माथिको ISO डाउनलोड गर्नुहोस्।
2. [balenaEtcher](https://etcher.balena.io), Ventoy वा `dd` प्रयोग गरेर पेनड्राइभमा लेख्नुहोस्।
3. कम्प्युटरलाई पेनड्राइभबाट सुरु गर्नुहोस्।

### पहिल्यै Arch Linux प्रयोग गर्दै हुनुहुन्छ?

हाम्रो रिपोजिटरी `/etc/pacman.conf` मा थप्नुहोस्:

```ini
[archlingmo]
SigLevel = Optional TrustAll
Server = https://devalexandre.github.io/archlingmo-repo/$arch
```

अनि पूरै डेस्कटप एकैपटक इन्स्टल गर्नुहोस्:

```sh
sudo pacman -Sy lingmo-desktop
sudo systemctl enable sddm
```

लगइन स्क्रिनमा **Lingmo** सत्र छान्नुहोस्।
