## Roadmap

Quello che dobbiamo ancora costruire. Ciò che è già pronto si trova in [Funzionalità](#recursos).
Le date sono una previsione e possono cambiare. Suggerimenti e priorità si discutono sul nostro
Discord, e ogni punto diventa una pull request aperta su GitHub.

Le priorità nascono da ciò che emerge più spesso nei forum e nelle recensioni di altre distro:
la paura che un aggiornamento rompa il sistema, i driver, installare programmi senza terminale e
prendersi cura del computer senza dover essere esperti.

- [x] **Giochi nativi**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Installa dallo store. Al primo avvio, fornisci la ROM della tua cartuccia; i pacchetti non includono dati di gioco.

### Dal 28/09 all'08/11 · Programmi senza complicazioni

- [ ] **Negozio di applicazioni**: Flathub e i repository di Arch in un unico posto, con valutazioni e screenshot; pacchetti AUR solo con avviso
- [ ] **Aprire programmi Windows**: facendo clic su un .exe, suggerisce un'alternativa per Linux o lo avvia con Bottles/Wine
- [ ] **Giochi con un clic**: Steam, Proton e modalità gioco, con avviso per i giochi con anti-cheat che non funzionano su Linux

### Dal 09/11 al 13/12 · Prendersi cura del computer

- [ ] **Monitor di sistema** (Ctrl + Shift + Esc): processore, memoria, disco, rete e scheda video, elenco di app e processi e pulsante "Termina"
- [ ] **Pulizia**: cache, cestino, pacchetti inutilizzati, cache degli aggiornamenti e runtime Flatpak non usati, con lo spazio liberato mostrato prima di confermare
- [ ] **Mappa del disco**: cosa occupa spazio e file grandi dimenticati
- [ ] **Informazioni di sistema** con un pulsante "Copia rapporto" per chiedere aiuto su Discord o nei forum
- [ ] Sfocatura e sfondo della webcam con scontorno di qualità (capelli, cuffie e spalle)

### Dal 14/12 al 31/01/2027 · Aggiornare senza paura

- [ ] **Punto di ripristino automatico** prima di ogni aggiornamento (btrfs), con la possibilità di tornare indietro direttamente dal menu di avvio
- [ ] Pulsante **"Torna a ieri"** nelle Impostazioni e nel programma di aggiornamento
- [ ] Il programma di aggiornamento mostra le notizie di Arch in linguaggio semplice e blocca gli aggiornamenti che richiedono un intervento manuale
- [ ] **Gestore dei driver**: rileva la scheda video (NVIDIA, AMD, Intel) e installa il driver giusto, mantenendolo aggiornato con il kernel

### Dal 01/02 al 31/03/2027 · Hardware di tutti i giorni

- [ ] **Stampanti e scanner** riconosciuti automaticamente, con una schermata semplice per aggiungerli
- [ ] **Cuffie Bluetooth**: scegliere tra qualità musicale e microfono, tornando alla qualità musicale dopo le chiamate
- [ ] **Batteria**: limite di carica all'80% per farla durare di più, profili energetici e stato di salute della batteria
- [ ] Scalatura frazionaria nitida (125%, 150%) in tutte le app, per ogni monitor

### Dal 01/04 al 31/05/2027 · Integrazione e aspetto

- [ ] **Cambiare layout** con un clic: stile macOS, stile Windows o Lingmo
- [ ] **Versioni precedenti** dei file nel gestore di file, come in Time Machine
- [ ] **Telefono integrato**: notifiche, file e appunti con Android e iPhone (KDE Connect)
- [ ] **Account cloud**: Google Drive e OneDrive direttamente nel gestore di file
- [ ] Copiare il testo da uno screenshot (OCR)
- [ ] Programma di installazione che avvisa di BitLocker e Secure Boot quando si installa accanto a Windows

### Da giugno 2027

- [ ] Assistente IA opzionale e privato (modello locale): riassumere, tradurre e spiegare il testo selezionato
- [ ] Controllo parentale: tempo di utilizzo e orario per andare a dormire
- [ ] Sessione Wayland
- [ ] ISO generata e testata automaticamente a ogni versione
- [ ] Office e Adobe con Windows integrato (WinBoat), per chi ne ha bisogno
