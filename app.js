// Fills the page from content/site.json and the Markdown files in content/.
// Edit those files to change the text; no build step needed.
//
// Languages: content/*.md is the Brazilian Portuguese original. Other languages live
// in content/i18n/<code>/ (the same codes as the system's translations, e.g. en_US,
// zh_CN), with ui.json for the page's own words. A file missing in a language falls
// back to English, then to Portuguese.

const DEFAULT_LANG = "pt_BR";
const FALLBACK_LANG = "en_US";
let lang = DEFAULT_LANG;
let ui = {};

async function fetchText(url) {
  const response = await fetch(url, { cache: "no-cache" });
  if (!response.ok)
    throw new Error(response.status);
  return response.text();
}

async function fetchJson(url) {
  try {
    return JSON.parse(await fetchText(url));
  } catch {
    return null;
  }
}

function t(key, values = {}) {
  let text = ui[key] ?? key;
  for (const [name, value] of Object.entries(values))
    text = text.replace(`{${name}}`, value);
  return text;
}

// ?lang=, then the last choice, then the browser's languages (exact, then same base
// language), then English for everyone else
function pickLanguage(languages) {
  const codes = languages.map(l => l.code);
  const norm = code => code.replace("-", "_");
  const asked = new URLSearchParams(location.search).get("lang");
  let saved = null;
  try { saved = localStorage.getItem("lang"); } catch {}
  for (const wanted of [asked, saved]) {
    if (wanted && codes.includes(norm(wanted)))
      return norm(wanted);
  }
  for (const browser of navigator.languages || [navigator.language]) {
    const code = norm(browser);
    const exact = codes.find(c => c.toLowerCase() === code.toLowerCase());
    if (exact)
      return exact;
    const base = code.split("_")[0].toLowerCase();
    const sameBase = codes.find(c => c.split("_")[0].toLowerCase() === base);
    if (sameBase)
      return sameBase;
  }
  return FALLBACK_LANG;
}

async function setupLanguage() {
  const languages = (await fetchJson("content/i18n/languages.json")) || [];
  lang = pickLanguage(languages);
  const info = languages.find(l => l.code === lang) || { dir: "ltr" };

  ui = Object.assign({},
    await fetchJson(`content/i18n/${DEFAULT_LANG}/ui.json`),
    lang !== DEFAULT_LANG ? await fetchJson(`content/i18n/${FALLBACK_LANG}/ui.json`) : null,
    await fetchJson(`content/i18n/${lang}/ui.json`));

  document.documentElement.lang = lang.replace("_", "-").replace(/-(AA|XX)$/, "");
  document.documentElement.dir = info.dir;
  document.querySelector('meta[name="description"]')?.setAttribute("content", t("meta.description"));
  for (const element of document.querySelectorAll("[data-i18n]"))
    element.textContent = t(element.dataset.i18n);
  for (const element of document.querySelectorAll("[data-i18n-html]"))
    element.innerHTML = t(element.dataset.i18nHtml);
  for (const element of document.querySelectorAll("[data-i18n-aria]"))
    element.setAttribute("aria-label", t(element.dataset.i18nAria));

  const select = document.getElementById("lang-select");
  select.setAttribute("aria-label", t("lang.label"));
  for (const language of languages) {
    const option = new Option(language.name, language.code, false, language.code === lang);
    select.add(option);
  }
  select.addEventListener("change", () => {
    try { localStorage.setItem("lang", select.value); } catch {}
    const url = new URL(location.href);
    url.searchParams.set("lang", select.value);
    location.href = url.toString();
  });
}

// The section's Markdown in the current language, falling back to English and then
// to the Portuguese original
async function fetchSection(file) {
  const name = file.split("/").pop();
  const candidates = [];
  if (lang !== DEFAULT_LANG)
    candidates.push(`content/i18n/${lang}/${name}`, `content/i18n/${FALLBACK_LANG}/${name}`);
  candidates.push(file);
  for (const url of [...new Set(candidates)]) {
    try {
      return await fetchText(url);
    } catch {}
  }
  throw new Error("not found");
}

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

  const iso = config.iso || {};
  setLink("download-button", iso.url, t("soon.iso"));
  setLink("discord-button", config.discord, t("soon.discord"));
  if (config.github)
    setLink("github-button", config.github, "GitHub");

  const meta = [config.version && t("meta.version", { version: config.version }), iso.size, "x86-64"].filter(Boolean);
  document.getElementById("iso-meta").textContent = meta.join(" · ");
  if (iso.torrent) {
    const torrent = document.createElement("a");
    torrent.href = iso.torrent;
    torrent.textContent = t("meta.torrent");
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
    empty.textContent = t("videos.empty");
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
      section.innerHTML = marked.parse(await fetchSection(section.dataset.md));
    } catch {
      section.innerHTML = `<p class="empty">${t("load.error", { file: section.dataset.md })}</p>`;
      continue;
    }
    if (section.classList.contains("gallery"))
      enhanceGallery(section);
    if (section.classList.contains("videos"))
      enhanceVideos(section);
  }
}

setupLanguage().then(() => {
  loadConfig().then(applyConfig);
  // Sections load after the browser's own jump to #anchor: jump again once they're in
  loadSections().then(() => {
    if (location.hash)
      document.querySelector(location.hash)?.scrollIntoView();
  });
});
