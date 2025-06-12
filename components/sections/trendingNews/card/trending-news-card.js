export async function loadTrendingCard(props) {
  try {
    const response = await fetch(
      "components/sections/trendingNews/card/trending-news-card.html"
    );
    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status}`);
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let html = await response.text();

    const replacements = {
      "{{title}}": props.title,
      "{{views}}": props.views,
      "{{readTime}}": props.readTime,
    };

    for (const [placeholder, value] of Object.entries(replacements)) {
      html = html.split(placeholder).join(value || "");
    }

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    const cardElement = tempDiv.querySelector(".trending-news-card");
    if (cardElement && props.image) {
      cardElement.style.backgroundImage = `url('${props.image}')`;
    }
    return tempDiv.innerHTML;
  } catch (error) {
    console.error("Error loading trending news card:", error);
    return null;
  }
}
