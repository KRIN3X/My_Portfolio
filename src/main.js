import "./styles.css";
import { applyTranslations, t, toggleLang } from "./i18n";
import { PROJECTS, SKILL_GROUPS, TIMELINE } from "./data";

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

function codeLine(html) {
  return el("p", { class: "code__line", html });
}

function blankLine() {
  return el("p", { class: "code__line", html: "&nbsp;" });
}

/* ----------------------------------------------------------------------
   skills.json
---------------------------------------------------------------------- */

function renderSkills() {
  const host = document.getElementById("skills-code");
  if (!host) return;

  const lines = [
    codeLine(tk.cmt("// Stack at a glance — keys stable, comment localized")),
    codeLine(tk.op("{")),
  ];

  SKILL_GROUPS.forEach((group, gi) => {
    const isLast = gi === SKILL_GROUPS.length - 1;
    const localized = t(`skills.group.${group.id}`);
    const items = group.items
      .map((item) => tk.str(`"${item}"`))
      .join(`${tk.op(",")} `);
    lines.push(codeLine(`  ${tk.cmt(`// ${localized}`)}`));
    lines.push(
      codeLine(
        `  ${tk.prop(`"${group.id}"`)}${tk.op(":")} ${tk.op("[")}${items}${tk.op("]")}${
          isLast ? "" : tk.op(",")
        }`,
      ),
    );
    if (!isLast) lines.push(blankLine());
  });

  lines.push(codeLine(tk.op("}")));
  host.replaceChildren(...lines);
}

/* ----------------------------------------------------------------------
   projects/<file>.ts
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

function renderProject(p) {
  const taglineKey = `project.${p.id}.tagline`;
  const bodyKey = `project.${p.id}.body`;
  const titleKey = `project.${p.id}.title`;
  const statusKey = `project.status.${p.status}`;

  const points = [];
  for (let i = 1; i <= 3; i += 1) {
    const k = `project.${p.id}.point${i}`;
    const text = t(k);
    if (text === k) continue;
    points.push(el("li", { "data-i18n": k }, [text]));
  }

  const head = el("header", { class: "project__head" }, [
    el("span", { class: "project__filename" }, [`${p.id}.ts`]),
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
  if (points.length > 0) {
    proseChildren.push(el("ul", {}, points));
  }
  const prose = el("div", { class: "project__prose" }, proseChildren);

  const article = el(
    "article",
    {
      class: "project" + (p.featured ? "" : " project--secondary"),
      "aria-labelledby": `project-${p.id}-title`,
    },
    [head, projectCodeBlock(p), prose],
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
  hero: "hero.ts",
  about: "about.md",
  skills: "skills.json",
  projects: "projects/",
  experience: "experience.log",
  contact: ".env",
};

function setupActiveSection() {
  const fileLinks = document.querySelectorAll(
    ".explorer .file[data-section]",
  );
  const sections = Array.from(
    document.querySelectorAll(".pane[id]"),
  );
  const statusEl = document.getElementById("status-section");

  if (sections.length === 0) return;

  const setActive = (id) => {
    fileLinks.forEach((link) => {
      link.classList.toggle("is-active", link.dataset.section === id);
    });
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

  document.addEventListener("langchange", () => {
    rerenderDynamic();
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}
