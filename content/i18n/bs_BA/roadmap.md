## Plan razvoja

Ono što tek trebamo napraviti. Ono što je već gotovo nalazi se u odjeljku [Mogućnosti](#recursos).
Datumi su procjena i mogu se promijeniti. Prijedlozi i prioriteti razgovaraju se na našem
Discordu, a svaka stavka postaje otvoreni pull request na GitHubu.

Prioriteti proizlaze iz onoga što se najčešće spominje na forumima i u recenzijama drugih distribucija:
strah da će ažuriranje pokvariti sistem, drajveri, instaliranje programa bez terminala i
održavanje računara bez potrebe da budete stručnjak.

- [x] **Nativne igre**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instalirajte iz prodavnice. Pri prvom pokretanju priložite ROM vlastitog kertridža; paketi ne sadrže podatke igara.

### 28.09. do 08.11. · Programi bez komplikacija

- [ ] **Prodavnica aplikacija**: Flathub i Arch repozitoriji na jednom mjestu, s ocjenama i snimcima ekrana; AUR paketi samo uz upozorenje
- [ ] **Otvaranje Windows programa**: klikom na .exe predlaže se alternativa za Linux ili se program pokreće pomoću Bottles/Wine
- [ ] **Igre jednim klikom**: Steam, Proton i režim za igre, s upozorenjem za igre sa anti-cheat zaštitom koje ne rade na Linuxu

### 09.11. do 13.12. · Briga o računaru

- [ ] **Monitor sistema** (Ctrl + Shift + Esc): procesor, memorija, disk, mreža i grafička kartica, lista aplikacija i procesa i dugme "Završi"
- [ ] **Čišćenje**: keš, korpa za smeće, paketi koje niko ne koristi, keš ažuriranja i nekorišteni Flatpak runtime-ovi, uz prikaz oslobođenog prostora prije potvrde
- [ ] **Mapa diska**: šta zauzima prostor i zaboravljeni veliki fajlovi
- [ ] **Informacije o sistemu** s dugmetom "Kopiraj izvještaj" za traženje pomoći na Discordu ili forumima
- [ ] Zamućenje i pozadina kamere s kvalitetnim izrezivanjem (kosa, slušalice i ramena)

### 14.12. do 31.01.2027. · Ažuriranje bez straha

- [ ] **Automatska tačka vraćanja** prije svakog ažuriranja (btrfs), s mogućnošću povratka direktno iz menija za pokretanje
- [ ] Dugme **"Vrati na jučer"** u Postavkama i u programu za ažuriranje
- [ ] Program za ažuriranje prikazuje Arch vijesti jednostavnim jezikom i zadržava ažuriranja koja zahtijevaju ručnu intervenciju
- [ ] **Upravitelj drajvera**: prepoznaje grafičku karticu (NVIDIA, AMD, Intel) i instalira pravi drajver, održavajući ga usklađenim s kernelom

### 01.02. do 31.03.2027. · Svakodnevni hardver

- [ ] **Štampači i skeneri** prepoznati automatski, s jednostavnim ekranom za dodavanje
- [ ] **Bluetooth slušalice**: izbor između kvaliteta muzike i mikrofona, s povratkom na kvalitet muzike nakon poziva
- [ ] **Baterija**: ograničenje punjenja na 80% za duži vijek, profili napajanja i stanje baterije
- [ ] Oštro frakcijsko skaliranje (125%, 150%) u svim aplikacijama, po monitoru

### 01.04. do 31.05.2027. · Integracija i izgled

- [ ] **Promjena rasporeda** jednim klikom: stil macOS, stil Windows ili Lingmo
- [ ] **Prethodne verzije** fajlova u upravitelju fajlova, kao u Time Machine
- [ ] **Integrisan telefon**: obavještenja, fajlovi i međuspremnik s Androidom i iPhoneom (KDE Connect)
- [ ] **Računi u oblaku**: Google Drive i OneDrive vidljivi u upravitelju fajlova
- [ ] Kopiranje teksta sa snimka ekrana (OCR)
- [ ] Instalacijski program koji upozorava na BitLocker i Secure Boot pri instalaciji pored Windowsa

### Od juna 2027.

- [ ] Opcionalni i privatni AI asistent (lokalni model): sažimanje, prevođenje i objašnjavanje odabranog teksta
- [ ] Roditeljski nadzor: vrijeme korištenja i vrijeme za spavanje
- [ ] Wayland sesija
- [ ] ISO automatski generisan i testiran za svaku verziju
- [ ] Office i Adobe uz integrisani Windows (WinBoat), za one kojima treba
