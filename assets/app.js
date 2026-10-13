(function () {
  const $ = (id) => document.getElementById(id);
  const codes = LANGS.map((l) => l.code);

  function initialLang() {
    const p = new URLSearchParams(location.search).get("lang");
    if (p && codes.includes(p)) return p;
    try { const s = localStorage.getItem("lang"); if (s && codes.includes(s)) return s; } catch (e) {}
    const nav = (navigator.language || "en").toLowerCase();
    const hit = codes.find((c) => nav.startsWith(c));
    return hit || "en";
  }

  const state = { lang: initialLang(), domain: "all", q: "", newest: false, events: [] };

  const t = (field) => {
    if (!field) return "";
    if (typeof field === "string") return field;
    return field[state.lang] || field.en || field.zh || Object.values(field)[0] || "";
  };
  const ui = () => UI[state.lang] || UI.en;

  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

  function eraOf(year) {
    if (year < 1980) return "1950s – 1970s";
    if (year < 2000) return "1980s – 1990s";
    if (year < 2010) return "2000s";
    if (year < 2020) return "2010s";
    return String(year);
  }

  function fmtDate(e) {
    const [y, m, d] = e.date.split("-");
    let md = "";
    if (m) {
      md = state.lang === "zh" ? `${+m}月${d ? +d + "日" : ""}` :
        new Date(Date.UTC(+y, +m - 1, d ? +d : 1)).toLocaleDateString("en", { month: "short", day: d ? "numeric" : undefined, timeZone: "UTC" });
    }
    return { y: (e.approx ? ui().approx + " " : "") + y, md };
  }

  function matches(e) {
    if (state.domain !== "all" && e.domain !== state.domain) return false;
    if (!state.q) return true;
    const hay = [e.system, e.date, ...["title", "summary", "caveat"].flatMap((k) => e[k] ? Object.values(e[k]) : [])]
      .join(" ").toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every((w) => hay.includes(w));
  }

  function renderStatic() {
    const u = ui();
    document.documentElement.lang = state.lang === "zh" ? "zh-CN" : state.lang;
    document.title = `${u.title} · ${state.lang === "zh" ? UI.en.title : UI.zh.title}`;
    $("title").textContent = u.title;
    $("subtitle").textContent = u.subtitle;
    $("intro").textContent = u.intro;
    $("q").placeholder = u.search;
    $("footer").textContent = u.footer;
    $("report").textContent = u.report;
    $("source").textContent = u.source;
    $("empty").textContent = u.empty;
    $("sort").textContent = state.newest ? "↑ " + u.oldest : "↓ " + u.newest;
    $("langs").innerHTML = LANGS.map((l) =>
      `<button type="button" data-lang="${l.code}" aria-pressed="${l.code === state.lang}">${esc(l.label)}</button>`).join("");

    const counts = {};
    state.events.forEach((e) => { counts[e.domain] = (counts[e.domain] || 0) + 1; });
    const doms = Object.keys(u.domains).filter((d) => counts[d]);
    $("domains").innerHTML =
      `<button class="chip" data-d="all" aria-pressed="${state.domain === "all"}">${esc(u.all)}<span class="n">${state.events.length}</span></button>` +
      doms.map((d) => `<button class="chip" data-d="${d}" aria-pressed="${state.domain === d}">${esc(u.domains[d])}<span class="n">${counts[d]}</span></button>`).join("");
  }

  function renderList() {
    const u = ui();
    let rows = state.events.filter(matches);
    if (state.newest) rows = rows.slice().reverse();
    $("count").textContent = u.count(rows.length, state.events.length);
    $("empty").hidden = rows.length > 0;

    let html = "", lastEra = null;
    for (const e of rows) {
      const era = eraOf(+e.date.slice(0, 4));
      if (era !== lastEra) { html += `<li class="era">${esc(era)}</li>`; lastEra = era; }
      const d = fmtDate(e);
      const color = `var(--d-${e.domain}, var(--d-other))`;
      const cav = t(e.caveat);
      html += `<li class="item" id="${esc(e.id)}">
        <div class="when"><div class="y">${esc(d.y)}</div><div class="md">${esc(d.md)}</div></div>
        <div>
          <span class="dom" style="color:${color}">● ${esc(u.domains[e.domain] || e.domain)}</span>
          <h2>${esc(t(e.title))}</h2>
          <p>${esc(t(e.summary))}</p>
          ${cav ? `<div class="cav"><b>${esc(u.caveat)}</b>${esc(cav)}</div>` : ""}
          ${e.system ? `<div class="sys">${esc(e.system)}</div>` : ""}
          <div class="links">${(e.links || []).map((l) =>
            `<a href="${esc(l.url)}" target="_blank" rel="noopener"><span>${esc(u.kinds[l.kind] || "")}</span>${esc(l.label || new URL(l.url).hostname)}</a>`).join("")}</div>
        </div>
      </li>`;
    }
    $("list").innerHTML = html;
  }

  function render() { renderStatic(); renderList(); }

  $("langs").addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-lang]"); if (!b) return;
    state.lang = b.dataset.lang;
    try { localStorage.setItem("lang", state.lang); } catch (e) {}
    const url = new URL(location.href); url.searchParams.set("lang", state.lang); history.replaceState(null, "", url);
    render();
  });
  $("domains").addEventListener("click", (ev) => {
    const b = ev.target.closest("button[data-d]"); if (!b) return;
    state.domain = b.dataset.d; render();
  });
  $("q").addEventListener("input", (ev) => { state.q = ev.target.value.trim(); renderList(); });
  $("sort").addEventListener("click", () => { state.newest = !state.newest; render(); });
  $("yearNow").textContent = new Date().getFullYear();

  fetch("data/events.json", { cache: "no-cache" })
    .then((r) => r.json())
    .then((data) => {
      state.events = data.slice().sort((a, b) => a.date.localeCompare(b.date));
      render();
      if (location.hash) document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
    })
    .catch(() => { $("list").innerHTML = '<li class="empty">Failed to load data/events.json</li>'; });
})();
