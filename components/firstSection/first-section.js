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
    type: "secondCard",
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

async function initializeFirstSection() {
  try {
    await new Promise((resolve) => {
      const checkContainer = () => {
        const container = document.querySelector(
          "#first-section-container #cards-container"
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
      "#first-section-container #cards-container"
    );

    for (let i = 0; i < cardsData.length; i++) {
      const cardData = cardsData[i];
      
      if (cardData.type === "secondCard") {
        const cardHtml = await loadSecondCard(cardData);
        if (cardHtml) {
          container.innerHTML += cardHtml;
        }
      } else {
        const cardHtml = await loadCard(cardData);
        if (cardHtml) {
          container.innerHTML += cardHtml;
        }
      }
    }
  } catch (error) {
    console.error("Error in initializeFirstSection:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (typeof loadCard === "function" && typeof loadSecondCard === "function") {
    initializeFirstSection();
  } else {
    console.error("Required card loading functions are not available!");
  }
});
 