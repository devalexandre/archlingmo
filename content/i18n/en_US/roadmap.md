## Roadmap

What we are still going to build. What is already done is listed under [Features](#recursos).
Dates are estimates and may change. Suggestions and priorities are discussed on our
Discord, and every item becomes an open pull request on GitHub.

Priorities come from what shows up most in forums and in reviews of other distros:
fear of an update breaking the system, drivers, installing apps without a terminal and
looking after your computer without being a tech person.

- [x] **Native games**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Install from Store → Native games. On first launch, provide a ROM dumped from your own cartridge; packages include no game data.

### 28/09 – 08/11 · Apps without the hassle

- [ ] **Email client**: easy setup for different providers, with automatic detection and manual SMTP and IMAP/POP3 settings. Integration with the same Google (Gmail) account used in the store to download Android apps. Match the ArchLingmo visual design with LingmoUI components, typography, colors, spacing, and light/dark themes consistent with the desktop
- [ ] **App store**: Flathub and the Arch repositories in one place, with ratings and screenshots; AUR packages only with a warning
- [ ] **Open Windows programs**: clicking an .exe suggests a Linux alternative or runs it with Bottles/Wine
- [ ] **One-click gaming**: Steam, Proton and game mode, with a warning for games whose anti-cheat does not work on Linux

### 09/11 – 13/12 · Looking after your computer

- [ ] **System monitor** (Ctrl + Shift + Esc): processor, memory, disk, network and graphics card, a list of apps and processes, and an "End task" button
- [ ] **Cleanup**: caches, trash, unused packages, update cache and unused Flatpak runtimes, showing the space freed before you confirm
- [ ] **Disk map**: what is taking up space and big forgotten files
- [ ] **System information** with a "Copy report" button to ask for help on Discord or in forums
- [ ] Camera blur and background with high-quality cutout (hair, headphones and shoulders)

### 14/12 – 31/01/2027 · Update without fear

- [ ] **Automatic restore point** before every update (btrfs), with the option to roll back straight from the boot menu
- [ ] **"Go back to yesterday"** button in Settings and in the updater
- [ ] The updater shows Arch news in plain language and holds back updates that need manual care
- [ ] **Driver manager**: detects the graphics card (NVIDIA, AMD, Intel) and installs the right driver, keeping it in sync with the kernel

### 01/02 – 31/03/2027 · Everyday hardware

- [ ] **Printers and scanners** detected automatically, with a simple screen to add them
- [ ] **Bluetooth headphones**: choose between music quality and microphone, switching back to quality after calls
- [ ] **Battery**: 80% charge limit so it lasts longer, power profiles and battery health
- [ ] Sharp fractional scaling (125%, 150%) in every app, per monitor

### 01/04 – 31/05/2027 · Integration and look

- [ ] **Switch the layout** in one click: macOS style, Windows style or Lingmo
- [ ] **Previous versions** of files in the file manager, like Time Machine
- [ ] **Phone integration**: notifications, files and clipboard with Android and iPhone (KDE Connect)
- [ ] **Cloud accounts**: Google Drive and OneDrive showing up in the file manager
- [ ] Copy the text from a screenshot (OCR)
- [ ] Installer that warns about BitLocker and Secure Boot when installing alongside Windows

### From June 2027

- [ ] Optional, private AI assistant (local model): summarize, translate and explain the selected text
- [ ] Parental controls: screen time and bedtime
- [ ] Wayland session
- [ ] ISO built and tested automatically for every release
- [ ] Office and Adobe with integrated Windows (WinBoat), for those who need it
