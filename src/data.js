/**
 * Source-of-truth content for the portfolio.
 *
 * Stable shapes documented in project_overview.md — keep these fields.
 * Do NOT add new metadata fields unless a UI component actually consumes them.
 *
 * Project shape: { id, status, year, stack, links?, featured }
 * SkillGroup:    { id, items }
 * TimelineEntry: { id, start, end, url? }
 */

export const PROJECTS = [
  {
    id: "presto-it",
    status: "shipped",
    year: "2026",
    stack: ["PHP", "Laravel", "MySQL", "Bootstrap", "JavaScript"],
    featured: true,
  },
  {
    id: "pocket-metropolis",
    status: "in-progress",
    year: "",
    stack: ["Godot", "Mobile", "Sim mechanics"],
    featured: true,
  },
  {
    id: "risiko-web",
    status: "in-progress",
    year: "",
    stack: ["Godot", "WebRTC", "Multiplayer", "Web export"],
    featured: true,
  },
];

export const SKILL_GROUPS = [
  {
    id: "languages",
    items: ["Java", "JavaScript", "PHP", "Python", "C#", "Lua", "HTML/CSS"],
  },
  {
    id: "backend",
    items: ["Laravel", "MySQL", "REST APIs", "Authentication"],
  },
  {
    id: "frontend",
    items: ["HTML5", "CSS", "JavaScript", "jQuery", "Bootstrap"],
  },
  {
    id: "gamedev",
    items: ["Godot", "Unity"],
  },
  {
    id: "methodologies",
    items: ["Agile", "Scrum", "OOP", "MVC", "Responsive Design"],
  },
  {
    id: "tools",
    items: ["Git", "Cursor", "Visual Studio Code", "Eclipse", "Miro"],
  },
];

export const TIMELINE = [
  {
    id: "hackademy",
    start: "2026-02",
    end: "2026-06",
    url: "https://aulab.it/hackademy",
  },
  {
    id: "unicam",
    start: "2021-09",
    end: "2024-01",
    url: "https://www.unicam.it/",
  },
  {
    id: "eximia",
    start: "2020-02",
    end: "2020-04",
    url: undefined,
  },
  {
    id: "freud",
    start: "2016",
    end: "2020",
    url: "https://www.istitutofreud.it/",
  },
];
