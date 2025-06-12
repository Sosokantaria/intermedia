# Inter Media News Platform

A modern, responsive news platform built with HTML, CSS, and JavaScript. The platform features multiple sections with different layouts and interactive components.

## Features

- Responsive design that works on all devices
- Interactive news cards with hover effects
- Dynamic content loading
- Modern UI with smooth animations
- Multiple section layouts
- Swiper integration for carousels
- Badge system for content categorization

## Project Structure

```
├── index.html
├── index.css
├── index.js
├── assets/
│   └── images
├── components/
│   ├── layout/
│   │   ├── header/
│   │   │   ├── header.html
│   │   │   ├── header.css
│   │   │   └── navigation.js
│   │   └── footer/
│   │       ├── footer.html
│   │       └── footer.css
│   └── sections/
│       ├── featuredNews/
│       │   ├── featured-news.html
│       │   ├── featured-news.css
│       │   ├── featured-news.js
│       │   └── cards/
│       │       ├── mainCard/
│       │       │   ├── main-card.html
│       │       │   ├── main-card.css
│       │       │   └── main-card.js
│       │       └── secondaryCard/
│       │           ├── secondary-card.html
│       │           ├── secondary-card.css
│       │           └── secondary-card.js
│       ├── latestNews/
│       │   ├── latest-news.html
│       │   ├── latest-news.css
│       │   ├── latest-news.js
│       │   └── card/
│       │       ├── news-card.html
│       │       ├── news-card.css
│       │       └── news-card.js
│       ├── categoryNews/
│       │   ├── category-news.html
│       │   ├── category-news.css
│       │   ├── category-news.js
│       │   └── card/
│       │       ├── category-card.html
│       │       ├── category-card.css
│       │       └── category-card.js
│       ├── trendingNews/
│       │   ├── trending-news.html
│       │   ├── trending-news.css
│       │   ├── trending-news.js
│       │   └── card/
│       │       ├── trending-card.html
│       │       ├── trending-card.css
│       │       └── trending-card.js
│       └── reporterProfiles/
│           ├── reporter-profiles.html
│           ├── reporter-profiles.css
│           ├── reporter-profiles.js
│           └── card/
│               ├── profile-card.html
│               ├── profile-card.css
│               └── profile-card.js
└── README.md
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

## Setup

1. Clone the repository
2. Open `index.html` in your browser
3. No build process required - it's pure HTML, CSS, and JavaScript

## Dependencies

- Swiper.js for carousel functionality
- Google Material Icons
- Google Fonts

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