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

async function loadFifthCard(reporter) {
  try {
    const response = await fetch("components/fifthSection/fifth-card.html");
    if (!response.ok) {
      throw new Error("Failed to load card template");
    }
    let template = await response.text();

    const badgeText = reporter.badgeTexts
      .map(
        (text) =>
          `<button class="fifth__section__card__button">${text}</button>`
      )
      .join("");

    template = template
      .replace("{{image}}", reporter.image)
      .replace("{{name}}", reporter.name)
      .replace("{{description}}", reporter.description)
      .replace("{{badgeText}}", badgeText);

    return template;
  } catch (error) {
    console.error("Error loading card template:", error);
    return null;
  }
}

async function initializeFifthSection() {
  try {
    await new Promise((resolve) => {
      const checkContainer = () => {
        const container = document.querySelector(
          "#fifth-section-card-container"
        );
        if (container) {
          resolve();
        } else {
          setTimeout(checkContainer, 100);
        }
      };
      checkContainer();
    });

    const container = document.querySelector("#fifth-section-card-container");
    if (!container) {
      throw new Error("Fifth section cards container not found");
    }

    container.innerHTML = "";

    for (const reporter of reporters) {
      const cardHtml = await loadFifthCard(reporter);
      if (cardHtml) {
        container.innerHTML += cardHtml;
      }
    }
  } catch (error) {
    console.error("Error in initializeFifthSection:", error);
  }
}

const waitForFifthSection = async () => {
  if (typeof loadFifthCard === "function") {
    await initializeFifthSection();
  } else {
    console.error("Card loading function is not available!");
  }
};

document.addEventListener("DOMContentLoaded", waitForFifthSection);
