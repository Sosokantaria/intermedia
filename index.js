const paths = {
  header: "components/header/header.html",
  footer: "components/footer/footer.html",
  firstSection: "components/firstSection/first-section.html",
  secondSection: "components/secondSection/second-section.html",
  thirdSection: "components/thirdSection/third-section.html",
};

async function loadComponent(path, containerId) {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const container = document.getElementById(containerId);
    if (container) {
      container.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading ${path}:`, error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  await loadComponent(paths.header, "header-container");
  await loadComponent(paths.firstSection, "first-section-container");
  await loadComponent(paths.secondSection, "second-section-container");
  await loadComponent(paths.thirdSection, "third-section-container");
  await loadComponent(paths.footer, "footer-container");
});
