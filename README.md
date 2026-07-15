# 🌌 GiaTien - Space Dark Minimalist Bento Portfolio

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> A modern, creative, and premium single-page portfolio designed for Software Engineers. Inspired by the clean dark aesthetics of [tajmirul.site](https://tajmirul.site), it features space-dark minimalist styles, a glassmorphic user interface, and an asymmetrical Bento Grid layout.

---

## 🚀 Key Features

*   **🌌 Space-Dark Minimalist Aesthetic**: A premium visual design crafted with deep space-black backgrounds (`#030014`) and rich gradients blending **Neon Purple** (`#a855f7`) and **Cyan** (`#06b6d4`).
*   **🍱 Bento Grid Layouts**: The *About* and *Projects* sections use an asymmetrical Bento Grid design to compartmentalize information cleanly and dynamically.
*   **🫧 Glassmorphism Visuals**: Features semi-transparent backdrops (`rgba(3, 0, 20, 0.6)`) with a `16px` backdrop-blur filter and subtle neon borders for headers, cards, and input modules.
*   **🌓 Persistent Dark/Light Mode**: Smooth transitions managed via a custom React hook (`useTheme`) that appends the `.dark` class to `document.body` and automatically syncs preferences with `localStorage`.
*   **🔍 Interactive Project Showcase**: Dynamic client-side filtering utilizing `useState` hooks. Users can search projects by title or filter them using technology tags in real-time.
*   **✉️ Controlled Contact Form**: A robust contact form utilizing React's Controlled Component pattern, featuring full regex-based email validation and a custom glassmorphic success banner popup notifying submission to `doangiating@gmail.com`.
*   **📱 Fully Responsive Design**: Seamless adaptive styling utilizing a combination of Flexbox and CSS Grid that reshapes cleanly for Mobile, Tablet, Laptop, and Desktop screens.

---

## 🛠️ Tech Stack

| Category | Technology | Usage in Project |
| :--- | :--- | :--- |
| **Frontend Library** | ReactJS (v18+) | Component architecture, state management, and custom lifecycle hooks |
| **Build Tool** | Vite | Ultra-fast bundling, Hot Module Replacement (HMR), and dev server |
| **Styling** | CSS3 & Custom Variables | Fully custom CSS styling, layout structure, color tokens, and animation definitions |
| **Markup & Script** | HTML5 / JavaScript ES6+ | Semantic element layouts, array mapping, object destructuring, and arrow functions |
| **Theme / State Storage**| Web Storage API | `localStorage` integration for persistent theme memory |

---

## 📂 Folder Structure

The project conforms to clean directory organization practices, dividing components, hooks, styles, and static assets into distinct subfolders:

```text
portfolio/
├── public/                 # Static public assets (favicons, svgs)
├── src/
│   ├── assets/             # Static assets loaded by bundlers (logos, pictures)
│   │   ├── hero.png        # Default fallback image
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/         # Reusable React components (PascalCase)
│   │   ├── About.jsx       # Biography & Core Skill Bento grids
│   │   ├── Contact.jsx     # Controlled Contact Form & success banner
│   │   ├── Header.jsx      # Sticky Glassmorphism Navbar & theme switch
│   │   ├── Hero.jsx        # Landing section with programming SVG illustration
│   │   └── Projects.jsx    # Project showcase with Search & Filter
│   ├── hooks/              # Custom React Hooks (camelCase)
│   │   ├── useTheme.js     # Light/Dark mode logic & body class mapping
│   │   └── useWindowSize.js# Event listener hook exporting screen width
│   ├── styles/             # Modular and global CSS styles
│   │   └── global.css      # Core grid configurations, neon shadows & animations
│   ├── App.jsx             # Main App layout orchestrator
│   ├── index.css           # Global stylesheet reset
│   └── main.jsx            # Entry point rendering App under StrictMode
├── AI_PROMPTS.md           # Log of all AI prompts used during development
├── package.json            # Scripts and NPM dependency records
├── vite.config.js          # Configuration file for Vite
└── README.md               # Main repository documentation
```

---

## 💻 Getting Started

To clone, set up, and run this project locally, execute the following steps in your terminal:

### 1. Clone the repository
```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Run the development server
```bash
npm run dev
```
*Once running, navigate to `http://localhost:5173` in your web browser.*

### 4. Build for production
```bash
npm run build
```
*This command outputs highly optimized distribution assets to the `dist/` directory.*

---

## ✍️ Author Information

*   **Name**: **Doan Gia Tien**
*   **Role**: First-year Software Engineering Student
*   **Bio**: Passionate about learning by building real-world applications. Currently exploring frontend frameworks, data structures, algorithms, and modern web architectures. Always eager to take on new software engineering challenges.
*   **Email**: [doangiating@gmail.com](mailto:doangiating@gmail.com)
*   **GitHub**: [@doangiatien](https://github.com/doangiatien)

---

## 📄 License

Distributed under the MIT License. See [LICENSE](https://opensource.org/licenses/MIT) for more information.
