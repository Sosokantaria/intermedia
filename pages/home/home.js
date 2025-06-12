import { initializeFeaturedNews } from "../../components/sections/featuredNews/featured-news.js";
import { initializeLatestNews } from "../../components/sections/latestNews/latest-news.js";
import { initializeCategoryNews } from "../../components/sections/categoryNews/category-news.js";
import { initializeTrendingNews } from "../../components/sections/trendingNews/trending-news.js";
import { initializeReporterProfiles } from "../../components/sections/reporterProfiles/reporter-profiles.js";

async function loadSection(container, sectionPath) {
  try {
    const response = await fetch(sectionPath);
    if (!response.ok) throw new Error(`Failed to load ${sectionPath}`);
    const html = await response.text();
    container.innerHTML = html;
    return true;
  } catch (error) {
    console.error(`Error loading section ${sectionPath}:`, error);
    return false;
  }
}

export async function initialize() {
  const featuredNewsContainer = document.getElementById(
    "featured-news-container"
  );
  if (featuredNewsContainer) {
    await loadSection(
      featuredNewsContainer,
      "../../components/sections/featuredNews/featured-news.html"
    );
    await initializeFeaturedNews();
  }

  const latestNewsContainer = document.getElementById("latest-news-container");
  if (latestNewsContainer) {
    await loadSection(
      latestNewsContainer,
      "../../components/sections/latestNews/latest-news.html"
    );
    await initializeLatestNews();
  }

  const categoryNewsContainer = document.getElementById(
    "category-news-container"
  );
  if (categoryNewsContainer) {
    await loadSection(
      categoryNewsContainer,
      "../../components/sections/categoryNews/category-news.html"
    );
    await initializeCategoryNews();
  }

  const trendingNewsContainer = document.getElementById(
    "trending-news-container"
  );
  if (trendingNewsContainer) {
    await loadSection(
      trendingNewsContainer,
      "../../components/sections/trendingNews/trending-news.html"
    );
    await initializeTrendingNews();
  }

  const reporterProfilesContainer = document.getElementById(
    "reporter-profiles-container"
  );
  if (reporterProfilesContainer) {
    await loadSection(
      reporterProfilesContainer,
      "../../components/sections/reporterProfiles/reporter-profiles.html"
    );
    await initializeReporterProfiles();
  }
}

document.addEventListener("DOMContentLoaded", initialize);
