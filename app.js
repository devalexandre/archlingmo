// Fills the page from content/site.json and the Markdown files in content/.
// Edit those files to change the text; no build step needed.

async function loadConfig() {
  try {
    const response = await fetch("content/site.json", { cache: "no-cache" });
    return response.ok ? await response.json() : {};
  } catch {
    return {};
  }
}

function setLink(id, url, soonLabel) {
  const link = document.getElementById(id);
  if (url) {
    link.href = url;
    link.target = "_blank";
    link.rel = "noopener";
  } else {
    // Not published yet: keep the button, say so
    link.removeAttribute("href");
    link.classList.add("soon");
    link.textContent = soonLabel;
  }
}

function applyConfig(config) {
  if (config.name) {
    document.getElementById("site-name").textContent = config.name;
    document.title = config.name;
  }
  if (config.tagline)
    document.getElementById("site-tagline").textContent = config.tagline;

  const iso = config.iso || {};
  setLink("download-button", iso.url, "ISO em breve");
  setLink("discord-button", config.discord, "Discord em breve");
  if (config.github)
    setLink("github-button", config.github, "GitHub");

  const meta = [config.version && `Versão ${config.version}`, iso.size, "x86-64"].filter(Boolean);
  document.getElementById("iso-meta").textContent = meta.join(" · ");
  if (iso.torrent) {
    const torrent = document.createElement("a");
    torrent.href = iso.torrent;
    torrent.textContent = "Torrent";
    document.getElementById("iso-meta").append(" · ", torrent);
  }
  if (iso.sha256) {
    const sum = document.createElement("code");
    sum.textContent = `SHA-256 ${iso.sha256}`;
    document.getElementById("iso-meta").append(document.createElement("br"), sum);
  }
}

// YouTube links in videos.md become embedded players
function youtubeId(url) {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([\w-]{11})/);
  return match ? match[1] : null;
}

function enhanceVideos(section) {
  const links = [...section.querySelectorAll("a")].filter(a => youtubeId(a.href));
  if (!links.length) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Os vídeos chegam em breve.";
    section.append(empty);
    return;
  }
  const grid = document.createElement("div");
  grid.className = "video-grid";
  for (const link of links) {
    const figure = document.createElement("figure");
    const frame = document.createElement("iframe");
    frame.src = `https://www.youtube-nocookie.com/embed/${youtubeId(link.href)}`;
    frame.title = link.textContent;
    frame.loading = "lazy";
    frame.allow = "accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen";
    frame.allowFullscreen = true;
    const caption = document.createElement("figcaption");
    caption.textContent = link.textContent;
    figure.append(frame, caption);
    grid.append(figure);
  }
  // The list the links came from is replaced by the players
  links[0].closest("ul, ol, p")?.replaceWith(grid);
}

// Images in screenshots.md become a grid that opens full size on click
function enhanceGallery(section) {
  const images = [...section.querySelectorAll("img")];
  if (!images.length)
    return;
  const grid = document.createElement("div");
  grid.className = "gallery-grid";
  const lightbox = document.getElementById("lightbox");
  for (const image of images) {
    const figure = document.createElement("figure");
    image.loading = "lazy";
    const caption = document.createElement("figcaption");
    caption.textContent = image.alt;
    figure.append(image.cloneNode(), caption);
    figure.addEventListener("click", () => {
      lightbox.querySelector("img").src = image.src;
      lightbox.querySelector("img").alt = image.alt;
      lightbox.showModal();
    });
    grid.append(figure);
  }
  images.forEach(image => image.closest("p")?.remove());
  section.append(grid);
  lightbox.addEventListener("click", () => lightbox.close());
}

async function loadSections() {
  for (const section of document.querySelectorAll("[data-md]")) {
    try {
      const response = await fetch(section.dataset.md, { cache: "no-cache" });
      if (!response.ok)
        throw new Error(response.status);
      section.innerHTML = marked.parse(await response.text());
    } catch {
      section.innerHTML = `<p class="empty">Não foi possível carregar ${section.dataset.md}.</p>`;
      continue;
    }
    if (section.classList.contains("gallery"))
      enhanceGallery(section);
    if (section.classList.contains("videos"))
      enhanceVideos(section);
  }
}

loadConfig().then(applyConfig);
// Sections load after the browser's own jump to #anchor: jump again once they're in
loadSections().then(() => {
  if (location.hash)
    document.querySelector(location.hash)?.scrollIntoView();
});
