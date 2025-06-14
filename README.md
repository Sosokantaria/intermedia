# InterMedia News Website

A modern, responsive news website built with vanilla JavaScript, HTML, and CSS. The project follows a modular architecture and uses ES modules for better code organization.

## Project Structure

```
InterMedia/
├── components/
│   ├── layout/
│   │   ├── header/
│   │   │   ├── header.html
│   │   │   ├── header.js
│   │   │   └── header.css
│   │   ├── footer/
│   │   │   ├── footer.html
│   │   │   ├── footer.js
│   │   │   └── footer.css
│   │   ├── layout.html
│   │   └── layout.js
│   └── sections/
│       ├── featuredNews/
│       ├── latestNews/
│       ├── categoryNews/
│       ├── trendingNews/
│       ├── reporterProfiles/
│       └── news/
├── pages/
│   └── home/
│       ├── home.html
│       ├── home.js
│       └── home.css
├── index.css
├── index.html
├── index.js
└── README.md
```

## Features

- **Modular Architecture**: Each component is self-contained with its own HTML, CSS, and JavaScript
- **Responsive Design**: Fully responsive layout that works on all screen sizes
- **Dynamic Content Loading**: Components are loaded dynamically using ES modules
- **Modern Navigation**: Responsive navigation with dropdown menus
- **News Sections**:
  - Featured News
  - Latest News
  - Category News
  - Trending News
  - Reporter Profiles

## Technologies Used

- HTML5
- CSS3 (with CSS Variables for theming)
- Vanilla JavaScript (ES6+)
- ES Modules
- Swiper.js for carousels

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Open the project in your code editor

3. Start a local server (e.g., using Live Server in VS Code)

4. Open `index.html` in your browser


## PageSpeed Insights Scores

Here are the PageSpeed Insights scores for the InterMedia website:

![PageSpeed Insights Score](assets/pagespeedInsights.png)


## Components

### Layout Components
- **Header**: Navigation bar with responsive menu
- **Footer**: Site footer with links and information

### Section Components
- **Featured News**: Main news section with prominent article display
- **Latest News**: Grid of most recent news articles
- **Category News**: News organized by topic categories
- **Trending News**: Carousel of popular/trending articles
- **Reporter Profiles**: Grid of reporter information with badges

### Styling Guidelines

- Use CSS variables for consistent theming
- Follow BEM naming convention for CSS classes
- Keep styles modular and component-specific
- Use responsive units (rem, em, %) for better scaling

### JavaScript Guidelines

- Use ES modules for code organization
- Export initialization functions for components
- Handle errors appropriately
- Use async/await for asynchronous operations

