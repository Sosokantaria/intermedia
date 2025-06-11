const secondSectionCardsData = [
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
];

async function initializeSecondSection() {
  try {
    await new Promise((resolve) => {
      const checkContainer = () => {
        const container = document.querySelector(
          "#second-section #second__section__cards"
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
      "#second-section #second__section__cards"
    );
    if (!container) {
      throw new Error("Second section cards container not found");
    }

    const isMobile = window.innerWidth <= 768;
    const cardsToShow = isMobile ? 3 : secondSectionCardsData.length;

    container.innerHTML = '';

    for (let i = 0; i < cardsToShow; i++) {
      const cardData = secondSectionCardsData[i];
      const cardHtml = await loadSecondSectionCard(cardData);
      if (cardHtml) {
        container.innerHTML += cardHtml;
      }
    }

    window.addEventListener('resize', () => {
      const newIsMobile = window.innerWidth <= 768;
      const newCardsToShow = newIsMobile ? 3 : secondSectionCardsData.length;
      
      if (newCardsToShow !== cardsToShow) {
        initializeSecondSection();
      }
    });
  } catch (error) {
    console.error("Error in initializeSecondSection:", error);
  }
}

const waitForSecondSection = async () => {
  if (typeof loadSecondSectionCard === "function") {
    await initializeSecondSection();
  } else {
    console.error("Second section card loading function is not available!");
  }
};

document.addEventListener("DOMContentLoaded", waitForSecondSection);
