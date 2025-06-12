export async function loadCategoryCard(props) {
  try {
    const response = await fetch(
      "components/sections/categoryNews/card/category-news-card.html"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let html = await response.text();

    const replacements = {
      "{{image}}": props.image,
      "{{title}}": props.title,
      "{{description}}": props.description,
      "{{category}}": props.category,
      "{{footerImg}}": props.footerImg,
      "{{autorName}}": props.autorName,
      "{{date}}": props.date,
    };

    for (const [placeholder, value] of Object.entries(replacements)) {
      html = html.split(placeholder).join(value || "");
    }
    return html;
  } catch (error) {
    console.error("Error loading category news card:", error);
    return null;
  }
}
