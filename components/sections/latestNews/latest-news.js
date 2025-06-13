import { loadNewsCard } from './card/latest-news-card.js';

const latestNewsCardsData = [
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

export async function initializeLatestNews() {
  try {
    await new Promise((resolve) => {
      const checkContainer = () => {
        const container = document.querySelector("#latest-news-cards");
        if (container) {
          resolve();
        } else {
          setTimeout(checkContainer, 100);
        }
      };
      checkContainer();
    });

    const container = document.querySelector("#latest-news-cards");
    if (!container) {
      throw new Error("Latest news cards container not found");
    }

    container.innerHTML = '';

    for (const cardData of latestNewsCardsData) {
      const cardHtml = await loadNewsCard(cardData);
      if (cardHtml) {
        container.innerHTML += cardHtml;
      }
    }
  } catch (error) {
    console.error("Error in initializeLatestNews:", error);
  }
}
