/* Shared rendering and small progressive interactions. No dependencies. */
"use strict";

const escapeHTML = value => String(value ?? "").replace(/[&<>"']/g, character => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
})[character]);

// Content is local, but disallow executable URL schemes when links are added.
function safeURL(value) {
  if (!value) return "";
  try {
    const url = new URL(value, document.baseURI);
    return ["http:", "https:", "file:", "mailto:"].includes(url.protocol) ? escapeHTML(value) : "";
  } catch {
    return "";
  }
}

function diagramNode(label, note = "", accent = false) {
  return `<div class="diagram-node${accent ? " accent-node" : ""}"><span>${label}</span>${note ? `<small>${note}</small>` : ""}</div>`;
}
const arrow = '<div class="diagram-arrow" aria-hidden="true">↓</div>';

// Schematics explain supplied project facts; they are not product screenshots or measured charts.
const diagrams = {
  rag: {
    label: "Retrieval → generation",
    body: diagramNode("Question", "African basketball") + arrow +
      diagramNode("Retrieve context", "Qdrant / embeddings") + arrow +
      diagramNode("Generate an answer", "Language model", true) +
      '<div class="diagram-stats"><div><strong>53</strong><span>documents</span></div><div><strong>159</strong><span>benchmark questions</span></div></div>',
    caption: "Conceptual RAG flow · Evaluated with LLM-as-Judge, Exact Match & F1"
  },
  air: {
    label: "From readings to context",
    body: diagramNode("PurpleAir measurements", "PM2.5 / Channels A + B") + arrow +
      diagramNode("Quality control & correction", "Bias / humidity / time") + arrow +
      diagramNode("Neighborhood exposure", "Census Block Groups", true) +
      '<div class="visual-note">Sensor-level measurements + demographic context</div>',
    caption: "Analysis workflow schematic · No illustrative pollution measurements"
  },
  cloud: {
    label: "Infrastructure as code",
    body: diagramNode("Define", "OpenTofu") + arrow + diagramNode("Automate", "GitHub Actions") + arrow +
      '<div class="split-nodes">' + diagramNode("Stream Analytics", "Azure", true) + diagramNode("Storage", "Azure", true) + '</div>' +
      '<div class="visual-note">My focus: streaming + storage automation</div>',
    caption: "Contribution schematic · Husk Power Systems cloud practicum"
  },
  league: {
    label: "League operations / Data flow",
    body: '<div class="split-nodes">' + diagramNode("Players", "Registration") + diagramNode("Teams", "Assignment") + '</div>' + arrow +
      diagramNode("Games", "Schedule + scores", true) + arrow +
      diagramNode("Standings", "Computed from game data") +
      '<div class="visual-note">React → Express → PostgreSQL</div>',
    caption: "Conceptual application workflow · Demo uses synthetic data"
  },
  model: {
    label: "Model assumptions → outcomes",
    body: diagramNode("Team strength", "Elo ratings") + arrow +
      diagramNode("Goal model", "Poisson") + arrow +
      diagramNode("Simulations", "Possible outcomes", true) +
      '<div class="visual-note">Match wins / Championship / Player goals</div>',
    caption: "Modeling approach schematic · No forecast values shown"
  }
};

function projectVisual(project) {
  if (project.image && safeURL(project.image.src)) {
    return `<figure class="project-visual has-image"><img src="${safeURL(project.image.src)}" alt="${escapeHTML(project.image.alt)}" loading="lazy" decoding="async">${project.image.caption ? `<figcaption>${escapeHTML(project.image.caption)}</figcaption>` : ""}</figure>`;
  }
  const visual = diagrams[project.visual];
  if (!visual) return "";
  return `<figure class="project-visual visual-${escapeHTML(project.visual)}"><div class="visual-label"><span>${visual.label}</span><span aria-hidden="true">↗</span></div><div class="diagram-body">${visual.body}</div><figcaption>${visual.caption}</figcaption></figure>`;
}

function projectStory(project, index) {
  const links = [["github", "View code"], ["demo", "Live demo"]]
    .filter(([key]) => safeURL(project[key]))
    .map(([key, label]) => `<a href="${safeURL(project[key])}" aria-label="${label}: ${escapeHTML(project.title)}">${label} <span aria-hidden="true">↗</span></a>`).join("");
  return `<article class="project" id="project-${escapeHTML(project.id)}" data-categories="${escapeHTML(project.category.join(" "))}" aria-labelledby="title-${escapeHTML(project.id)}">
    <div class="project-layout">
      <div class="project-copy">
        <div class="project-meta">${String(index + 1).padStart(2, "0")} / ${escapeHTML(project.eyebrow)}</div>
        <h3 id="title-${escapeHTML(project.id)}">${escapeHTML(project.title)}</h3>
        <p class="project-subtitle">${escapeHTML(project.subtitle)}</p>
        <p class="project-summary">${escapeHTML(project.summary)}</p>
        <p class="project-outcome">${escapeHTML(project.outcome)}</p>
        <ul class="stack" aria-label="Technologies">${project.stack.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>
        ${links ? `<div class="project-links">${links}</div>` : ""}
      </div>
      ${projectVisual(project)}
    </div>
    ${project.details?.length ? `<details class="project-details"><summary>Technical notes<span class="sr-only"> for ${escapeHTML(project.title)}</span></summary><div class="detail-grid">${project.details.map(detail => `<div><h4>${escapeHTML(detail.label)}</h4><p>${escapeHTML(detail.text)}</p></div>`).join("")}</div></details>` : ""}
  </article>`;
}

function renderProjects(id, predicate) {
  const target = document.getElementById(id);
  if (target) target.innerHTML = portfolioData.projects.filter(predicate).map(projectStory).join("");
}

function renderExperience() {
  const target = document.getElementById("experience-list");
  if (!target) return;
  target.innerHTML = portfolioData.experience.map(item => `<article class="exp-row"><div><h3>${escapeHTML(item.org)}</h3><span class="exp-role">${escapeHTML(item.role)}</span></div><div><p>${escapeHTML(item.text)}</p><span class="exp-tags">${escapeHTML(item.tags)}</span></div></article>`).join("");
}

function renderCommunity() {
  const target = document.getElementById("community-list");
  if (!target) return;
  const items = portfolioData.community.filter(item => target.dataset.view !== "compact" || item.compact);
  target.innerHTML = items.map(item => `<article class="community-item"><span class="eyebrow">${escapeHTML(item.label)}</span><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.text)}</p></article>`).join("");
}

function initFilters() {
  const buttons = [...document.querySelectorAll("[data-filter]")];
  const projects = [...document.querySelectorAll("#project-list .project")];
  const count = document.getElementById("project-count");
  if (!count) return;
  function filterProjects(key) {
    buttons.forEach(button => button.setAttribute("aria-pressed", String(button.dataset.filter === key)));
    let visible = 0;
    projects.forEach(project => {
      project.hidden = key !== "all" && !project.dataset.categories.split(" ").includes(key);
      if (!project.hidden) visible++;
    });
    count.textContent = `${String(visible).padStart(2, "0")} project${visible === 1 ? "" : "s"}`;
  }
  buttons.forEach(button => button.addEventListener("click", () => filterProjects(button.dataset.filter)));
  filterProjects("all");
}

function initNavigation() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("navigation");
  if (!toggle || !nav) return;
  const mobile = window.matchMedia("(max-width: 760px)");
  const setOpen = open => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
  };
  const sync = () => {
    toggle.hidden = !mobile.matches;
    setOpen(false);
  };
  document.querySelector(".site-header").classList.add("nav-enhanced");
  toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
  nav.addEventListener("click", event => {
    const link = event.target.closest("a");
    if (!link) return;
    setOpen(false);
    // Move keyboard focus out of the closed menu to the destination section.
    if (mobile.matches && link.hash && link.pathname === location.pathname) {
      const destination = document.getElementById(link.hash.slice(1));
      if (destination) {
        destination.setAttribute("tabindex", "-1");
        destination.focus({ preventScroll: true });
      }
    }
  });
  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
  document.addEventListener("click", event => {
    if (!event.target.closest(".site-header")) setOpen(false);
  });
  mobile.addEventListener("change", sync);
  sync();
}

function renderProfileLinks() {
  const profile = portfolioData.profile;
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.href = "mailto:" + profile.email;
    link.textContent = profile.email + " ↗";
  });
  document.querySelectorAll('a[href="https://github.com/joelmaison"]').forEach(link => {
    if (safeURL(profile.github)) link.href = profile.github;
  });
  document.querySelectorAll("[data-contact-links]").forEach(target => {
    [["linkedin", "LinkedIn"], ["resume", "Résumé"]].forEach(([key, label]) => {
      if (!safeURL(profile[key])) return;
      const link = document.createElement("a");
      link.className = "text-link";
      link.href = profile[key];
      link.textContent = label + " ↗";
      target.append(link);
    });
  });
}

renderProjects("project-list", project => project.featured);
renderProjects("sports-projects", project => project.category.includes("sports"));
renderExperience();
renderCommunity();
renderProfileLinks();
initFilters();
initNavigation();
document.querySelectorAll("[data-year]").forEach(element => { element.textContent = new Date().getFullYear(); });