export async function loadCard(props) {
  try {
    const response = await fetch("ui/card/card.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let html = await response.text();

    const replacements = {
      "{{className}}": props.className,
      "{{image}}": props.image,
      "{{title}}": props.title,
      "{{footerImg}}": props.footerImg,
      "{{autorName}}": props.autorName,
      "{{date}}": props.date,
      "{{description}}": props.description,
    };

    for (const [placeholder, value] of Object.entries(replacements)) {
      html = html.split(placeholder).join(value || "");
    }
    return html;
  } catch (error) {
    console.error("Error loading latest news card:", error);
    return null;
  }
}
