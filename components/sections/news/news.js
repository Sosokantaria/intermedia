import { loadCard } from "../../../ui/card/card.js";

const newsCardsData = [
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    description:
      "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    description:
      "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    description:
      "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    description:
      "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    description:
      "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
  {
    image: "../../assets/card1.png",
    footerImg: "../../assets/profileImg.png",
    title: "ბოდიოიდები – ორგანოების ტრანსპლანტაციისთვის შექმნილი ადამიანები",
    description:
      "სხეულის ხელოვნური ნაწილების და ორგანოების ზრდის იდეა, ახალი არ არის და მედიცინაში უკვე გამოიყენება. თუმცა, მეცნიერებმა, ცოტა ხნის წინ, გამოაცხადეს, რომ ადამიანის მთელი სხეულის გაზრდა შეუძლიათ.",
    autorName: "ლურჯი თოლია",
    date: "გუშინ, 18:40",
  },
];

export async function initializeNews() {
  try {
    await new Promise((resolve) => {
      const checkContainer = () => {
        const container = document.querySelector("#news-cards");
        if (container) {
          resolve();
        } else {
          setTimeout(checkContainer, 100);
        }
      };
      checkContainer();
    });

    const container = document.querySelector("#news-cards");
    if (!container) {
      throw new Error("Latest news cards container not found");
    }

    container.innerHTML = "";

    for (const cardData of newsCardsData) {
      const cardHtml = await loadCard({ ...cardData, className: "mobile__column__card" });
      if (cardHtml) {
        container.innerHTML += cardHtml;
      }
    }
  } catch (error) {
    console.error("Error in initializeLatestNews:", error);
  }
}
