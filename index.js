const paths = {
  header: "components/header/header.html",
  footer: "components/footer/footer.html",
  firstSection: "components/firstSection/first-section.html",
  secondSection: "components/secondSection/second-section.html",
  thirdSection: "components/thirdSection/third-section.html",
  foursSection: "components/foursSection/fours-section.html",
};

async function loadSection(sectionId, htmlPath) {
  try {
    const response = await fetch(htmlPath);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const html = await response.text();
    const container = document.getElementById(sectionId);
    if (container) {
      container.innerHTML = html;
    }
  } catch (error) {
    console.error(`Error loading section ${sectionId}:`, error);
  }
}

async function initializeSections() {
  await loadSection("header-container", "components/header/header.html");
  await loadSection("first-section-container", "components/firstSection/first-section.html");
  await loadSection("second-section-container", "components/secondSection/second-section.html");
  await loadSection("third-section-container", "components/thirdSection/third-section.html");
  await loadSection("fours-section-container", "components/foursSection/fours-section.html");
  await loadSection("footer-container", "components/footer/footer.html");
}

document.addEventListener("DOMContentLoaded", initializeSections);
