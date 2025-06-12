import { loadReporterProfileCard } from './card/reporter-profile-card.js';

const reporters = [
  {
    name: "ლურჯი თოლია",
    image: "../../assets/reporterImg.png",
    description: "180 სტატია",
    badgeTexts: ["პოლიტიკა", "მეცნიერება"],
  },
  {
    name: "ლურჯი თოლია",
    image: "../../assets/reporterImg.png",
    description: "180 სტატია",
    badgeTexts: ["ხელოვნება", "ხელოვნება"],
  },
  {
    name: "ლურჯი თოლია",
    image: "../../assets/reporterImg.png",
    description: "180 სტატია",
    badgeTexts: ["ხელოვნება"],
  },
  {
    name: "ლურჯი თოლია",
    image: "../../assets/reporterImg.png",
    description: "180 სტატია",
    badgeTexts: ["ხელოვნება"],
  },
  {
    name: "ლურჯი თოლია",
    image: "../../assets/reporterImg.png",
    description: "180 სტატია",
    badgeTexts: ["ხელოვნება", "მსოფლიო", "ისტორია", "მეცნიერება"],
  },
  {
    name: "ლურჯი თოლია",
    image: "../../assets/reporterImg.png",
    description: "180 სტატია",
    badgeTexts: ["ხელოვნება", "მსოფლიო", "ისტორია", "მეცნიერება"],
  },
  {
    name: "ლურჯი თოლია",
    image: "../../assets/reporterImg.png",
    description: "180 სტატია",
    badgeTexts: ["ხელოვნება", "მსოფლიო", "ისტორია", "მეცნიერება"],
  },
  {
    name: "ლურჯი თოლია",
    image: "../../assets/reporterImg.png",
    description: "180 სტატია",
    badgeTexts: ["ხელოვნება", "მსოფლიო", "ისტორია", "მეცნიერება"],
  },
];

export async function initializeReporterProfiles() {
  try {
    await new Promise((resolve) => {
      const checkContainer = () => {
        const container = document.querySelector(
          "#reporter-profiles-container #reporter-profiles-cards"
        );
        if (container) {
          resolve();
        } else {
          setTimeout(checkContainer, 100);
        }
      };
      checkContainer();
    });

    const container = document.querySelector("#reporter-profiles-container #reporter-profiles-cards");
    if (!container) {
      throw new Error("Reporter profiles cards container not found");
    }

    container.innerHTML = "";

    for (const reporter of reporters) {
      const cardHtml = await loadReporterProfileCard(reporter);
      if (cardHtml) {
        container.innerHTML += cardHtml;
      }
    }
  } catch (error) {
    console.error("Error in initializeReporterProfiles:", error);
  }
}

const waitForReporterProfiles = async () => {
  if (typeof loadReporterProfileCard === "function") {
    await initializeReporterProfiles();
  } else {
    console.error("Profile card loading function is not available!");
  }
};

document.addEventListener("DOMContentLoaded", waitForReporterProfiles);
