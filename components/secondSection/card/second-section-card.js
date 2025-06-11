async function loadSecondSectionCard(props) {
  try {
    const response = await fetch(
      "components/secondSection/card/second-section-card.html"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    let html = await response.text();

    const replacements = {
      '{{image}}': props.image,
      '{{title}}': props.title,
      '{{footerImg}}': props.footerImg,
      '{{autorName}}': props.autorName,
      '{{date}}': props.date
    };

    for (const [placeholder, value] of Object.entries(replacements)) {
      html = html.split(placeholder).join(value || '');
    }
    return html;
  } catch (error) {
    console.error("Error loading second section card:", error);
    return null;
  }
}
