async function loadFifthCard(data) {
  try {
    const response = await fetch("components/fifthSection/card/fifth-card.html");
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let html = await response.text();

    // Map badge texts into individual badges
    const badgeText = data.badgeTexts
      .map((text, index) => {
        const badgeClass = `fifth-section-card__badge badge-${index + 1}`;
        return `<span class="${badgeClass}">${text}</span>`;
      })
      .join("");

    const replacements = {
      "{{image}}": data.image,
      "{{name}}": data.name,
      "{{description}}": data.description,
      "{{badgeText}}": badgeText
    };

    for (const [placeholder, value] of Object.entries(replacements)) {
      html = html.split(placeholder).join(value || "");
    }

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.innerHTML;
  } catch (error) {
    console.error("Error loading fifth section card:", error);
    return null;
  }
}

