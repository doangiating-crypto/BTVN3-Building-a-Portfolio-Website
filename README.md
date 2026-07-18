# 🌌 DoanTien Portfolio - Space Dark Glassmorphic Single Page Application

[![React](https://img.shields.io/badge/Frontend-React%20v18-blue?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Bundler-Vite%20v5-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Backend-Node.js%20Express-green?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A high-performance, visually stunning full-stack developer portfolio showcasing clean UI design, responsive grids, and dynamic RESTful API operations. Built on a modern single-page application (SPA) architecture.

---

## 📖 Project Overview & General Description

**DoanTien Portfolio** is a modern website designed to showcase professional software engineering projects, tech stack expertise, and contact channels. 
Unlike typical static portfolios, this project is fully integrated with a custom **Node.js Express** backend. All projects are fetched dynamically on runtime, and users can toggle an administrative "Edit Mode" directly on the page to **add, edit, or delete projects** dynamically in real time without manually touching code.

---

## 🎨 Inspiration & Design Aesthetics

The design of this portfolio draws inspiration from:
- **Bento Grid Layouts**: Clean, structural organization of information blocks, inspired by Apple and Windows UI styles.
- **Glassmorphism**: Translucent card containers with heavy background blurs (`backdrop-filter: blur(16px)`), giving a sense of floating layers over a starry space backdrop.
- **Neon Glow Aesthetics**: Glowing cyan and purple gradients, neon borders, and subtle glowing interactive shadows to emphasize modern, cutting-edge developer tools.
- **Micro-Animations**: Snappy, custom transit animations, elastic scaling on hover, and smooth horizontal scrolling cards that feel alive.

---

## 💻 Tech Stack & Architecture

### Frontend
- **React.js (Vite)**: Component-based reactive UI rendering with fast hot-reloading.
- **Vanilla CSS3**: Tailored styling using CSS custom properties (variables) for theme-switching, grid layouts, and custom cubic-bezier animations.
- **Copy-to-Clipboard API**: Modern `navigator.clipboard` integration for seamless contact sharing.

### Backend
- **Node.js & Express**: Clean, modular server-side routing, request validation, and CORS implementation.
- **In-Memory database**: Fast array operations supporting search, filtration, creation, update, and removal of items.
- **ES Modules (ESM)**: Modern JavaScript syntax (`import`/`export`) for compliance with the latest JS standards.

---

## 🚀 Key Features

1. **Space Dark & Light Mode Toggle**: Seamless, smooth transition of color themes using root CSS variable manipulation.
2. **Interactive Search & Filter**: Real-time filtering of projects by title keywords (`search`) and technology tags (`tech`) simultaneously.
3. **Owner's Admin Panel**: Hide/Show management tools with a single click on the headline edit pencil. Allows on-page creation, updates, and deletion.
4. **Horizontal Scroll Slider**: Horizontal scrolling carousel with custom animated scrollbars for a premium desktop and mobile browsing experience.
5. **Quick-Copy Contact Channels**: Smart email and phone copy buttons that copy details to the clipboard and show a temporary floating bubble ("Đã copy!").

---

## 💎 Backend Architecture & RESTful Clean Code Compliance

This project is built strictly following industry-standard **Clean Code** principles and **RESTful API** design patterns to ensure scalability, ease of grading, and maintenance:

### 1. Resource-Oriented URI Design
- **Plural Naming**: Endpoints are structured using plural nouns (`/api/projects` and `/api/projects/:id`) representing resource collections and individual resources, strictly avoiding actions verbs in the URI (e.g., avoiding wrong patterns like `/api/getProjects` or `/api/deleteProject`).
- **Separation of Concerns**: Serves data under the dedicated `/api` namespace, cleanly separating server data transactions from frontend client-side rendering.

### 2. Semantic HTTP Methods (CRUD Mapping)
Each action maps exactly to the semantic meaning of HTTP request methods:
* **`GET`**: Fetches the projects list (supports filtering without modifying server state).
* **`POST`**: Creates a new project in the memory database.
* **`PUT`**: Updates details of an existing project by its ID.
* **`DELETE`**: Deletes a project by its ID.

### 3. Standards-Compliant HTTP Status Codes
The backend responds with precise, standard HTTP codes:
* **`200 OK`**: Returned for successful data retrieval (`GET`), edits (`PUT`), and deletions (`DELETE`).
* **`201 Created`**: Returned for successful item creation (`POST`), returning the created object.
* **`404 Not Found`**: Returned with a descriptive JSON error payload when a client requests updates (`PUT`) or deletion (`DELETE`) on a non-existent project ID.

### 4. Middleware Setup & Undefined Prevention
- **Parser Prioritization**: `app.use(express.json())` and `app.use(cors())` are declared **immediately** after initializing the Express `app`. This guarantees that the JSON parser executes before route handlers, successfully preventing `req.body` from becoming `undefined` during API client testing (Postman / Thunder Client).

### 5. ES Module (ESM) Compliance
- Uses standard ES6 `import`/`export` syntax rather than CommonJS `require()`, ensuring the server codebase is modern, modular, and natively compatible with React's ES module ecosystem.

---

## 🛠️ Getting Started

Follow these step-by-step instructions to get the application running locally.

### 1. Prerequisites
Make sure you have the following installed on your machine:
* **Node.js** (v16.0.0 or higher)
* **npm** (v8.0.0 or higher)

### 2. Setup the Backend (Express Server)
The backend handles project resources and filters.

1. Navigate to the project root directory where `server.js` is located:
   ```bash
   cd portfolio
   ```
2. Install the backend dependencies:
   ```bash
   npm install express cors
   ```
3. Start the Express server:
   ```bash
   node server.js
   ```
   *The backend will run on `http://localhost:5000`.*

### 3. Setup the Frontend (React + Vite)
1. Open a new terminal window and navigate to the project directory:
   ```bash
   cd portfolio
   ```
2. Install the frontend dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on `http://localhost:5173`.*

---

## 🔌 API Documentation

The Express backend exposes RESTful endpoints under the base URL `http://localhost:5000/api`.

### Endpoints

#### 1. GET `/api/projects`
* **Description**: Retrieve all projects, with support for filtering.
* **Query Parameters** (Optional, can be used together):
  * `search`: Matches title (case-insensitive). E.g., `?search=dashboard`
  * `tech`: Matches technology tag exactly. E.g., `?tech=React`
* **Response Status**: `200 OK`

#### 2. POST `/api/projects`
* **Description**: Add a new project.
* **Request Body** (JSON format):
  ```json
  {
    "title": "New Project",
    "description": "Project description.",
    "image": "/project_image.png",
    "technologies": ["React", "Express"],
    "link": "https://github.com/doangiating-crypto/repo"
  }
  ```
* **Response Status**: `201 Created`

#### 3. PUT `/api/projects/:id`
* **Description**: Update fields of an existing project.
* **Request Body** (JSON format - all fields are optional):
  ```json
  {
    "title": "Updated Title",
    "description": "Updated description."
  }
  ```
* **Response Status**: `200 OK` or `404 Not Found`

#### 4. DELETE `/api/projects/:id`
* **Description**: Delete a project by its unique ID.
* **Response Status**: `200 OK` (returns deleted project details) or `404 Not Found`

---

### Project Demo Video
[GGdrive](https://tinyurl.com/yvs5esne)

---
## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
