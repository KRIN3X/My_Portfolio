/**
 * Tiny inline i18n. No library, no build step.
 *
 * - Strings are flat keys ("hero.cta.projects").
 * - DOM elements opt in with `data-i18n="key"`.
 * - Persists choice in localStorage; defaults to navigator.language.
 */

const EN = {
  "meta.title": "Christian Van Natali — Full Stack Software Developer",
  "meta.description":
    "Christian Van Natali — Full Stack Software Developer in Milan. PHP, Laravel, Godot, and scalable web & game systems.",

  "nav.skip": "Skip to content",
  "nav.about": "About",
  "nav.skills": "Skills",
  "nav.projects": "Projects",
  "nav.experience": "Experience",
  "nav.contact": "Contact",

  "hero.eyebrow": "Full Stack Software Developer · Milan, Italy",
  "hero.pitch":
    "Computer Science student with hands-on experience in Python, C#, Unity, and Godot, focused on building scalable systems and interactive applications — from full-stack web apps to game systems.",
  "hero.cta.projects": "View projects",
  "hero.cta.contact": "Get in touch",

  "hero.currently.label": "@currently",
  "hero.currently.line1": "Hackademy+ bootcamp — through June 2026",
  "hero.currently.line2": "Pocket Metropolis (Godot mobile sim) — in progress",
  "hero.currently.line3": "Risiko WebRTC multiplayer — in progress",

  "about.title": "About",
  "about.body1":
    "I've built data-processing tools and game systems applying object-oriented design and performance optimization. My recent work includes a team-built Laravel e-commerce app (Presto.it) and ongoing Godot projects spanning mobile simulation and web multiplayer.",
  "about.body2":
    "I'm exploring AI-assisted software development through structured, secure, and reliability-focused workflows — using AI as a technical tool for learning, planning, debugging, and prototyping, not as a replacement for engineering judgment.",
  "about.facts.based": "Based in",
  "about.facts.training": "Training",
  "about.facts.hackademy": "Hackademy+ · Aulab",
  "about.facts.education": "Education",
  "about.facts.unicam": "Informatics · Unicam (2021–2024)",
  "about.facts.focus": "Focus",
  "about.facts.stack": "Full-stack web · Game dev",
  "about.facts.languages": "Languages",
  "about.facts.availability": "Status",
  "about.facts.openToWork": "Open to opportunities",
  "about.certificate.title": "Certificate",
  "about.certificate.caption": "Aulab Hackademy+ — Full-Stack Web Developer",
  "about.certificate.imageAlt":
    "Aulab Hackademy+ Full-Stack Web Developer certificate awarded to Christian Van Natali",
  "about.certificate.linkTitle": "Open verified Aulab certificate (new tab)",
  "about.certificate.view": "View verified credential",

  "skills.title": "Skills",
  "skills.group.languages": "Languages",
  "skills.group.engines": "Game engines",
  "skills.group.web": "Web",
  "skills.group.tools": "Tools",

  "projects.title": "Projects",
  "projects.lede":
    "Full-stack web delivery alongside ongoing game development projects.",

  "project.presto-it.title": "Presto.it",
  "project.presto-it.tagline": "E-commerce web application · Team of 4 · 2026",
  "project.presto-it.body":
    "Developed a full-stack e-commerce website as part of a four-person team during the Hackademy+ bootcamp. Applied MVC architecture to separate models, views, and controllers across backend and frontend.",
  "project.presto-it.point1":
    "PHP, Laravel, MySQL, HTML, CSS, JavaScript, and Bootstrap",
  "project.presto-it.point2":
    "Backend, frontend, database integration, and responsive UI",
  "project.presto-it.point3":
    "Collaborative planning, implementation, testing, and delivery",

  "project.pocket-metropolis.title": "Pocket Metropolis",
  "project.pocket-metropolis.tagline": "Mobile city simulator (Godot)",
  "project.pocket-metropolis.body":
    "Designing a minimalistic city simulation for mobile devices with population growth, housing demand, land value, and infrastructure logic.",
  "project.pocket-metropolis.point1":
    "Modular systems for roads, housing, education, and city services",
  "project.pocket-metropolis.point2":
    "Probability-based mechanics for resident influx and development",
  "project.pocket-metropolis.point3":
    "Performance, scalability, and future expansion",

  "project.risiko-web.title": "Risiko",
  "project.risiko-web.tagline": "Web-based multiplayer strategy game (Godot + WebRTC)",
  "project.risiko-web.body":
    "Porting a classic strategy board game to a web-playable multiplayer version with peer-to-peer communication and synchronized game state.",
  "project.risiko-web.point1": "Peer-to-peer communication with WebRTC",
  "project.risiko-web.point2": "Game-state synchronization and turn management",
  "project.risiko-web.point3":
    "Reliability, latency reduction, and user experience",

  "project.status.in-progress": "In progress",
  "project.status.shipped": "Shipped",
  "project.status.archived": "Archived",

  "experience.title": "Experience & education",

  "timeline.hackademy.role": "Full-Stack Web Developer Bootcamp",
  "timeline.hackademy.org": "Aulab — Hackademy+",
  "timeline.hackademy.meta":
    "Intensive full-stack training: PHP · Laravel · MySQL · HTML · CSS · JavaScript · Bootstrap",
  "timeline.unicam.role": "Informatics",
  "timeline.unicam.org": "University of Camerino",
  "timeline.unicam.meta":
    "Coursework in Information and Communication Technologies",
  "timeline.freud.role": "Diploma in Informatics",
  "timeline.freud.org": "Scuola Paritaria S. Freud",
  "timeline.freud.meta": "Technical Industrial Institute · Diploma",
  "timeline.feltrinelli.role": "Informatics",
  "timeline.feltrinelli.org": "ITIS Feltrinelli",
  "timeline.feltrinelli.meta": "Technical Industrial Institute",
  "timeline.montani.role": "Informatics",
  "timeline.montani.org": "Technical Institute G. e. M. Montani",
  "timeline.montani.meta": "Technical Institute of Technology",
  "timeline.eximia.role": "Intern — C# / RFID data",
  "timeline.eximia.org": "Eximia",
  "timeline.eximia.meta":
    "C# Windows Forms · CSV duplicate detection · process efficiency wins",

  "timeline.present": "Present",

  "contact.title": "Contact",
  "contact.lede": "The fastest way to reach me is email or LinkedIn.",
  "contact.email": "Email",
  "contact.phone": "Phone / WhatsApp",
  "contact.location": "Location",

  "footer.meta": "Built with Vite + JavaScript · No tracking",

  "bp.problems": "Problems",
  "bp.output": "Output",
  "bp.terminal": "Terminal",
  "bp.noProblems": "No problems have been detected in the workspace.",

  "status.building": "Building…",
  "status.ready": "Ready",
  "copy.done": "Copied to clipboard",
  "copy.email": "Email copied",
  "copy.phone": "Phone copied",
};

const IT = {
  "meta.title": "Christian Van Natali — Full Stack Software Developer",
  "meta.description":
    "Christian Van Natali — Full Stack Software Developer a Milano. PHP, Laravel, Godot e sistemi web e di gioco scalabili.",

  "nav.skip": "Vai al contenuto",
  "nav.about": "Chi sono",
  "nav.skills": "Competenze",
  "nav.projects": "Progetti",
  "nav.experience": "Esperienze",
  "nav.contact": "Contatti",

  "hero.eyebrow": "Full Stack Software Developer · Milano, Italia",
  "hero.pitch":
    "Studente di Informatica con esperienza pratica in Python, C#, Unity e Godot, focalizzato sulla creazione di sistemi scalabili e applicazioni interattive — da app web full-stack a sistemi di gioco.",
  "hero.cta.projects": "Vedi i progetti",
  "hero.cta.contact": "Contattami",

  "hero.currently.label": "@currently",
  "hero.currently.line1": "Bootcamp Hackademy+ — fino a giugno 2026",
  "hero.currently.line2":
    "Pocket Metropolis (sim mobile in Godot) — in corso",
  "hero.currently.line3": "Risiko WebRTC multiplayer — in corso",

  "about.title": "Chi sono",
  "about.body1":
    "Ho sviluppato strumenti di elaborazione dati e sistemi di gioco applicando design orientato agli oggetti e ottimizzazione delle prestazioni. Il mio lavoro recente include un e-commerce Laravel in team (Presto.it) e progetti Godot in corso per simulazione mobile e multiplayer web.",
  "about.body2":
    "Sto esplorando lo sviluppo software assistito dall'IA attraverso flussi strutturati, sicuri e orientati all'affidabilità — usando l'IA come strumento tecnico per apprendimento, pianificazione, debugging e prototipazione, non come sostituto del giudizio ingegneristico.",
  "about.facts.based": "Sede",
  "about.facts.training": "Formazione",
  "about.facts.hackademy": "Hackademy+ · Aulab",
  "about.facts.education": "Istruzione",
  "about.facts.unicam": "Informatica · Unicam (2021–2024)",
  "about.facts.focus": "Focus",
  "about.facts.stack": "Web full-stack · Game dev",
  "about.facts.languages": "Lingue",
  "about.facts.availability": "Stato",
  "about.facts.openToWork": "Aperto a nuove opportunità",
  "about.certificate.title": "Certificato",
  "about.certificate.caption": "Aulab Hackademy+ — Full-Stack Web Developer",
  "about.certificate.imageAlt":
    "Certificato Aulab Hackademy+ Full-Stack Web Developer rilasciato a Christian Van Natali",
  "about.certificate.linkTitle": "Apri certificato Aulab verificato (nuova scheda)",
  "about.certificate.view": "Vedi credenziale verificata",

  "skills.title": "Competenze",
  "skills.group.languages": "Linguaggi",
  "skills.group.engines": "Game engine",
  "skills.group.web": "Web",
  "skills.group.tools": "Strumenti",

  "projects.title": "Progetti",
  "projects.lede":
    "Consegna web full-stack affiancata a progetti di sviluppo giochi in corso.",

  "project.presto-it.title": "Presto.it",
  "project.presto-it.tagline": "Applicazione e-commerce · Team di 4 · 2026",
  "project.presto-it.body":
    "Sviluppato un sito e-commerce full-stack in un team di quattro persone durante il bootcamp Hackademy+. Applicata l'architettura MVC per separare modelli, viste e controller tra backend e frontend.",
  "project.presto-it.point1":
    "PHP, Laravel, MySQL, HTML, CSS, JavaScript e Bootstrap",
  "project.presto-it.point2":
    "Backend, frontend, integrazione database e UI responsive",
  "project.presto-it.point3":
    "Pianificazione, implementazione, testing e consegna in team",

  "project.pocket-metropolis.title": "Pocket Metropolis",
  "project.pocket-metropolis.tagline": "Simulatore di città per mobile (Godot)",
  "project.pocket-metropolis.body":
    "Progettazione di una simulazione cittadina minimalista per dispositivi mobile con crescita della popolazione, domanda abitativa, valore dei terreni e logica infrastrutturale.",
  "project.pocket-metropolis.point1":
    "Sistemi modulari per strade, abitazioni, istruzione e servizi",
  "project.pocket-metropolis.point2":
    "Meccaniche basate sulla probabilità per afflusso e sviluppo",
  "project.pocket-metropolis.point3":
    "Prestazioni, scalabilità ed espansione futura",

  "project.risiko-web.title": "Risiko",
  "project.risiko-web.tagline": "Gioco strategico multiplayer web (Godot + WebRTC)",
  "project.risiko-web.body":
    "Porting di un classico gioco da tavolo strategico in versione multiplayer giocabile dal browser, con comunicazione peer-to-peer e stato di gioco sincronizzato.",
  "project.risiko-web.point1": "Comunicazione peer-to-peer con WebRTC",
  "project.risiko-web.point2":
    "Sincronizzazione dello stato e gestione dei turni",
  "project.risiko-web.point3":
    "Affidabilità, riduzione della latenza ed esperienza utente",

  "project.status.in-progress": "In corso",
  "project.status.shipped": "Concluso",
  "project.status.archived": "Archiviato",

  "experience.title": "Esperienze e formazione",

  "timeline.hackademy.role": "Bootcamp Full-Stack Web Developer",
  "timeline.hackademy.org": "Aulab — Hackademy+",
  "timeline.hackademy.meta":
    "Formazione full-stack intensiva: PHP · Laravel · MySQL · HTML · CSS · JavaScript · Bootstrap",
  "timeline.unicam.role": "Informatica",
  "timeline.unicam.org": "Università di Camerino",
  "timeline.unicam.meta":
    "Corsi in tecnologie dell'informazione e della comunicazione",
  "timeline.freud.role": "Diploma in Informatics",
  "timeline.freud.org": "Scuola Paritaria S. Freud",
  "timeline.freud.meta": "Istituto tecnico industriale · Diploma",
  "timeline.feltrinelli.role": "Informatics",
  "timeline.feltrinelli.org": "ITIS Feltrinelli",
  "timeline.feltrinelli.meta": "Istituto tecnico industriale",
  "timeline.montani.role": "Informatics",
  "timeline.montani.org": "Istituto Tecnico G. e. M. Montani",
  "timeline.montani.meta": "Istituto tecnico di tecnologia",
  "timeline.eximia.role": "Tirocinante — C# / dati RFID",
  "timeline.eximia.org": "Eximia",
  "timeline.eximia.meta":
    "C# Windows Forms · rilevamento duplicati CSV · efficienza di processo",

  "timeline.present": "Oggi",

  "contact.title": "Contatti",
  "contact.lede": "Il modo più veloce per contattarmi è email o LinkedIn.",
  "contact.email": "Email",
  "contact.phone": "Telefono / WhatsApp",
  "contact.location": "Sede",

  "footer.meta": "Costruito con Vite + JavaScript · Nessun tracciamento",

  "bp.problems": "Problemi",
  "bp.output": "Output",
  "bp.terminal": "Terminale",
  "bp.noProblems": "Nessun problema rilevato nel workspace.",

  "status.building": "Compilazione…",
  "status.ready": "Pronto",
  "copy.done": "Copiato negli appunti",
  "copy.email": "Email copiata",
  "copy.phone": "Telefono copiato",
};

const DICTS = { en: EN, it: IT };
const STORAGE_KEY = "cn.lang";

function detectInitial() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "it") return saved;
  } catch {
    /* localStorage unavailable — fall through */
  }
  return navigator.language?.toLowerCase().startsWith("it") ? "it" : "en";
}

let current = detectInitial();

export function getLang() {
  return current;
}

export function t(key) {
  return DICTS[current][key] ?? DICTS.en[key] ?? key;
}

/** Replace text content of all elements with a `data-i18n` attribute. */
export function applyTranslations() {
  document.documentElement.lang = current;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!key) return;
    const value = t(key);
    if (el.tagName === "META") {
      el.setAttribute("content", value);
    } else if (el.tagName === "TITLE") {
      document.title = value;
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-title]").forEach((el) => {
    const key = el.dataset.i18nTitle;
    if (key) el.setAttribute("title", t(key));
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.dataset.i18nAlt;
    if (key) el.setAttribute("alt", t(key));
  });

  document
    .querySelectorAll(".lang-toggle [data-lang]")
    .forEach((el) => {
      el.classList.toggle("is-active", el.dataset.lang === current);
    });
}

export function setLang(lang) {
  if (lang === current) return;
  current = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  applyTranslations();
  document.dispatchEvent(new CustomEvent("langchange", { detail: lang }));
}

export function toggleLang() {
  setLang(current === "en" ? "it" : "en");
}
