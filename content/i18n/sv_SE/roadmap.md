## Färdplan

Det vi fortfarande ska bygga. Det som redan är klart finns under [Funktioner](#recursos).
Datumen är en uppskattning och kan ändras. Förslag och prioriteringar diskuteras på vår
Discord, och varje punkt blir en öppen pull request på GitHub.

Prioriteringarna kommer från det som dyker upp oftast i forum och i recensioner av andra distributioner:
rädslan för att en uppdatering ska förstöra systemet, drivrutiner, att installera program utan terminal och
att sköta datorn utan att vara tekniskt kunnig.

### 28/09 – 08/11 · Program utan krångel

- [ ] **Appbutik**: Flathub och Archs förråd på ett ställe, med betyg och skärmbilder; AUR-paket bara med en varning
- [ ] **Öppna Windows-program**: när du klickar på en .exe föreslås ett Linux-alternativ, eller så körs den med Bottles/Wine
- [ ] **Spel med ett klick**: Steam, Proton och spelläge, med en varning för spel vars anti-fusk inte fungerar på Linux

### 09/11 – 13/12 · Ta hand om datorn

- [ ] **Systemövervakare** (Ctrl + Shift + Esc): processor, minne, disk, nätverk och grafikkort, lista över appar och processer och en ”Avsluta”-knapp
- [ ] **Rensning**: cacheminnen, papperskorg, oanvända paket, uppdateringscache och oanvända Flatpak-körmiljöer, med utrymmet som frigörs visat innan du bekräftar
- [ ] **Diskkarta**: vad som tar upp plats och stora bortglömda filer
- [ ] **Systeminformation** med en ”Kopiera rapport”-knapp för att be om hjälp på Discord eller i forum
- [ ] Oskärpa och bakgrund för kameran med snygg utskärning (hår, hörlurar och axlar)

### 14/12 – 31/01/2027 · Uppdatera utan oro

- [ ] **Automatisk återställningspunkt** före varje uppdatering (btrfs), med möjlighet att gå tillbaka direkt från startmenyn
- [ ] Knappen **”Tillbaka till igår”** i Inställningar och i uppdateraren
- [ ] Uppdateraren visar nyheter från Arch på ett enkelt språk och håller tillbaka uppdateringar som kräver manuell hantering
- [ ] **Drivrutinshanterare**: känner igen grafikkortet (NVIDIA, AMD, Intel) och installerar rätt drivrutin, och håller den i takt med kärnan

### 01/02 – 31/03/2027 · Vardagens hårdvara

- [ ] **Skrivare och skannrar** känns igen automatiskt, med en enkel vy för att lägga till dem
- [ ] **Bluetooth-hörlurar**: välj mellan musikkvalitet och mikrofon, med återgång till kvalitet efter samtal
- [ ] **Batteri**: laddningsgräns på 80 % för längre livslängd, energiprofiler och batterihälsa
- [ ] Skarp bråkskalning (125 %, 150 %) i alla appar, per skärm

### 01/04 – 31/05/2027 · Integration och utseende

- [ ] **Byt layout** med ett klick: macOS-stil, Windows-stil eller Lingmo
- [ ] **Tidigare versioner** av filer i filhanteraren, som i Time Machine
- [ ] **Integrerad mobil**: aviseringar, filer och urklipp med Android och iPhone (KDE Connect)
- [ ] **Molnkonton**: Google Drive och OneDrive direkt i filhanteraren
- [ ] Kopiera texten från en skärmbild (OCR)
- [ ] Installationsprogram som varnar för BitLocker och Secure Boot vid installation bredvid Windows

### Från juni 2027

- [ ] Valfri och privat AI-assistent (lokal modell): sammanfatta, översätta och förklara markerad text
- [ ] Föräldrakontroll: skärmtid och läggdags
- [ ] Wayland-session
- [ ] ISO som byggs och testas automatiskt för varje version
- [ ] Office och Adobe med integrerat Windows (WinBoat) för den som behöver det
