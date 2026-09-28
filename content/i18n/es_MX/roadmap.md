## Hoja de ruta

Lo que todavía vamos a construir. Lo que ya está listo aparece en [Funciones](#recursos).
Las fechas son una estimación y pueden cambiar. Las sugerencias y prioridades se platican en nuestro
Discord, y cada punto se convierte en un pull request abierto en GitHub.

Las prioridades salen de lo que más se menciona en los foros y en las reseñas de otras distros:
el miedo a que una actualización rompa el sistema, los drivers, instalar programas sin terminal y
cuidar la computadora sin necesidad de ser experto.

- [x] **Juegos nativos**: Zelda: Majora’s Mask (Zelda64Recomp / 2 Ship 2 Harkinian), Super Mario 64 (Ghostship), Star Fox 64 (Starship), Banjo-Kazooie (Banjo: Recompiled). Instala desde la tienda. Al abrir por primera vez, proporciona la ROM de tu propio cartucho; los paquetes no incluyen datos del juego.

### 28/09 al 08/11 · Programas sin complicaciones

- [ ] **Tienda de aplicaciones**: Flathub y los repositorios de Arch en un solo lugar, con calificaciones y capturas; paquetes de AUR solo con advertencia
- [ ] **Abrir programas de Windows**: al hacer clic en un .exe, sugiere una alternativa para Linux o lo ejecuta con Bottles/Wine
- [ ] **Juegos en un clic**: Steam, Proton y modo juego, con aviso para juegos con anti-cheat que no funcionan en Linux

### 09/11 al 13/12 · Cuidar la computadora

- [ ] **Monitor del sistema** (Ctrl + Shift + Esc): procesador, memoria, disco, red y tarjeta de video, lista de apps y procesos y botón "Finalizar"
- [ ] **Limpieza**: cachés, papelera, paquetes que nadie usa, caché de actualizaciones y runtimes de Flatpak sin uso, mostrando el espacio liberado antes de confirmar
- [ ] **Mapa del disco**: qué está ocupando espacio y archivos grandes olvidados
- [ ] **Información del sistema** con un botón "Copiar reporte" para pedir ayuda en Discord o en foros
- [ ] Desenfoque y fondo de cámara con recorte de calidad (cabello, audífonos y hombros)

### 14/12 al 31/01/2027 · Actualizar sin miedo

- [ ] **Punto de restauración automático** antes de cada actualización (btrfs), con opción de regresar directo desde el menú de arranque
- [ ] Botón **"Volver a ayer"** en Configuración y en el actualizador
- [ ] El actualizador muestra las noticias de Arch en lenguaje sencillo y detiene las actualizaciones que requieren intervención manual
- [ ] **Administrador de drivers**: detecta la tarjeta de video (NVIDIA, AMD, Intel) e instala el driver correcto, manteniéndolo al día con el kernel

### 01/02 al 31/03/2027 · Hardware de todos los días

- [ ] **Impresoras y escáneres** reconocidos automáticamente, con una pantalla sencilla para agregarlos
- [ ] **Audífonos Bluetooth**: elegir entre calidad de música o micrófono, regresando a la calidad de música después de las llamadas
- [ ] **Batería**: límite de carga al 80% para que dure más, perfiles de energía y salud de la batería
- [ ] Escalado fraccionario nítido (125%, 150%) en todas las apps, por monitor

### 01/04 al 31/05/2027 · Integración y apariencia

- [ ] **Cambiar el diseño** con un clic: estilo macOS, estilo Windows o Lingmo
- [ ] **Versiones anteriores** de los archivos en el administrador de archivos, como en Time Machine
- [ ] **Celular integrado**: notificaciones, archivos y portapapeles con Android y iPhone (KDE Connect)
- [ ] **Cuentas en la nube**: Google Drive y OneDrive dentro del administrador de archivos
- [ ] Copiar el texto de una captura de pantalla (OCR)
- [ ] Instalador que avisa sobre BitLocker y Secure Boot al instalar junto a Windows

### A partir de junio de 2027

- [ ] Asistente de IA opcional y privado (modelo local): resumir, traducir y explicar el texto seleccionado
- [ ] Control parental: tiempo de uso y hora de dormir
- [ ] Sesión Wayland
- [ ] ISO generada y probada automáticamente en cada versión
- [ ] Office y Adobe con Windows integrado (WinBoat), para quien lo necesite
