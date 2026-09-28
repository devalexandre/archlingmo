## Hoja de ruta

Lo que todavía vamos a construir. Lo que ya está listo aparece en [Funciones](#recursos).
Las fechas son una previsión y pueden cambiar. Las sugerencias y prioridades se debaten en nuestro
Discord, y cada elemento se convierte en una pull request abierta en GitHub.

Las prioridades salen de lo que más aparece en los foros y en los análisis de otras distros:
el miedo a que una actualización rompa el sistema, los controladores, instalar programas sin terminal y
cuidar el ordenador sin tener que ser un experto.

- [x] **Juegos nativos**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instala desde la tienda. Al abrir por primera vez, proporciona la ROM de tu propio cartucho; los paquetes no incluyen datos del juego.

### 28/09 – 08/11 · Programas sin complicaciones

- [ ] **Tienda de aplicaciones**: Flathub y los repositorios de Arch en un solo sitio, con valoraciones y capturas; paquetes de AUR solo con aviso
- [ ] **Abrir programas de Windows**: al hacer clic en un .exe, sugiere una alternativa para Linux o lo ejecuta con Bottles/Wine
- [ ] **Juegos en un clic**: Steam, Proton y modo juego, con aviso para los juegos cuyo antitrampas no funciona en Linux

### 09/11 – 13/12 · Cuidar el ordenador

- [ ] **Monitor del sistema** (Ctrl + Shift + Esc): procesador, memoria, disco, red y tarjeta gráfica, lista de aplicaciones y procesos y botón «Finalizar»
- [ ] **Limpieza**: cachés, papelera, paquetes que nadie usa, caché de actualizaciones y runtimes de Flatpak sin uso, mostrando el espacio liberado antes de confirmar
- [ ] **Mapa del disco**: qué está ocupando espacio y archivos grandes olvidados
- [ ] **Información del sistema** con un botón «Copiar informe» para pedir ayuda en Discord o en foros
- [ ] Desenfoque y fondo de la cámara con recorte de calidad (pelo, auriculares y hombros)

### 14/12 – 31/01/2027 · Actualizar sin miedo

- [ ] **Punto de restauración automático** antes de cada actualización (btrfs), con opción de volver atrás directamente desde el menú de arranque
- [ ] Botón **«Volver a ayer»** en Configuración y en el actualizador
- [ ] El actualizador muestra las noticias de Arch en un lenguaje sencillo y retiene las actualizaciones que requieren intervención manual
- [ ] **Gestor de controladores**: detecta la tarjeta gráfica (NVIDIA, AMD, Intel) e instala el controlador adecuado, manteniéndolo al día con el kernel

### 01/02 – 31/03/2027 · Hardware del día a día

- [ ] **Impresoras y escáneres** reconocidos automáticamente, con una pantalla sencilla para añadirlos
- [ ] **Auriculares Bluetooth**: elegir entre calidad de música y micrófono, volviendo a la calidad después de las llamadas
- [ ] **Batería**: límite de carga al 80 % para que dure más, perfiles de energía y salud de la batería
- [ ] Escalado fraccionario nítido (125 %, 150 %) en todas las aplicaciones, por monitor

### 01/04 – 31/05/2027 · Integración y aspecto

- [ ] **Cambiar la disposición** con un clic: estilo macOS, estilo Windows o Lingmo
- [ ] **Versiones anteriores** de los archivos en el gestor de archivos, como en Time Machine
- [ ] **Móvil integrado**: notificaciones, archivos y portapapeles con Android y iPhone (KDE Connect)
- [ ] **Cuentas en la nube**: Google Drive y OneDrive en el gestor de archivos
- [ ] Copiar el texto de una captura de pantalla (OCR)
- [ ] Instalador que avisa sobre BitLocker y Secure Boot al instalar junto a Windows

### A partir de junio de 2027

- [ ] Asistente de IA opcional y privado (modelo local): resumir, traducir y explicar el texto seleccionado
- [ ] Control parental: tiempo de uso y hora de dormir
- [ ] Sesión Wayland
- [ ] ISO generada y probada automáticamente en cada versión
- [ ] Office y Adobe con Windows integrado (WinBoat), para quien lo necesite
