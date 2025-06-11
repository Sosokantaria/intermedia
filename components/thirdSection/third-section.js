const thirdSectionCardsData = [
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

async function initializeThirdSection() {
  try {
    await new Promise((resolve) => {
      const checkContainer = () => {
        const container = document.querySelector(
          "#third-section #third__section__cards"
        );
        if (container) {
          resolve();
        } else {
          setTimeout(checkContainer, 100);
        }
      };
      checkContainer();
    });

    const container = document.querySelector(
      "#third-section #third__section__cards"
    );
    if (!container) {
      throw new Error("Third section cards container not found");
    }

    container.innerHTML = '';

    for (const cardData of thirdSectionCardsData) {
      const cardHtml = await loadThirdSectionCard(cardData);
      if (cardHtml) {
        container.innerHTML += cardHtml;
      }
    }
  } catch (error) {
    console.error("Error in initializeThirdSection:", error);
  }
}

const waitForThirdSection = async () => {
  if (typeof loadThirdSectionCard === "function") {
    await initializeThirdSection();
  } else {
    console.error("Card loading function is not available!");
  }
};

document.addEventListener("DOMContentLoaded", waitForThirdSection);
