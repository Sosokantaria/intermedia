export async function loadReporterProfileCard(data) {
  try {
    const response = await fetch("components/sections/reporterProfiles/card/reporter-profile-card.html");
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let html = await response.text();

    const badgeText = data.badgeTexts
      .map((text, index) => {
        const badgeClass = `reporter-profile-card__badge badge-${index + 1}`;
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
    console.error("Error loading reporter profile card:", error);
    return null;
  }
}

