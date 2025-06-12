async function loadComponent(container, path) {
  const res = await fetch(path);
  container.innerHTML = await res.text();
}

export async function initializeLayout() {
  const header = document.querySelector('.layout__header');
  const main = document.querySelector('.layout__main');
  const footer = document.querySelector('.layout__footer');
  if (header) await loadComponent(header, 'components/layout/header/header.html');
  if (main) {
    await loadComponent(main, 'pages/home/home.html');
    const { initialize } = await import('./pages/home/home.js');
    await initialize();
  }
  if (footer) await loadComponent(footer, 'components/layout/footer/footer.html');
}

