function projectCard(project) {
  const links = [
    project.github ? '<a href="' + project.github + '" target="_blank" rel="noreferrer">GitHub ↗</a>' : '',
    project.demo ? '<a href="' + project.demo + '" target="_blank" rel="noreferrer">Live demo ↗</a>' : ''
  ].join('');
  return `
    <article class="project-card fade" data-category="${project.category.join(' ')}">
      <div class="project-meta">${project.eyebrow}</div>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      <div class="impact">${project.impact}</div>
      <div class="tags">${project.stack.map(x => '<span>' + x + '</span>').join('')}</div>
      <div class="card-links">${links}</div>
    </article>`;
}

function renderProjects(targetId, filter = null) {
  const target = document.getElementById(targetId);
  if (!target) return;
  const projects = filter ? portfolioData.projects.filter(filter) : portfolioData.projects;
  target.innerHTML = projects.map(projectCard).join('');
}

function renderExperience() {
  const target = document.getElementById('experience-list');
  if (!target) return;
  target.innerHTML = portfolioData.experience.map(item => `
    <div class="exp-row fade">
      <strong>${item.org}</strong>
      <span>${item.role}</span>
      <p>${item.text}</p>
    </div>`).join('');
}

function renderCommunity() {
  const target = document.getElementById('community-list');
  if (!target) return;
  target.innerHTML = portfolioData.community.map(item => `
    <article class="community-card fade">
      <small>${item.label}</small>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>`).join('');
}

function initFilters() {
  const filters = document.querySelectorAll('.filter');
  if (!filters.length) return;
  filters.forEach(btn => btn.addEventListener('click', () => {
    filters.forEach(x => x.classList.remove('active'));
    btn.classList.add('active');
    const key = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      card.classList.toggle('hidden', key !== 'all' && !card.dataset.category.includes(key));
    });
  }));
}

function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold:.08});
  document.querySelectorAll('.fade').forEach(el => observer.observe(el));
}

document.addEventListener('DOMContentLoaded', () => {
  renderProjects('project-list');
  renderProjects('sports-projects', p => p.category.includes('sports'));
  renderExperience();
  renderCommunity();
  initFilters();
  requestAnimationFrame(initReveal);
});