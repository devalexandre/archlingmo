# ArchLingmo — site

Página do ArchLingmo, publicada pelo GitHub Pages: https://devalexandre.github.io/archlingmo/

O texto vem dos arquivos em `content/` e é montado no navegador; não há build.

| Arquivo | Seção |
|---|---|
| `content/site.json` | nome, frase, versão, link, torrent e tamanho da ISO, SHA-256, Discord, GitHub |
| `content/intro.md` | Sobre |
| `content/download.md` | Download e instalação pelo repositório |
| `content/requisitos.md` | Requisitos mínimos |
| `content/screenshots.md` | Capturas de tela (imagens em `screenshots/`) |
| `content/videos.md` | Vídeos: cada link do YouTube numa lista vira um player |
| `content/roadmap.md` | Roadmap: marque `- [x]` quando um item for entregue |
| `content/comunidade.md` | Comunidade |

Enquanto `iso.url` ou `discord` estiverem vazios, os botões mostram "em breve".

Para ver localmente (o navegador não lê os `.md` abrindo o arquivo direto):

```sh
python -m http.server 8000
# http://localhost:8000
```
