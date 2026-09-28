## Tiekartta

Mitä olemme vielä rakentamassa. Valmiit asiat löytyvät kohdasta [Ominaisuudet](#recursos).
Päivämäärät ovat arvioita ja voivat muuttua. Ehdotuksista ja prioriteeteista keskustellaan
Discordissamme, ja jokaisesta kohdasta tulee avoin pull request GitHubiin.

Prioriteetit perustuvat siihen, mikä nousee useimmin esiin foorumeilla ja muiden distrojen arvosteluissa:
pelko siitä, että päivitys rikkoo järjestelmän, ajurit, ohjelmien asentaminen ilman päätettä ja
tietokoneen ylläpito ilman teknistä osaamista.

### 28.09.–08.11. · Ohjelmat ilman vaivaa

- [ ] **Sovelluskauppa**: Flathub ja Archin ohjelmalähteet yhdessä paikassa arvioineen ja kuvakaappauksineen; AUR-paketit vain varoituksen kanssa
- [ ] **Windows-ohjelmien avaaminen**: .exe-tiedostoa napsautettaessa ehdotetaan Linux-vaihtoehtoa tai ohjelma ajetaan Bottlesilla/Winellä
- [ ] **Pelit yhdellä napsautuksella**: Steam, Proton ja pelitila sekä varoitus peleistä, joiden huijauksenesto ei toimi Linuxissa

### 09.11.–13.12. · Tietokoneen ylläpito

- [ ] **Järjestelmänvalvonta** (Ctrl + Shift + Esc): suoritin, muisti, levy, verkko ja näytönohjain, sovellus- ja prosessilista sekä "Lopeta"-painike
- [ ] **Siivous**: välimuistit, roskakori, käyttämättömät paketit, päivitysvälimuisti ja käyttämättömät Flatpak-ajoympäristöt, vapautuva tila näytetään ennen vahvistusta
- [ ] **Levykartta**: mikä vie tilaa ja unohtuneet suuret tiedostot
- [ ] **Järjestelmätiedot** ja "Kopioi raportti" -painike avun pyytämiseen Discordissa tai foorumeilla
- [ ] Kameran taustan sumennus ja vaihto laadukkaalla rajauksella (hiukset, kuulokkeet ja olkapäät)

### 14.12.–31.01.2027 · Päivitä huoletta

- [ ] **Automaattinen palautuspiste** ennen jokaista päivitystä (btrfs), ja paluu onnistuu suoraan käynnistysvalikosta
- [ ] **"Palaa eiliseen"** -painike Asetuksissa ja päivitysohjelmassa
- [ ] Päivitysohjelma näyttää Archin uutiset selkokielellä ja pysäyttää päivitykset, jotka vaativat käsin tehtäviä toimia
- [ ] **Ajurien hallinta**: tunnistaa näytönohjaimen (NVIDIA, AMD, Intel) ja asentaa oikean ajurin sekä pitää sen ajan tasalla kernelin kanssa

### 01.02.–31.03.2027 · Arjen laitteet

- [ ] **Tulostimet ja skannerit** tunnistetaan automaattisesti, ja lisäämiseen on selkeä näkymä
- [ ] **Bluetooth-kuulokkeet**: valitse musiikin äänenlaadun tai mikrofonin välillä, ja laatu palaa ennalleen puhelun jälkeen
- [ ] **Akku**: latausraja 80 %:iin pidemmän käyttöiän vuoksi, virrankäyttöprofiilit ja akun kunto
- [ ] Terävä murto-osaskaalaus (125 %, 150 %) kaikissa sovelluksissa, näyttökohtaisesti

### 01.04.–31.05.2027 · Integraatio ja ulkoasu

- [ ] **Vaihda asettelua** yhdellä napsautuksella: macOS-tyyli, Windows-tyyli tai Lingmo
- [ ] Tiedostojen **aiemmat versiot** tiedostonhallinnassa, kuten Time Machinessa
- [ ] **Puhelinintegraatio**: ilmoitukset, tiedostot ja leikepöytä Androidin ja iPhonen kanssa (KDE Connect)
- [ ] **Pilvitilit**: Google Drive ja OneDrive näkyvät tiedostonhallinnassa
- [ ] Tekstin kopioiminen kuvakaappauksesta (OCR)
- [ ] Asennusohjelma, joka varoittaa BitLockerista ja Secure Bootista asennettaessa Windowsin rinnalle

### Kesäkuusta 2027 alkaen

- [ ] Valinnainen ja yksityinen tekoälyavustaja (paikallinen malli): valitun tekstin tiivistäminen, kääntäminen ja selittäminen
- [ ] Lapsilukko: käyttöaika ja nukkumaanmenoaika
- [ ] Wayland-istunto
- [ ] ISO luodaan ja testataan automaattisesti jokaiselle versiolle
- [ ] Office ja Adobe integroidun Windowsin avulla (WinBoat) niitä tarvitseville
