const config = {
  paths: {
    components: {
      header: 'components/header/header.html',
      footer: 'components/footer/footer.html',
      loader: 'components/loader.html'
    }
  },
  selectors: {
    header: '#header-container',
    footer: '#footer-container'
  }
};

async function loadComponent(name, container) {
  try {
    const loaderResponse = await fetch(config.paths.components.loader);
    const loaderHtml = await loaderResponse.text();
    container.innerHTML = loaderHtml;
    
    const componentPath = config.paths.components[name];
    const response = await fetch(componentPath);
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(`Error loading ${name}:`, error);
    container.innerHTML = `<div class="error">Failed to load ${name}</div>`;
  }
}

async function init() {
  if (document.readyState === 'loading') {
    await new Promise(resolve => document.addEventListener('DOMContentLoaded', resolve));
  }
  const header = document.querySelector(config.selectors.header);
  const footer = document.querySelector(config.selectors.footer);
  if (header) await loadComponent('header', header);
  if (footer) await loadComponent('footer', footer);
}

init();
