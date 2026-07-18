# DoughTwist E-Library

A modern, responsive digital library frontend for browsing curated academic resources, literature, comics, and rare digital artifacts. Built with plain HTML, CSS, and JavaScript — no build step required.

## Live preview

Open `index.html` directly in any modern browser, or run it with a local server for the best experience.

### Run with VS Code Live Server

1. Open the project folder in VS Code.
2. Install the **Live Server** extension if you haven't already.
3. Right-click `index.html` and select **Open with Live Server**.
4. The site will open at `http://127.0.0.1:5502` (port is configured in `.vscode/settings.json`).

## Features

- **Responsive glassmorphism header** with mobile hamburger menu toggle
- **Hero section** with live search, soft animated gradient blobs, and animated statistics
- **Featured collections grid** with hover effects, category tags, and availability badges
- **Discover page** with category filter pills, sorting, and searchable book listings
- **Categories page** for browsing knowledge domains
- **Resources page** for curated library content
- **Book detail page** for individual resource views
- **Login & Register pages** with centered card layouts, social-login buttons, and HTML5 validation
- **Scroll reveal animations** via Intersection Observer
- **Dark-first design** with CSS custom properties for easy theming
- **Pure HTML/CSS/JS** — easy to customize and extend

## Tech stack

- HTML5
- CSS3 (custom properties, flexbox, grid, transitions, backdrop-filter)
- Vanilla JavaScript (no frameworks)
- Google Fonts: Inter

## Project structure

```
DoughTwist-E-Library/
├── index.html              # Home / landing page
├── README.md               # This file
├── .vscode/
│   └── settings.json       # Live Server port config (5502)
├── css/
│   ├── style.css           # Global styles, header, footer, design tokens
│   ├── auth.css            # Login & Register page styles
│   ├── book-detail.css     # Book detail page styles
│   ├── categories.css      # Categories page styles
│   ├── discover.css        # Discover page styles
│   └── resources.css       # Resources page styles
├── script/
│   ├── data.js             # Shared book/category data
│   ├── index.js            # Home page logic
│   ├── book-detail.js      # Book detail page logic
│   ├── categories.js       # Categories page logic
│   ├── discover.js         # Discover page logic
│   ├── resources.js        # Resources page logic
│   ├── auth.js             # Authentication state / nav handling
│   ├── login.js            # Login form logic
│   └── reveal.js           # Scroll reveal animations
├── pages/
│   ├── login.html          # Login form
│   ├── register.html       # Registration form
│   ├── discover.html       # Browse books
│   ├── categories.html     # Browse categories
│   ├── resources.html      # Curated resources
│   └── book-detail.html    # Individual book view
└── img/                    # Book covers, category images, and assets
```

## Pages overview

| Page | File | Description |
|------|------|-------------|
| Home | `index.html` | Hero, search, featured collections, explore domains, CTA |
| Discover | `pages/discover.html` | Trending/new books with filters, sorting, and search |
| Categories | `pages/categories.html` | Grid of knowledge domains |
| Resources | `pages/resources.html` | Curated library resources |
| Book Detail | `pages/book-detail.html` | Detailed view of a selected book |
| Login | `pages/login.html` | Email/password + Google/Apple social login |
| Register | `pages/register.html` | Account creation form |

## Design tokens

Colors, radii, shadows, and transitions are defined as CSS custom properties in `css/style.css`. The project currently ships with a dark-first default theme:

```css
:root {
  --bg: #0b0f19;
  --surface: #111827;
  --surface-2: #1e2538;
  --text: #f8fafc;
  --text-muted: #94a3b8;
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --accent: #f43f5e;
  --accent-2: #38bdf8;
  --radius: 20px;
  --radius-sm: 14px;
  --radius-pill: 999px;
  --transition: 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  /* ... */
}
```

## Browser support

Works in all modern browsers that support CSS custom properties, CSS Grid, Flexbox, `backdrop-filter`, and ES6 JavaScript (Chrome, Firefox, Safari, Edge).

## Future improvements

- Connect login/register forms to a real backend
- Add search indexing and pagination
- Implement user dashboards, bookmarks, and reading lists
- Add a light/dark mode toggle
- Add unit or end-to-end tests

## License

This project is for educational/demo purposes. Feel free to use and modify it.

---

Made with ♥ by the DoughTwist team.
