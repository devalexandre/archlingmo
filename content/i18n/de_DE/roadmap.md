## Roadmap

Was wir noch bauen werden. Was bereits fertig ist, steht unter [Funktionen](#recursos).
Die Termine sind eine Schätzung und können sich ändern. Vorschläge und Prioritäten besprechen wir auf unserem
Discord, und jeder Punkt wird zu einem offenen Pull Request auf GitHub.

Die Prioritäten ergeben sich aus dem, was in Foren und Tests anderer Distributionen am häufigsten auftaucht:
die Angst, dass ein Update das System kaputt macht, Treiber, Programme ohne Terminal installieren und
den Computer pflegen, ohne technisch versiert sein zu müssen.

- [x] **Native Spiele**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Installation über den Store. Beim ersten Start wird die ROM des eigenen Moduls benötigt; die Pakete enthalten keine Spieldaten.

### 28/09 – 08/11 · Programme ohne Umstände

- [ ] **App Store**: Flathub und die Arch-Paketquellen an einem Ort, mit Bewertungen und Screenshots; AUR-Pakete nur mit Warnhinweis
- [ ] **Windows-Programme öffnen**: Beim Klick auf eine .exe wird eine Linux-Alternative vorgeschlagen oder das Programm mit Bottles/Wine gestartet
- [ ] **Spielen mit einem Klick**: Steam, Proton und Spielmodus, mit Hinweis auf Spiele, deren Anti-Cheat unter Linux nicht funktioniert

### 09/11 – 13/12 · Den Computer pflegen

- [ ] **Systemmonitor** (Ctrl + Shift + Esc): Prozessor, Arbeitsspeicher, Festplatte, Netzwerk und Grafikkarte, Liste der Apps und Prozesse und ein „Beenden“-Knopf
- [ ] **Aufräumen**: Caches, Papierkorb, ungenutzte Pakete, Update-Cache und ungenutzte Flatpak-Laufzeitumgebungen, mit Anzeige des frei werdenden Speichers vor dem Bestätigen
- [ ] **Speicherplatz-Übersicht**: was Platz belegt und vergessene große Dateien
- [ ] **Systeminformationen** mit einem Knopf „Bericht kopieren“, um auf Discord oder in Foren um Hilfe zu bitten
- [ ] Kamera-Weichzeichner und -Hintergrund mit sauberer Freistellung (Haare, Kopfhörer und Schultern)

### 14/12 – 31/01/2027 · Aktualisieren ohne Angst

- [ ] **Automatischer Wiederherstellungspunkt** vor jedem Update (btrfs), mit der Möglichkeit, direkt über das Bootmenü zurückzukehren
- [ ] Knopf **„Zurück zu gestern“** in den Einstellungen und in der Aktualisierung
- [ ] Die Aktualisierung zeigt die Arch-Neuigkeiten in einfacher Sprache und hält Updates zurück, die manuelles Eingreifen erfordern
- [ ] **Treiberverwaltung**: erkennt die Grafikkarte (NVIDIA, AMD, Intel), installiert den passenden Treiber und hält ihn mit dem Kernel aktuell

### 01/02 – 31/03/2027 · Hardware für den Alltag

- [ ] **Drucker und Scanner** werden automatisch erkannt, mit einer einfachen Oberfläche zum Hinzufügen
- [ ] **Bluetooth-Kopfhörer**: Wahl zwischen Musikqualität und Mikrofon, nach Anrufen zurück zur Qualität
- [ ] **Akku**: Ladebegrenzung auf 80 % für eine längere Lebensdauer, Energieprofile und Akkuzustand
- [ ] Scharfe gebrochene Skalierung (125 %, 150 %) in allen Apps, pro Bildschirm

### 01/04 – 31/05/2027 · Integration und Aussehen

- [ ] **Layout wechseln** mit einem Klick: macOS-Stil, Windows-Stil oder Lingmo
- [ ] **Frühere Versionen** von Dateien im Dateimanager, wie bei Time Machine
- [ ] **Smartphone-Anbindung**: Benachrichtigungen, Dateien und Zwischenablage mit Android und iPhone (KDE Connect)
- [ ] **Cloud-Konten**: Google Drive und OneDrive direkt im Dateimanager
- [ ] Text aus einem Screenshot kopieren (OCR)
- [ ] Installer, der bei der Installation neben Windows auf BitLocker und Secure Boot hinweist

### Ab Juni 2027

- [ ] Optionaler, privater KI-Assistent (lokales Modell): markierten Text zusammenfassen, übersetzen und erklären
- [ ] Jugendschutz: Bildschirmzeit und Schlafenszeit
- [ ] Wayland-Sitzung
- [ ] ISO, die bei jeder Version automatisch erstellt und getestet wird
- [ ] Office und Adobe mit integriertem Windows (WinBoat), für alle, die es brauchen
