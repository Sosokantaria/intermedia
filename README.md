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
│   │   │   ├── header.css
│   │   │   └── navigation.js
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
│       └── reporterProfiles/
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

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## Future Improvements

### Dynamic Card Component System
A planned enhancement for the platform is the implementation of a unified dynamic card component system. This system would:

- **Centralize Card Logic**: Create a single, reusable card component that can be configured for different sections
- **Reduce Code Duplication**: Eliminate redundant code across section-specific card implementations
- **Improve Maintainability**: Enable consistent updates and styling changes across all sections
- **Enhance Flexibility**: Allow for easy customization of card layouts, animations, and behaviors
- **Optimize Performance**: Reduce bundle size through shared component code

The current implementation uses section-specific card components as a pragmatic approach to meet the project timeline. However, the architecture has been designed with this future enhancement in mind, making it a straightforward refactoring task.

### Implementation Plan
1. Create a base card component with configurable properties
2. Implement a card factory system for different card types
3. Add a theme system for consistent styling
4. Develop a configuration API for section-specific customizations
5. Migrate existing sections to use the new system

This enhancement would significantly improve the codebase's maintainability and scalability while reducing development time for new features. 