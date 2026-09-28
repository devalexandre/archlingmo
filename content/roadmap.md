## Roadmap

O que ainda vamos construir. O que já está pronto fica em [Recursos](#recursos).
As datas são uma previsão e podem mudar. Sugestões e prioridades são discutidas no nosso
Discord, e cada item vira um pull request aberto no GitHub.

As prioridades vêm do que mais aparece nos fóruns e nas análises de outras distros:
medo de uma atualização quebrar o sistema, drivers, instalar programas sem terminal e
cuidar do computador sem precisar ser técnico.

### 28/09 a 08/11 · Programas sem complicação (e seguros)

- [ ] **Cliente de e-mail**: configuração fácil para diferentes provedores, com detecção automática e opção manual de SMTP e IMAP/POP3. Integração com a mesma conta Google (Gmail) usada na loja para baixar apps Android. Visual integrado ao ArchLingmo, com componentes LingmoUI, tipografia, cores, espaçamentos e temas claro/escuro consistentes com o sistema
- [ ] **Loja de aplicativos**: Flathub e repositórios do Arch num só lugar, com notas, fotos e as permissões de cada app antes de instalar
- [ ] **Instalar arrastando**, como no Mac: dois cliques num .exe, .deb, .rpm ou AppImage e arraste para **Aplicativos**
- [ ] **Tudo de fora roda numa caixa isolada**: programas do Windows (Bottles), pacotes .deb/.rpm (Distrobox) e AppImages não enxergam o seu sistema nem os seus arquivos sem permissão
- [ ] Página **Caixas** nas Configurações: ver, dar ou tirar acesso a arquivos, rede, câmera e microfone, e apagar uma caixa
- [ ] **Apps Android** (APK) numa caixa, com o Waydroid, aparecendo no lançador como qualquer app
- [ ] **Jogos em um clique**: Steam, Proton e modo jogo, com aviso para jogos com anti-cheat que não funcionam no Linux
- [x] **Jogos nativos**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instale pela Loja → Jogos nativos. Na primeira abertura, forneça a ROM extraída do seu próprio cartucho; os pacotes não incluem dados dos jogos.
- [ ] **Ampliar os jogos nativos**: Zelda: Ocarina of Time (Ship of Harkinian) e Mario Kart 64 (SpaghettiKart), ainda como "Em breve" na loja

### 09/11 a 13/12 · Cuidar do computador

- [ ] **Monitor do sistema** (Ctrl + Shift + Esc): processador, memória, disco, rede e placa de vídeo, lista de apps e processos e botão "Encerrar"
- [ ] **Limpeza**: caches, lixeira, pacotes que ninguém usa, cache de atualizações e runtimes Flatpak sem uso, com o espaço liberado antes de confirmar
- [ ] **Mapa do disco**: o que está ocupando espaço e arquivos grandes esquecidos
- [ ] **Informações do sistema** com um botão "Copiar relatório" para pedir ajuda no Discord ou em fóruns
- [ ] Desfoque e fundo da câmera com recorte de qualidade (cabelo, fone e ombros)

### 14/12 a 31/01/2027 · Atualizar sem medo

- [ ] **Ponto de restauração automático** antes de cada atualização (btrfs), com opção de voltar direto pelo menu de inicialização
- [ ] Botão **"Voltar para ontem"** nas Configurações e no atualizador
- [ ] O atualizador mostra as notícias do Arch em português simples e segura atualizações que pedem cuidado manual
- [ ] **Gerenciador de drivers**: detecta a placa de vídeo (NVIDIA, AMD, Intel) e instala o driver certo, mantendo-o em dia com o kernel

### 01/02 a 31/03/2027 · Hardware do dia a dia

- [ ] **Impressoras e scanners** reconhecidos sozinhos, com uma tela simples para adicionar
- [ ] **Fones Bluetooth**: escolher entre qualidade de música e microfone, voltando à qualidade depois das chamadas
- [ ] **Bateria**: limite de carga em 80% para durar mais, perfis de energia e saúde da bateria
- [ ] Escala fracionada nítida (125%, 150%) em todos os apps, por monitor

### 01/04 a 31/05/2027 · Integração e visual

- [ ] **Trocar o layout** com um clique: estilo macOS, estilo Windows ou Lingmo
- [ ] **Versões anteriores** dos arquivos no gerenciador de arquivos, como no Time Machine
- [ ] **Celular integrado**: notificações, arquivos e área de transferência com Android e iPhone (KDE Connect)
- [ ] **Contas na nuvem**: Google Drive e OneDrive aparecendo no gerenciador de arquivos
- [ ] Copiar o texto de uma captura de tela (OCR)
- [ ] Instalador que avisa sobre BitLocker e Secure Boot ao instalar ao lado do Windows

### A partir de junho de 2027

- [ ] Assistente de IA opcional e privado (modelo local): resumir, traduzir e explicar o texto selecionado
- [ ] Controle parental: tempo de uso e horário de dormir
- [ ] Sessão Wayland
- [ ] ISO gerada e testada automaticamente a cada versão
- [ ] Office e Adobe com Windows integrado (WinBoat), para quem precisar
