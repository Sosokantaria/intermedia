import { loadCategoryCard } from './card/category-news-card.js';

const categoryNewsCardsData = [
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "კატეგორია",
    description: "მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "კატეგორია",
    description: "მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "კატეგორია",
    description: "მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  }
];

async function initializeCategoryNews() {
  try {
    await new Promise((resolve) => {
      const checkContainer = () => {
        const container = document.querySelector("#category-news-cards");
        if (container) {
          resolve();
        } else {
          setTimeout(checkContainer, 100);
        }
      };
      checkContainer();
    });

    const container = document.querySelector("#category-news-cards");
    if (!container) {
      throw new Error("Category news cards container not found");
    }

    container.innerHTML = '';

    for (const cardData of categoryNewsCardsData) {
      const cardHtml = await loadCategoryCard(cardData);
      if (cardHtml) {
        container.innerHTML += cardHtml;
      }
    }
  } catch (error) {
    console.error("Error in initializeCategoryNews:", error);
  }
}

const waitForCategoryNews = async () => {
  if (typeof loadCategoryCard === "function") {
    await initializeCategoryNews();
  } else {
    console.error("Category card loading function is not available!");
  }
};

document.addEventListener("DOMContentLoaded", waitForCategoryNews);
