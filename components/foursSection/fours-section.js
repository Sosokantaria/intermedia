const foursSectionCardsData = [
  {
    image: "../../assets/GiraffeImg.png",
    title: "ვინ იყო ვახტანგ გორგასლის დედა?",
    description:
      "მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო.",
    views: "18,000 ნახვა",
    readTime: "3 წუთი სჭირდება წასაკითხად",
  },
  {
    image: "../../assets/GiraffeImg.png",
    title: "ვინ იყო ვახტანგ გორგასლის დედა?",
    description:
      "მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო.",
    views: "18,000 ნახვა",
    readTime: "3 წუთი სჭირდება წასაკითხად",
  },
  {
    image: "../../assets/GiraffeImg.png",
    title: "ვინ იყო ვახტანგ გორგასლის დედა?",
    description:
      "მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო.",
    views: "18,000 ნახვა",
    readTime: "3 წუთი სჭირდება წასაკითხად",
  },
  {
    image: "../../assets/GiraffeImg.png",
    title: "ვინ იყო ვახტანგ გორგასლის დედა?",
    description:
      "მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო.",
    views: "18,000 ნახვა",
    readTime: "3 წუთი სჭირდება წასაკითხად",
  },
  {
    image: "../../assets/GiraffeImg.png",
    title: "ვინ იყო ვახტანგ გორგასლის დედა?",
    description:
      "მეცნიერებმა შექმნეს გასაოცარი ჰოლოგრამა, რომელსაც შეგიძლია შეეხო და მოუსმინო.",
    views: "18,000 ნახვა",
    readTime: "3 წუთი სჭირდება წასაკითხად",
  },
];

async function initializeFoursSection() {
  try {
    const swiperWrapper = await new Promise((resolve) => {
      const checkSwiperWrapper = () => {
        const el = document.querySelector(
          "#fours-section #fours__section__cards .swiper-wrapper"
        );
        if (el) {
          resolve(el);
        } else {
          setTimeout(checkSwiperWrapper, 100);
        }
      };
      checkSwiperWrapper();
    });

    if (!swiperWrapper) {
      throw new Error("Fours section swiper-wrapper not found");
    }
    swiperWrapper.innerHTML = "";

    for (const cardData of foursSectionCardsData) {
      const cardHtml = await loadFoursCard(cardData);
      if (cardHtml) {
        const swiperSlide = document.createElement("div");
        swiperSlide.classList.add("swiper-slide");
        swiperSlide.innerHTML = cardHtml;
        swiperWrapper.appendChild(swiperSlide);
      } else {
        console.error("Failed to load card");
      }
    }

    new Swiper("#fours__section__cards", {
      loop: true,
      centeredSlides: false,
      slidesPerView: "auto",
      spaceBetween: 20,
      effect: "coverflow",
      coverflowEffect: {
        rotate: 0,
        stretch: 50,
        depth: 100,
        modifier: 4,
        slideShadows: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1068: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  } catch (error) {
    console.error("Error in initializeFoursSection:", error);
  }
}

window.addEventListener("load", async () => {
  if (typeof loadFoursCard === "function") {
    await initializeFoursSection();
  } else {
    console.error("Card loading function is not available!");
  }
});
