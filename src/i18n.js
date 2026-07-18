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
    "Building web applications and software systems with Laravel, Java, JavaScript, and modern development tools — focused on backend architecture, database design, and scalable application development.",
  "hero.cta.projects": "View projects",
  "hero.cta.contact": "Get in touch",

  "hero.currently.label": "@currently",
  "hero.currently.line1": "Pocket Metropolis (Godot mobile sim) — in progress",

  "about.title": "About",
  "about.body1":
    "Full Stack Software Developer with a foundation in object-oriented programming, MVC architecture, and relational databases. I design and build web applications end-to-end — from database schema and backend logic to responsive interfaces — using Laravel, Java, JavaScript, and MySQL.",
  "about.body2":
    "Recent work includes a team-built Laravel e-commerce app (Presto.it) applying MVC and role-based access, alongside Godot projects exploring modular systems, probability-driven mechanics, and peer-to-peer multiplayer over WebRTC. I care about clear architecture, maintainable code, and shipping features that behave predictably under real conditions.",
  "about.body3":
    "I'm exploring AI-assisted development through structured, secure, and reliability-focused workflows — using AI for planning, debugging, and prototyping while keeping engineering decisions my own.",
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
  "skills.group.backend": "Backend",
  "skills.group.frontend": "Frontend",
  "skills.group.gamedev": "Game development",
  "skills.group.methodologies": "Methodologies",
  "skills.group.tools": "Tools & workflow",

  "projects.title": "Projects",
  "projects.lede":
    "Full-stack web delivery alongside ongoing game development projects.",

  "project.meta.problem": "Problem",
  "project.meta.role": "Role",
  "project.meta.architecture": "Architecture",
  "project.meta.challenges": "Challenges",
  "project.meta.practices": "Practices",

  "project.presto-it.title": "Presto.it",
  "project.presto-it.tagline": "E-commerce web application · Team of 4 · 2026",
  "project.presto-it.body":
    "Full-stack e-commerce platform built during the Hackademy+ bootcamp. Applied MVC to keep models, views, and controllers cleanly separated across backend and frontend.",
  "project.presto-it.problem":
    "Deliver a functional e-commerce site covering user browsing, listings, and role-based moderation within a fixed bootcamp timeline.",
  "project.presto-it.role":
    "Backend and frontend contributor in a four-person team. Shared ownership of the MVC layer, relational schema, and delivery workflow.",
  "project.presto-it.architecture":
    "Laravel MVC with Eloquent models, controllers, and Blade views. MySQL schema for users, categories, and listings with role-based access for moderator workflows. Responsive UI built on Bootstrap.",
  "project.presto-it.challenges":
    "Coordinating a shared Git workflow across four contributors, aligning data models between features, and keeping the UI consistent while the schema evolved.",
  "project.presto-it.practices":
    "Feature-branch Git workflow, code review, iterative delivery, and manual testing before hand-off.",

  "project.pocket-metropolis.title": "Pocket Metropolis",
  "project.pocket-metropolis.tagline": "Mobile city simulator (Godot)",
  "project.pocket-metropolis.body":
    "Minimalistic city simulation for mobile devices modelling population growth, housing demand, land value, and infrastructure over composable systems.",
  "project.pocket-metropolis.problem":
    "Design a lightweight city sim that produces meaningful growth loops on mobile hardware without heavy graphics or content.",
  "project.pocket-metropolis.role":
    "Solo developer — system design, mechanics, and Godot implementation.",
  "project.pocket-metropolis.architecture":
    "Modular Godot scenes per system (roads, housing, education, services) coordinated by a probability-driven update loop. Data-oriented parameters kept separate from behaviour for fast iteration.",
  "project.pocket-metropolis.challenges":
    "Keeping the simulation responsive on mobile while systems remain composable enough for new mechanics to plug in without rewrites.",
  "project.pocket-metropolis.practices":
    "Scene-based OOP composition, tight iteration on gameplay parameters, and profiling to catch cost hot spots.",

  "project.risiko-web.title": "Risiko",
  "project.risiko-web.tagline": "Web-based multiplayer strategy game (Godot + WebRTC)",
  "project.risiko-web.body":
    "Web port of a classic strategy board game with real-time multiplayer, peer-to-peer networking, and synchronized game state.",
  "project.risiko-web.problem":
    "Bring a turn-based strategy game to the browser with real-time multiplayer, without running a dedicated authoritative server.",
  "project.risiko-web.role":
    "Solo developer — networking, state model, and game rules.",
  "project.risiko-web.architecture":
    "Godot with Web export. WebRTC data channels for lobby, turn signalling, and state sync. Host-authoritative action model with deterministic broadcast so peers reconstruct identical state.",
  "project.risiko-web.challenges":
    "Reconciling turn state across peers, handling disconnects and re-joins, and reducing perceived latency on shared actions.",
  "project.risiko-web.practices":
    "Small testable modules, explicit action logs, and reproducible state transitions for debugging desync.",

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
  "timeline.freud.meta":
    "Technical Industrial Institute · High-school diploma in Informatics",
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
    "Sviluppo applicazioni web e sistemi software con Laravel, Java, JavaScript e strumenti di sviluppo moderni — focalizzato su architettura backend, progettazione di database e sviluppo di applicazioni scalabili.",
  "hero.cta.projects": "Vedi i progetti",
  "hero.cta.contact": "Contattami",

  "hero.currently.label": "@currently",
  "hero.currently.line1":
    "Pocket Metropolis (sim mobile in Godot) — in corso",

  "about.title": "Chi sono",
  "about.body1":
    "Full Stack Software Developer con basi in programmazione orientata agli oggetti, architettura MVC e database relazionali. Progetto e realizzo applicazioni web end-to-end — dallo schema del database e logica backend fino alle interfacce responsive — usando Laravel, Java, JavaScript e MySQL.",
  "about.body2":
    "Tra i lavori recenti un'app Laravel di e-commerce sviluppata in team (Presto.it) con MVC e accessi basati su ruoli, insieme a progetti Godot che esplorano sistemi modulari, meccaniche probabilistiche e multiplayer peer-to-peer via WebRTC. Punto a un'architettura chiara, codice manutenibile e funzionalità che si comportano in modo prevedibile in condizioni reali.",
  "about.body3":
    "Sto esplorando lo sviluppo assistito dall'IA con flussi strutturati, sicuri e orientati all'affidabilità — usando l'IA per pianificazione, debugging e prototipazione, mantenendo mie le decisioni ingegneristiche.",
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
  "skills.group.backend": "Backend",
  "skills.group.frontend": "Frontend",
  "skills.group.gamedev": "Sviluppo giochi",
  "skills.group.methodologies": "Metodologie",
  "skills.group.tools": "Strumenti & workflow",

  "projects.title": "Progetti",
  "projects.lede":
    "Consegna web full-stack affiancata a progetti di sviluppo giochi in corso.",

  "project.meta.problem": "Problema",
  "project.meta.role": "Ruolo",
  "project.meta.architecture": "Architettura",
  "project.meta.challenges": "Sfide",
  "project.meta.practices": "Pratiche",

  "project.presto-it.title": "Presto.it",
  "project.presto-it.tagline": "Applicazione e-commerce · Team di 4 · 2026",
  "project.presto-it.body":
    "Piattaforma e-commerce full-stack sviluppata durante il bootcamp Hackademy+. Applicata l'architettura MVC per mantenere modelli, viste e controller ben separati tra backend e frontend.",
  "project.presto-it.problem":
    "Realizzare un sito e-commerce funzionante — con navigazione utente, annunci e moderazione basata sui ruoli — entro il tempo previsto dal bootcamp.",
  "project.presto-it.role":
    "Contributore backend e frontend in un team di quattro persone. Responsabilità condivise sul livello MVC, sullo schema relazionale e sulla consegna.",
  "project.presto-it.architecture":
    "Laravel MVC con modelli Eloquent, controller e viste Blade. Schema MySQL per utenti, categorie e annunci con accesso basato sui ruoli per la moderazione. UI responsive con Bootstrap.",
  "project.presto-it.challenges":
    "Coordinare un workflow Git condiviso tra quattro contributori, allineare i modelli dati tra funzionalità e mantenere una UI coerente mentre lo schema evolveva.",
  "project.presto-it.practices":
    "Workflow Git a branch, code review, consegna iterativa e testing manuale prima del rilascio.",

  "project.pocket-metropolis.title": "Pocket Metropolis",
  "project.pocket-metropolis.tagline": "Simulatore di città per mobile (Godot)",
  "project.pocket-metropolis.body":
    "Simulazione cittadina minimalista per dispositivi mobile che modella crescita della popolazione, domanda abitativa, valore dei terreni e infrastrutture su sistemi componibili.",
  "project.pocket-metropolis.problem":
    "Progettare un city sim leggero che produca cicli di crescita significativi su hardware mobile, senza grafica o contenuti pesanti.",
  "project.pocket-metropolis.role":
    "Sviluppatore singolo — game design, meccaniche e implementazione in Godot.",
  "project.pocket-metropolis.architecture":
    "Scene modulari Godot per ogni sistema (strade, abitazioni, istruzione, servizi) coordinate da un loop di aggiornamento probabilistico. Parametri data-oriented separati dal comportamento per iterare velocemente.",
  "project.pocket-metropolis.challenges":
    "Mantenere la simulazione reattiva su mobile e allo stesso tempo tenere i sistemi componibili, in modo da poter aggiungere nuove meccaniche senza riscritture.",
  "project.pocket-metropolis.practices":
    "Composizione OOP a scene, iterazione stretta sui parametri di gioco e profiling per intercettare gli hot spot.",

  "project.risiko-web.title": "Risiko",
  "project.risiko-web.tagline": "Gioco strategico multiplayer web (Godot + WebRTC)",
  "project.risiko-web.body":
    "Porting web di un classico gioco strategico da tavolo con multiplayer in tempo reale, networking peer-to-peer e stato di gioco sincronizzato.",
  "project.risiko-web.problem":
    "Portare un gioco strategico a turni nel browser con multiplayer in tempo reale, senza dover gestire un server autoritativo dedicato.",
  "project.risiko-web.role":
    "Sviluppatore singolo — networking, modello dello stato e regole di gioco.",
  "project.risiko-web.architecture":
    "Godot con export Web. Canali dati WebRTC per lobby, gestione dei turni e sincronizzazione. Modello host-authoritative con broadcast deterministico delle azioni per ricostruire lo stesso stato su ogni peer.",
  "project.risiko-web.challenges":
    "Riconciliare lo stato dei turni tra peer, gestire disconnessioni e rientri, ridurre la latenza percepita sulle azioni condivise.",
  "project.risiko-web.practices":
    "Moduli piccoli e testabili, log espliciti delle azioni e transizioni di stato riproducibili per il debug dei desync.",

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
  "timeline.freud.role": "Diploma in Informatica",
  "timeline.freud.org": "Scuola Paritaria S. Freud",
  "timeline.freud.meta":
    "Istituto tecnico industriale · Diploma di scuola superiore in Informatica",
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
