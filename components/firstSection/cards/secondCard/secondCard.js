async function loadSecondCard(props) {
  try {
    const response = await fetch(
      "components/firstSection/cards/secondCard/secondCard.html"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let html = await response.text();

    html = html
      .replace("{{title}}", props.title)
      .replace("{{decor}}", props.decor)
      .replace("{{subText}}", props.subText)
      .replace("{{buttonText}}", props.buttonText)
      .replace(
        "{{features}}",
        props.features.map((feature) => `<li><img src="../../../../assets/Group27567.svg" alt="Group27567"> ${feature}</li>`).join("")
      );

    return html;
  } catch (error) {
    console.error("Error loading second card:", error);
    return null;
  }
}
