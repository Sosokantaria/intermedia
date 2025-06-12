import { initializeHeader } from "./header/header.js";

async function loadComponent(container, path) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}: ${response.status}`);
    }
    const html = await response.text();
    container.innerHTML = html;
    return true;
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
    return false;
  }
}

export async function initializeLayout() {
  const app = document.getElementById("app");
  if (!app) {
    console.error("App container not found!");
    return;
  }

  const layoutLoaded = await loadComponent(
    app,
    "./components/layout/layout.html"
  );
  if (!layoutLoaded) return;

  const headerContainer = document.querySelector(".layout__header");
  if (headerContainer) {
    await loadComponent(
      headerContainer,
      "./components/layout/header/header.html"
    );
    await initializeHeader();
  }

  const mainContainer = document.querySelector(".layout__main");
  if (mainContainer) {
    await loadComponent(mainContainer, "./pages/home/home.html");
    try {
      const { initialize } = await import("../../pages/home/home.js");
      await initialize();
    } catch (error) {
      console.error("Failed to initialize home page:", error);
    }
  }

  const footerContainer = document.querySelector(".layout__footer");
  if (footerContainer) {
    await loadComponent(
      footerContainer,
      "./components/layout/footer/footer.html"
    );
  }
}
