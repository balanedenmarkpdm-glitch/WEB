const body = document.body;
const themeToggle = document.getElementById('themeToggle');
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mobileBackdrop = document.getElementById('mobileBackdrop');
const toast = document.getElementById('toast');
const projectModal = document.getElementById('projectModal');
const projectFrame = document.getElementById('projectFrame');
const projectModalTitle = document.getElementById('projectModalTitle');
const closeProjectModalBtn = document.getElementById('closeProjectModal');

function createProjectThumb(title, variant) {
  const svg = {
    'Act 1 Midterm': `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
        <rect width="640" height="420" fill="#e9edf1"/>
        <rect x="20" y="30" width="280" height="300" rx="10" fill="#f6f7f8" stroke="#d5d9dd"/>
        <rect x="40" y="60" width="110" height="12" rx="6" fill="#d7dce2"/>
        <rect x="40" y="90" width="170" height="10" rx="5" fill="#dfe5e9"/>
        <rect x="40" y="120" width="200" height="10" rx="5" fill="#dfe5e9"/>
        <rect x="40" y="160" width="220" height="10" rx="5" fill="#dfe5e9"/>
        <rect x="40" y="190" width="140" height="10" rx="5" fill="#dfe5e9"/>
        <rect x="40" y="230" width="190" height="10" rx="5" fill="#dfe5e9"/>
        <rect x="40" y="260" width="150" height="10" rx="5" fill="#dfe5e9"/>
        <rect x="320" y="30" width="300" height="300" rx="12" fill="#d9f4ee" stroke="#c9d9d4"/>
        <rect x="340" y="52" width="190" height="18" rx="8" fill="#0f4f73" opacity="0.12"/>
        <rect x="340" y="82" width="180" height="110" rx="8" fill="#f5f0e7"/>
        <rect x="340" y="206" width="230" height="36" rx="8" fill="#65a9d7" opacity="0.75"/>
        <rect x="340" y="256" width="200" height="34" rx="8" fill="#8ac0dd" opacity="0.78"/>
        <circle cx="541" cy="147" r="18" fill="#2ca866" opacity="0.7"/>
      </svg>
    `,
    'Act 3 Midterm': `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
        <rect width="640" height="420" fill="#d4d7dc"/>
        <rect x="30" y="40" width="580" height="300" rx="14" fill="#f5f2eb" stroke="#d6d3cc"/>
        <rect x="30" y="40" width="580" height="54" rx="14" fill="#3fb4b8"/>
        <rect x="54" y="63" width="190" height="18" rx="9" fill="#dffaf6" opacity="0.8"/>
        <rect x="345" y="110" width="210" height="110" rx="10" fill="#0d5d8a" opacity="0.18"/>
        <rect x="70" y="120" width="200" height="145" rx="10" fill="#f5f5f3" stroke="#d8d7d2"/>
        <rect x="90" y="152" width="160" height="14" rx="7" fill="#d5d8d8"/>
        <rect x="90" y="182" width="120" height="12" rx="6" fill="#dfe4e8"/>
        <rect x="90" y="207" width="140" height="12" rx="6" fill="#dfe4e8"/>
        <rect x="340" y="130" width="220" height="24" rx="10" fill="#3a7ed0" opacity="0.5"/>
        <rect x="340" y="170" width="170" height="18" rx="9" fill="#b2d8fb" opacity="0.7"/>
        <rect x="340" y="206" width="210" height="18" rx="9" fill="#dfeefe" opacity="0.8"/>
      </svg>
    `,
    'Act 4 Midterm': `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
        <rect width="640" height="420" fill="#d9dfe7"/>
        <rect x="30" y="36" width="580" height="306" rx="14" fill="#f5f7fa" stroke="#d4d9e1"/>
        <rect x="56" y="64" width="150" height="18" rx="9" fill="#d0dce8"/>
        <rect x="56" y="110" width="200" height="12" rx="6" fill="#e4eaf1"/>
        <rect x="56" y="134" width="170" height="12" rx="6" fill="#e4eaf1"/>
        <rect x="56" y="164" width="210" height="12" rx="6" fill="#e4eaf1"/>
        <rect x="56" y="188" width="190" height="12" rx="6" fill="#e4eaf1"/>
        <rect x="295" y="84" width="260" height="180" rx="12" fill="#dfe9f9" stroke="#c6d7f0"/>
        <rect x="325" y="108" width="190" height="16" rx="8" fill="#5f82c8" opacity="0.6"/>
        <rect x="325" y="142" width="140" height="12" rx="6" fill="#b9caec"/>
        <rect x="325" y="170" width="160" height="12" rx="6" fill="#b9caec"/>
        <rect x="325" y="196" width="120" height="12" rx="6" fill="#b9caec"/>
      </svg>
    `,
    'Act 1 Finals': `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
        <defs>
          <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#1e2f4c"/>
            <stop offset="50%" stop-color="#5a4a7a"/>
            <stop offset="100%" stop-color="#d06d70"/>
          </linearGradient>
        </defs>
        <rect width="640" height="420" fill="url(#g1)"/>
        <rect x="70" y="82" width="500" height="250" rx="18" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)"/>
        <text x="320" y="220" text-anchor="middle" font-size="38" font-family="Arial, sans-serif" font-weight="700" fill="#f4f7ff" letter-spacing="2">ACT 1 FINALS</text>
        <rect x="143" y="150" width="210" height="18" rx="9" fill="rgba(255,255,255,0.55)"/>
        <rect x="143" y="184" width="260" height="12" rx="6" fill="rgba(255,255,255,0.45)"/>
        <rect x="143" y="212" width="200" height="12" rx="6" fill="rgba(255,255,255,0.45)"/>
      </svg>
    `,
    'Act 2 Finals': `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
        <rect width="640" height="420" fill="#edf0f4"/>
        <rect x="50" y="40" width="540" height="300" rx="12" fill="#f6f7f8" stroke="#dfe3e8"/>
        <rect x="76" y="66" width="120" height="14" rx="7" fill="#dfe4ea"/>
        <rect x="76" y="96" width="170" height="12" rx="6" fill="#e7ebf0"/>
        <rect x="76" y="128" width="120" height="12" rx="6" fill="#e7ebf0"/>
        <rect x="76" y="170" width="170" height="96" rx="10" fill="#f4f8f9" stroke="#dfe6e8"/>
        <rect x="280" y="120" width="230" height="160" rx="12" fill="#d8f6ee" stroke="#b8e9d8"/>
        <rect x="302" y="146" width="160" height="16" rx="8" fill="#5dbd95" opacity="0.4"/>
        <rect x="302" y="180" width="180" height="12" rx="6" fill="#98d6bb"/>
        <rect x="302" y="210" width="140" height="12" rx="6" fill="#98d6bb"/>
        <circle cx="455" cy="193" r="18" fill="#3bc67d" opacity="0.7"/>
      </svg>
    `,
    'Act 3 Finals': `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
        <defs>
          <linearGradient id="g3" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#1f427d"/>
            <stop offset="50%" stop-color="#5874d7"/>
            <stop offset="100%" stop-color="#d38cc3"/>
          </linearGradient>
        </defs>
        <rect width="640" height="420" fill="url(#g3)"/>
        <rect x="100" y="92" width="440" height="230" rx="18" fill="rgba(255,255,255,0.10)" stroke="rgba(255,255,255,0.15)"/>
        <text x="320" y="220" text-anchor="middle" font-size="40" font-family="Arial, sans-serif" font-weight="700" fill="#f5f7ff" letter-spacing="2">ACT 3 FINALS</text>
        <rect x="145" y="128" width="170" height="18" rx="9" fill="rgba(255,255,255,0.68)"/>
        <rect x="145" y="162" width="240" height="12" rx="6" fill="rgba(255,255,255,0.52)"/>
        <rect x="145" y="188" width="190" height="12" rx="6" fill="rgba(255,255,255,0.52)"/>
        <rect x="145" y="222" width="110" height="68" rx="12" fill="rgba(255,255,255,0.12)"/>
        <rect x="266" y="222" width="110" height="68" rx="12" fill="rgba(255,255,255,0.08)"/>
      </svg>
    `,
    'Act 4 Finals': `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 420">
        <defs>
          <linearGradient id="g4" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#2a3a78"/>
            <stop offset="50%" stop-color="#7b5a9c"/>
            <stop offset="100%" stop-color="#d95f6d"/>
          </linearGradient>
        </defs>
        <rect width="640" height="420" fill="url(#g4)"/>
        <rect x="110" y="95" width="420" height="230" rx="18" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)"/>
        <text x="320" y="220" text-anchor="middle" font-size="40" font-family="Arial, sans-serif" font-weight="700" fill="#f7f9ff" letter-spacing="2">ACT 4 FINALS</text>
        <rect x="145" y="128" width="175" height="18" rx="9" fill="rgba(255,255,255,0.68)"/>
        <rect x="145" y="162" width="230" height="12" rx="6" fill="rgba(255,255,255,0.52)"/>
        <rect x="145" y="188" width="150" height="12" rx="6" fill="rgba(255,255,255,0.52)"/>
        <rect x="145" y="222" width="105" height="70" rx="12" fill="rgba(255,255,255,0.12)"/>
        <rect x="260" y="222" width="105" height="70" rx="12" fill="rgba(255,255,255,0.08)"/>
      </svg>
    `
  };

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg[title] || svg['Act 1 Finals'])}`;
}

const portfolioProjects = [
  {
    title: 'Act 1 Midterm',
    meta: 'HTML • Lists & Layout',
    path: 'projects/act-1-midterm/Balane.html',
    image: createProjectThumb('Act 1 Midterm')
  },
  {
    title: 'Act 3 Midterm',
    meta: 'HTML • CSS • Web Project',
    path: 'projects/act-3-midterm/profile.html',
    image: createProjectThumb('Act 3 Midterm')
  },
  {
    title: 'Act 4 Midterm',
    meta: 'HTML • CSS • Web Project',
    path: 'projects/act-4-midterm/Home.html',
    image: createProjectThumb('Act 4 Midterm')
  },
  {
    title: 'Act 1 Finals',
    meta: 'JavaScript • DOM Demo',
    path: 'projects/act-1-finals/index.html',
    image: createProjectThumb('Act 1 Finals')
  },
  {
    title: 'Act 2 Finals',
    meta: 'HTML • CSS • JavaScript',
    path: 'projects/act-2-finals/index.html',
    image: createProjectThumb('Act 2 Finals')
  },
  {
    title: 'Act 3 Finals',
    meta: 'HTML • CSS • JavaScript',
    path: 'projects/act-3-finals/index.html',
    image: createProjectThumb('Act 3 Finals')
  },
  {
    title: 'Act 4 Finals',
    meta: 'HTML • CSS • JavaScript',
    path: 'projects/act-4-finals/index.html',
    image: createProjectThumb('Act 4 Finals')
  }
];

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = portfolioProjects.map((project) => {
    const imageMarkup = project.image
      ? `<img src="${project.image}" alt="${project.title} preview">`
      : `<div class="project-image__fallback">${project.title.replace('Act ', 'Act ')}</div>`;

    return `
      <article class="project-card">
        <div class="project-image ${project.image ? '' : 'project-image--fallback'}">
          ${imageMarkup}
        </div>
        <div class="project-info">
          <div>
            <h3>${project.title}</h3>
            <p>${project.meta}</p>
          </div>
          <button class="view-project" data-project="${project.title}" data-url="${project.path}" aria-label="Open ${project.title} preview">
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
        </div>
      </article>
    `;
  }).join('');
}

function setTheme(light) {
  body.classList.toggle('light', light);
  localStorage.setItem('portfolio-theme', light ? 'light' : 'dark');
}

function closeSidebar() {
  if (!sidebar) return;
  sidebar.classList.remove('open');
  if (mobileBackdrop) {
    mobileBackdrop.classList.remove('show');
  }
}

function openProjectModal(title, url) {
  if (!projectModal || !projectFrame || !projectModalTitle) return;
  projectModalTitle.textContent = title;
  projectFrame.src = url;
  projectModal.classList.add('open');
  projectModal.setAttribute('aria-hidden', 'false');
  body.classList.add('modal-open');
}

function closeProjectModal() {
  if (!projectModal || !projectFrame) return;
  projectFrame.src = '';
  projectModal.classList.remove('open');
  projectModal.setAttribute('aria-hidden', 'true');
  body.classList.remove('modal-open');
}

function showToast(message) {
  if (!toast) return;
  toast.querySelector('span').textContent = message;
  toast.classList.add('show');
  clearTimeout(window.__toast);
  window.__toast = setTimeout(() => toast.classList.remove('show'), 2200);
}

if (themeToggle) {
  setTheme(localStorage.getItem('portfolio-theme') === 'light');
  themeToggle.addEventListener('click', () => {
    const lightModeEnabled = !body.classList.contains('light');
    setTheme(lightModeEnabled);
    showToast(lightModeEnabled ? 'Light mode enabled' : 'Dark mode enabled');
  });
}

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    if (mobileBackdrop) {
      mobileBackdrop.classList.toggle('show');
    }
  });
}

if (mobileBackdrop) {
  mobileBackdrop.addEventListener('click', closeSidebar);
}

document.querySelectorAll('.nav-item').forEach((link) => {
  link.addEventListener('click', () => {
    if (window.innerWidth <= 900) closeSidebar();
  });
});

renderProjects();

document.querySelectorAll('.view-project').forEach((button) => {
  button.addEventListener('click', () => {
    const title = button.dataset.project;
    const url = button.dataset.url;
    openProjectModal(title, url);
    showToast(`${title} preview opened`);
  });
});

if (closeProjectModalBtn) {
  closeProjectModalBtn.addEventListener('click', closeProjectModal);
}

if (projectModal) {
  projectModal.addEventListener('click', (event) => {
    if (event.target.matches('[data-close-modal="true"]')) {
      closeProjectModal();
    }
  });
}

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (projectModal && projectModal.classList.contains('open')) {
      closeProjectModal();
      return;
    }
    closeSidebar();
  }
});
