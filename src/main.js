import "./styles.css";
import { applyTranslations, t, toggleLang } from "./i18n";
import { PROJECTS, SKILL_GROUPS, TIMELINE } from "./data";

/* ----------------------------------------------------------------------
   Visits backend (self-hosted, DuckDNS + Caddy + Node — see /server).

   Set to `""` to disable the beacon entirely.
   Only fires from the production origin (never from localhost).
---------------------------------------------------------------------- */

const BEACON_ORIGIN = "https://krin3x.duckdns.org";
const VISIT_SESSION_KEY = "cn.visited";
const VISIT_LOG_LOADED = "cn.visitLogLoaded";

function beaconEnabled() {
  if (!BEACON_ORIGIN) return false;
  const host = location.hostname;
  return host !== "localhost" && host !== "127.0.0.1" && host !== "";
}

/** Fire-and-forget visit ping. Uses sendBeacon so it survives page unload. */
function trackVisit() {
  if (!beaconEnabled()) return;
  try {
    if (sessionStorage.getItem(VISIT_SESSION_KEY)) return;
    sessionStorage.setItem(VISIT_SESSION_KEY, "1");
  } catch {
    // sessionStorage blocked — fire anyway.
  }

  const payload = JSON.stringify({
    ref: document.referrer || "",
    lang: navigator.language || "",
  });

  try {
    const blob = new Blob([payload], { type: "text/plain" });
    const ok = navigator.sendBeacon?.(`${BEACON_ORIGIN}/hit`, blob);
    if (ok) return;
  } catch {
    /* fall through to fetch */
  }

  fetch(`${BEACON_ORIGIN}/hit`, {
    method: "POST",
    mode: "cors",
    credentials: "omit",
    keepalive: true,
    headers: { "Content-Type": "text/plain" },
    body: payload,
  }).catch(() => {
    /* endpoint down — never fail the page load */
  });
}

/* ----------------------------------------------------------------------
   DOM helpers
---------------------------------------------------------------------- */

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "html") node.innerHTML = v;
    else node.setAttribute(k, v);
  }
  for (const c of children) {
    node.append(typeof c === "string" ? document.createTextNode(c) : c);
  }
  return node;
}

function escapeHTML(s) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ----------------------------------------------------------------------
   Syntax token helpers
---------------------------------------------------------------------- */

const tk = {
  kw:   (s) => `<span class="tk-kw">${escapeHTML(s)}</span>`,
  str:  (s) => `<span class="tk-str">${escapeHTML(s)}</span>`,
  fn:   (s) => `<span class="tk-fn">${escapeHTML(s)}</span>`,
  num:  (s) => `<span class="tk-num">${s}</span>`,
  prop: (s) => `<span class="tk-prop">${escapeHTML(s)}</span>`,
  cmt:  (s) => `<span class="tk-cmt">${escapeHTML(s)}</span>`,
  op:   (s) => `<span class="tk-op">${escapeHTML(s)}</span>`,
};

function codeLine(html, extraClass = "") {
  const cls = extraClass ? `code__line ${extraClass}` : "code__line";
  return el("p", { class: cls, html });
}

function blankLine(extraClass = "") {
  const cls = extraClass ? `code__line ${extraClass}` : "code__line";
  return el("p", { class: cls, html: "&nbsp;" });
}

/* ----------------------------------------------------------------------
   Animation helpers
---------------------------------------------------------------------- */

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let typewriterCancel = null;

function typewriterCharDelay(char, prevChar, index) {
  if (index === 0) return 140 + Math.random() * 90;
  if (prevChar === "." || prevChar === "," || prevChar === "—") {
    return 90 + Math.random() * 120;
  }
  if (prevChar === " ") return 22 + Math.random() * 40;
  if (char === " ") return 16 + Math.random() * 30;
  if (index > 8 && index % 11 === 0 && Math.random() < 0.3) {
    return 70 + Math.random() * 140;
  }
  return 18 + Math.random() * 34;
}

function runTypewriter(target, text, onDone) {
  typewriterCancel?.();
  if (!target) return;

  if (prefersReducedMotion()) {
    target.textContent = text;
    onDone?.();
    return;
  }

  target.textContent = "";
  let cancelled = false;
  typewriterCancel = () => {
    cancelled = true;
  };

  const typeNext = (index) => {
    if (cancelled) return;
    if (index >= text.length) {
      typewriterCancel = null;
      onDone?.();
      return;
    }
    target.textContent += text[index];
    const delay = typewriterCharDelay(text[index], text[index - 1], index);
    setTimeout(() => typeNext(index + 1), delay);
  };

  typeNext(0);
}

function flashTab(sectionId) {
  const tab = document.querySelector(`#${sectionId}-tab`);
  if (!tab || prefersReducedMotion()) return;
  tab.classList.remove("tab--flash");
  void tab.offsetWidth;
  tab.classList.add("tab--flash");
  tab.addEventListener("animationend", () => tab.classList.remove("tab--flash"), {
    once: true,
  });
}

function showToast(message) {
  const toast = document.getElementById("ide-toast");
  if (!toast) return;
  toast.textContent = message;
  toast.hidden = false;
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.hidden = true;
  }, 2200);
}

const OUTPUT_LOG_KEY = "cn.outputPlayed";

function getOutputLogLines() {
  return [
    { html: `<span class="tk-cmt">[vite]</span> v5.4.21 building for production...` },
    { html: `<span class="tk-cmt">[vite]</span> <span class="tk-str">✓</span> 6 modules transformed.` },
    { html: `<span class="tk-cmt">[vite]</span> dist/index.html <span class="tk-num">12.77 kB</span> · gzip: <span class="tk-num">2.96 kB</span>` },
    { html: `<span class="tk-cmt">[vite]</span> dist/assets/index-*.css <span class="tk-num">11.69 kB</span> · gzip: <span class="tk-num">3.17 kB</span>` },
    { html: `<span class="tk-cmt">[vite]</span> dist/assets/index-*.js <span class="tk-num">18.40 kB</span> · gzip: <span class="tk-num">6.40 kB</span>` },
    { html: `<span class="tk-cmt">[vite]</span> <span class="tk-str">✓</span> built in <span class="tk-num">117ms</span>` },
    { html: "&nbsp;" },
    { html: `<span class="tk-cmt">[deploy]</span> <span class="tk-fn">github-pages</span> · workflow triggered on push to <span class="tk-str">main</span>` },
    { html: `<span class="tk-cmt">[deploy]</span> <span class="tk-str">✓</span> live at <span class="tk-fn">https://krin3x.github.io/My_Portfolio/</span>` },
  ];
}

/* ----------------------------------------------------------------------
   Live visit log — shown in the Terminal pane when /recent is reachable.
   Falls back to the static `git log` markup baked into index.html.
---------------------------------------------------------------------- */

function formatVisitTs(ts) {
  // "YYYY-MM-DD HH:MM" in UTC, matches the server-side format.
  return new Date(ts).toISOString().replace("T", " ").slice(0, 16);
}

function visitLine(v) {
  const when   = formatVisitTs(v.ts);
  const place  = [v.city, v.country].filter(Boolean).join(", ") || "unknown";
  const client = [v.browser, v.os].filter(Boolean).join(" · ") || "unknown";
  return `<span class="tk-cmt">[${escapeHTML(when)} UTC]</span> ` +
         `<span class="tk-str">${escapeHTML(place)}</span> · ` +
         `<span class="tk-fn">${escapeHTML(client)}</span>`;
}

async function loadVisitLog() {
  if (!beaconEnabled()) return;
  const host = document.getElementById("terminal-content");
  if (!host) return;
  if (sessionStorage.getItem(VISIT_LOG_LOADED)) return;

  try {
    const res = await fetch(`${BEACON_ORIGIN}/recent?limit=20`, {
      mode: "cors",
      credentials: "omit",
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const rows = await res.json();
    if (!Array.isArray(rows) || rows.length === 0) return;

    const health = await fetch(`${BEACON_ORIGIN}/health`, { mode: "cors" })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null);
    const total = health?.count ?? rows.length;

    const header = [
      `<p class="bp-line"><span class="tk-prop">$</span> <span class="tk-fn">tail</span> -n 20 visits.log</p>`,
      `<p class="bp-line"><span class="tk-cmt">// self-hosted · DuckDNS + Caddy + Node · no IPs stored</span></p>`,
      `<p class="bp-line"><span class="tk-cmt">// total anonymous visits: </span><span class="tk-num">${total}</span></p>`,
      `<p class="bp-line">&nbsp;</p>`,
    ];
    const lines = rows.map((v) => `<p class="bp-line">${visitLine(v)}</p>`);
    const footer = [
      `<p class="bp-line">&nbsp;</p>`,
      `<p class="bp-line"><span class="tk-prop">$</span> <span class="cursor-blink tk-cmt">_</span></p>`,
    ];

    host.innerHTML = [...header, ...lines, ...footer].join("");
    sessionStorage.setItem(VISIT_LOG_LOADED, "1");
  } catch {
    // Endpoint unreachable — silently keep the static git-log content.
  }
}

function renderOutputLogInstant(host) {
  host.replaceChildren(
    ...getOutputLogLines().map((line) =>
      el("p", { class: "bp-line", html: line.html }),
    ),
  );
}

function playOutputLog(host) {
  if (!host) return;
  const lines = getOutputLogLines();

  if (prefersReducedMotion() || sessionStorage.getItem(OUTPUT_LOG_KEY)) {
    renderOutputLogInstant(host);
    return;
  }

  host.replaceChildren();
  let i = 0;

  const appendNext = () => {
    if (i >= lines.length) {
      sessionStorage.setItem(OUTPUT_LOG_KEY, "1");
      return;
    }
    const line = el("p", { class: "bp-line bp-line--typing", html: lines[i].html });
    host.append(line);
    i += 1;
    setTimeout(appendNext, 180);
  };

  appendNext();
}

/* ----------------------------------------------------------------------
   skills.json
---------------------------------------------------------------------- */

function renderSkills() {
  const host = document.getElementById("skills-code");
  if (!host) return;

  const wasRevealed = host.classList.contains("skills--revealed");
  let lineIndex = 0;

  const staggerLine = (html) => {
    const node = codeLine(html, "code__line--stagger");
    node.style.setProperty("--line-i", String(lineIndex));
    lineIndex += 1;
    return node;
  };

  const lines = [
    staggerLine(tk.cmt("// Stack at a glance — keys stable, comment localized")),
    staggerLine(tk.op("{")),
  ];

  SKILL_GROUPS.forEach((group, gi) => {
    const isLast = gi === SKILL_GROUPS.length - 1;
    const localized = t(`skills.group.${group.id}`);
    const items = group.items
      .map((item) => tk.str(`"${item}"`))
      .join(`${tk.op(",")} `);
    lines.push(staggerLine(`  ${tk.cmt(`// ${localized}`)}`));
    lines.push(
      staggerLine(
        `  ${tk.prop(`"${group.id}"`)}${tk.op(":")} ${tk.op("[")}${items}${tk.op("]")}${
          isLast ? "" : tk.op(",")
        }`,
      ),
    );
    if (!isLast) {
      const gap = blankLine("code__line--stagger");
      gap.style.setProperty("--line-i", String(lineIndex));
      lineIndex += 1;
      lines.push(gap);
    }
  });

  lines.push(staggerLine(tk.op("}")));
  host.replaceChildren(...lines);
  if (wasRevealed) host.classList.add("skills--revealed");
}

/* ----------------------------------------------------------------------
   projects/<file>.js
---------------------------------------------------------------------- */

function projectCodeBlock(p) {
  const stackList = p.stack
    .map((s) => tk.str(`'${s}'`))
    .join(`${tk.op(",")} `);
  const yearLine = p.year
    ? `  ${tk.prop("year")}${tk.op(":")} ${tk.str(`'${p.year}'`)}${tk.op(",")}`
    : null;

  const lines = [
    codeLine(`${tk.kw("export const")} ${tk.fn(camel(p.id))} ${tk.op("=")} ${tk.op("{")}`),
    codeLine(
      `  ${tk.prop("status")}${tk.op(":")} ${tk.str(`'${p.status}'`)}${tk.op(",")}`,
    ),
  ];
  if (yearLine) lines.push(codeLine(yearLine));
  lines.push(
    codeLine(
      `  ${tk.prop("stack")}${tk.op(":")} ${tk.op("[")}${stackList}${tk.op("]")}${tk.op(",")}`,
    ),
  );
  lines.push(codeLine(`${tk.op("};")}`));

  return el("div", { class: "project__code" }, lines);
}

function camel(id) {
  return id
    .split(/[-_]/g)
    .map((part, i) => (i === 0 ? part : part[0].toUpperCase() + part.slice(1)))
    .join("");
}

const PROJECT_META_KEYS = [
  "problem",
  "role",
  "architecture",
  "challenges",
  "practices",
];

function renderProject(p) {
  const taglineKey = `project.${p.id}.tagline`;
  const bodyKey = `project.${p.id}.body`;
  const titleKey = `project.${p.id}.title`;
  const statusKey = `project.status.${p.status}`;

  const metaRows = [];
  for (const metaId of PROJECT_META_KEYS) {
    const valueKey = `project.${p.id}.${metaId}`;
    const labelKey = `project.meta.${metaId}`;
    const value = t(valueKey);
    if (value === valueKey) continue;
    const label = t(labelKey);
    metaRows.push(
      el("div", { class: "project__meta-row" }, [
        el(
          "span",
          { class: "project__meta-label", "data-i18n": labelKey },
          [label],
        ),
        el(
          "span",
          { class: "project__meta-value", "data-i18n": valueKey },
          [value],
        ),
      ]),
    );
  }

  const head = el("header", { class: "project__head" }, [
    el("span", { class: "project__filename" }, [`${p.id}.js`]),
    el(
      "span",
      {
        class:
          "project__status" +
          (p.status === "in-progress" ? " project__status--active" : ""),
        "data-i18n": statusKey,
      },
      [t(statusKey)],
    ),
  ]);

  const proseChildren = [
    el(
      "p",
      { class: "project__tagline" },
      [
        el("strong", { class: "project__title", "data-i18n": titleKey }, [t(titleKey)]),
        " — ",
        el("span", { "data-i18n": taglineKey }, [t(taglineKey)]),
      ],
    ),
    el("p", { "data-i18n": bodyKey }, [t(bodyKey)]),
  ];
  if (metaRows.length > 0) {
    proseChildren.push(el("div", { class: "project__meta" }, metaRows));
  }
  const prose = el("div", { class: "project__prose" }, proseChildren);

  const stack = el(
    "div",
    { class: "project__stack" },
    p.stack.map((tech, i) =>
      el("span", { class: "chip", "data-chip-index": String(i) }, [tech]),
    ),
  );

  const article = el(
    "article",
    {
      class: "project" + (p.featured ? "" : " project--secondary"),
      "aria-labelledby": `project-${p.id}-title`,
      "data-project-id": p.id,
    },
    [head, projectCodeBlock(p), stack, prose],
  );

  const titleEl = head.querySelector(".project__filename");
  if (titleEl) titleEl.id = `project-${p.id}-title`;

  return article;
}

function renderProjects() {
  const host = document.getElementById("projects-grid");
  if (!host) return;
  const featured = PROJECTS.filter((p) => p.featured);
  const secondary = PROJECTS.filter((p) => !p.featured);
  host.replaceChildren(
    ...featured.map(renderProject),
    ...secondary.map(renderProject),
  );
}

/* ----------------------------------------------------------------------
   experience.log
---------------------------------------------------------------------- */

function renderTimeline() {
  const host = document.getElementById("timeline");
  if (!host) return;

  host.replaceChildren(
    ...TIMELINE.map((entry) => {
      const end = entry.end ?? t("timeline.present");
      const when = `${entry.start} .. ${end}`;
      const roleKey = `timeline.${entry.id}.role`;
      const orgKey = `timeline.${entry.id}.org`;
      const metaKey = `timeline.${entry.id}.meta`;

      const orgNode = entry.url
        ? el(
            "a",
            { href: entry.url, target: "_blank", rel: "noopener", "data-i18n": orgKey },
            [t(orgKey)],
          )
        : el("span", { "data-i18n": orgKey }, [t(orgKey)]);

      const children = [
        el("span", { class: "timeline__when" }, [when]),
        el("p", { class: "timeline__role", "data-i18n": roleKey }, [t(roleKey)]),
        el("p", { class: "timeline__org" }, [orgNode]),
      ];

      const metaText = t(metaKey);
      if (metaText !== metaKey) {
        children.push(
          el("p", { class: "timeline__meta", "data-i18n": metaKey }, [metaText]),
        );
      }

      return el("li", { class: "timeline__item" }, children);
    }),
  );
}

/* ----------------------------------------------------------------------
   Sidebar active-section + status bar current file
---------------------------------------------------------------------- */

const SECTION_TO_FILE = {
  hero: "hero.js",
  about: "about.md",
  skills: "skills.json",
  projects: "projects/",
  experience: "experience.log",
  contact: ".env",
};

let lastActiveSection = null;

function setupActiveSection() {
  const fileLinks = document.querySelectorAll(
    ".explorer .file[data-section]",
  );
  const sections = Array.from(
    document.querySelectorAll(".pane[id]"),
  );
  const statusEl = document.getElementById("status-section");
  const projectsFolder = document.querySelector('[data-folder="projects"]');

  if (sections.length === 0) return;

  const setActive = (id) => {
    if (lastActiveSection !== null && id !== lastActiveSection) {
      flashTab(id);
    }
    lastActiveSection = id;

    fileLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === id);
    });
    if (projectsFolder) {
      projectsFolder.classList.toggle("folder--open", id === "projects");
    }
    if (statusEl) statusEl.textContent = SECTION_TO_FILE[id] ?? id;
  };

  if (!("IntersectionObserver" in window)) {
    setActive(sections[0].id);
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
  );

  sections.forEach((s) => obs.observe(s));
  setActive(sections[0].id);
}

function setupBottomPanel() {
  const tabs = document.querySelectorAll(".bp-tab");
  const panes = document.querySelectorAll(".bp-pane");
  if (tabs.length === 0) return;

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.bpTab;
      if (!target) return;
      tabs.forEach((t) => {
        const active = t.dataset.bpTab === target;
        t.classList.toggle("is-active", active);
        t.setAttribute("aria-selected", active ? "true" : "false");
      });
      panes.forEach((p) => {
        const active = p.dataset.bpPane === target;
        p.classList.toggle("is-active", active);
        if (active) p.removeAttribute("hidden");
        else p.setAttribute("hidden", "");
      });
      if (target === "output") {
        playOutputLog(document.getElementById("output-log"));
      }
      if (target === "terminal") {
        loadVisitLog();
      }
    });
  });
}

/* ----------------------------------------------------------------------
   Reveal + lang toggle + year
---------------------------------------------------------------------- */

function setupReveal() {
  const targets = document.querySelectorAll(".reveal");
  if (targets.length === 0) return;
  if (!("IntersectionObserver" in window)) {
    targets.forEach((el) => el.classList.add("is-visible"));
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          obs.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.05 },
  );
  targets.forEach((el) => obs.observe(el));
}

function setupLangToggle() {
  document.getElementById("lang-toggle")?.addEventListener("click", () => toggleLang());
}

function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());
}

function setupHeroAnimations() {
  const heroCode = document.getElementById("hero-code");
  const pitchEl = document.getElementById("hero-pitch");
  const cursorEl = document.getElementById("hero-cursor");

  if (heroCode && !prefersReducedMotion()) {
    requestAnimationFrame(() => heroCode.classList.add("code--hero-ready"));
  } else if (heroCode) {
    heroCode.classList.add("code--hero-ready");
  }

  const startTypewriter = () => {
    runTypewriter(pitchEl, t("hero.pitch"), () => {
      if (cursorEl) cursorEl.hidden = true;
    });
    if (cursorEl) cursorEl.hidden = false;
  };

  startTypewriter();
}

function setupSkillsReveal() {
  const host = document.getElementById("skills-code");
  if (!host) return;

  if (prefersReducedMotion()) {
    host.classList.add("skills--revealed");
    return;
  }

  if (!("IntersectionObserver" in window)) {
    host.classList.add("skills--revealed");
    return;
  }

  const obs = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("skills--revealed");
          obs.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -15% 0px", threshold: 0.1 },
  );
  obs.observe(host);
}

function setupStatusBuilding() {
  const activity = document.getElementById("status-activity");
  if (!activity) return;

  if (prefersReducedMotion()) {
    activity.textContent = t("status.ready");
    activity.hidden = false;
    return;
  }

  activity.textContent = t("status.building");
  activity.hidden = false;
  setTimeout(() => {
    activity.textContent = t("status.ready");
    setTimeout(() => {
      activity.hidden = true;
    }, 1800);
  }, 1400);
}

function setupCopyToClipboard() {
  document.querySelectorAll("[data-copy]").forEach((link) => {
    link.addEventListener("click", async (e) => {
      const value = link.dataset.copy;
      if (!value) return;
      e.preventDefault();
      try {
        await navigator.clipboard.writeText(value);
        const key =
          value.includes("@") ? "copy.email" : value.includes("+") ? "copy.phone" : "copy.done";
        showToast(t(key));
      } catch {
        showToast(t("copy.done"));
      }
    });
  });
}

function pulseProjectChips(article) {
  if (prefersReducedMotion()) return;
  const chips = article.querySelectorAll(".chip");
  chips.forEach((chip, i) => {
    setTimeout(() => {
      chip.classList.remove("chip--pulse");
      void chip.offsetWidth;
      chip.classList.add("chip--pulse");
      chip.addEventListener(
        "animationend",
        () => chip.classList.remove("chip--pulse"),
        { once: true },
      );
    }, i * 240);
  });
}

let projectChipObserver = null;

function setupProjectChipPulse() {
  projectChipObserver?.disconnect();
  const projects = document.querySelectorAll(".project");
  if (projects.length === 0) return;

  if (!("IntersectionObserver" in window)) return;

  projectChipObserver = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          pulseProjectChips(e.target);
          projectChipObserver.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.2 },
  );

  projects.forEach((p) => projectChipObserver.observe(p));
}

/* ----------------------------------------------------------------------
   Boot
---------------------------------------------------------------------- */

function rerenderDynamic() {
  renderSkills();
  renderProjects();
  renderTimeline();
}

function init() {
  applyTranslations();
  rerenderDynamic();
  setupActiveSection();
  setupBottomPanel();
  setupReveal();
  setupLangToggle();
  setYear();
  setupHeroAnimations();
  setupSkillsReveal();
  setupStatusBuilding();
  setupCopyToClipboard();
  setupProjectChipPulse();
  trackVisit();

  document.addEventListener("langchange", () => {
    rerenderDynamic();
    setupProjectChipPulse();
    const pitchEl = document.getElementById("hero-pitch");
    const cursorEl = document.getElementById("hero-cursor");
    if (pitchEl) {
      runTypewriter(pitchEl, t("hero.pitch"), () => {
        if (cursorEl) cursorEl.hidden = true;
      });
      if (cursorEl) cursorEl.hidden = false;
    }
    const activity = document.getElementById("status-activity");
    if (activity && !activity.hidden) {
      activity.textContent = t("status.ready");
    }
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
