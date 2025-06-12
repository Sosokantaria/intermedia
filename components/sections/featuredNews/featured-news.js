import { loadMainCard } from "./cards/mainCard/main-card.js";
import { loadSecondaryCard } from "./cards/secondaryCard/secondary-card.js";

const cardsData = [
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: `"ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"`,
    buttonText: "მეცნიერება",
    description:
      "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    type: "secondaryCard",
    title: "გახდით რეპორტიორი Intermedia.ge-ს დახმარებით!",
    subText:
      "ყველაზე მასშტაბური და პოპულარული ქართული პლატფორმა სამოქალაქო ჟურნალისტიკისთვის",
    buttonText: "დაწერე სტატია",
    decor: "../../assets/Group37.svg",
    features: ["გახდი ავტორი", "დაწერე სტატია", "გამოიმუშავე ფული"],
  },
  {
    image: "../../assets/card2.png",
    footerImg: "../../assets/profileImg.png",
    title: `"ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"`,
    buttonText: "მეცნიერება",
    description:
      "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card2.png",
    footerImg: "../../assets/profileImg.png",
    title: `"ბოდიოიდები" – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები"`,
    buttonText: "მეცნიერება",
    description:
      "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
];

async function initializeFeaturedNews() {
  try {
    await new Promise((resolve) => {
      const checkContainer = () => {
        const container = document.querySelector(
          "#featured-news-container #cards-container"
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
      "#featured-news-container #cards-container"
    );

    for (let i = 0; i < cardsData.length; i++) {
      const cardData = cardsData[i];

      if (cardData.type === "secondaryCard") {
        const cardHtml = await loadSecondaryCard(cardData);
        if (cardHtml) {
          container.innerHTML += cardHtml;
        }
      } else {
        const cardHtml = await loadMainCard(cardData);
        if (cardHtml) {
          container.innerHTML += cardHtml;
        }
      }
    }
  } catch (error) {
    console.error("Error in initializeFeaturedNews:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initializeFeaturedNews();
});
