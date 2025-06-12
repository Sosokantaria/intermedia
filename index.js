import { initializeTrendingNews } from './components/sections/trendingNews/trending-news.js';

const paths = {
  header: "components/layout/header/header.html",
  footer: "components/layout/footer/footer.html",
  featuredNews: "components/sections/featuredNews/featured-news.html",
  latestNews: "components/sections/latestNews/latest-news.html",
  categoryNews: "components/sections/categoryNews/category-news.html",
  trendingNews: "components/sections/trendingNews/trending-news.html",
  reporterProfiles: "components/sections/reporterProfiles/reporter-profiles.html"
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
  await loadSection("header-container", paths.header);
  await loadSection("featured-news-container", paths.featuredNews);
  await loadSection("latest-news-container", paths.latestNews);
  await loadSection("category-news-container", paths.categoryNews);
  await loadSection("trending-news-container", paths.trendingNews);
  await loadSection("reporter-profiles-container", paths.reporterProfiles);
  await loadSection("footer-container", paths.footer);
  await initializeTrendingNews();
}

document.addEventListener("DOMContentLoaded", initializeSections);
