async function loadMainCard(props) {
  try {
    const response = await fetch("components/sections/featuredNews/cards/mainCard/main-card.html");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let html = await response.text();

    html = html
      .replace("{{title}}", props.title)
      .replace("{{button-text}}", props.buttonText)
      .replace("{{image}}", props.image)
      .replace("{{description}}", props.description)
      .replace("{{footerImg}}", props.footerImg)
      .replace("{{autor-name}}", props.autorName)
      .replace("{{date}}", props.date);
    return html;
  } catch (error) {
    console.error("Error loading card:", error);
    return null;
  }
}

export { loadMainCard };
 