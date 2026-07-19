import express from 'express';
import cors from 'cors';

const app = express();

// Enable CORS for local Vite frontend
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());

const PORT = 5000;

// In-memory projects array with 5 realistic sample projects
let projects = [
  {
    id: "1",
    title: "E-Commerce Dashboard",
    description: "A comprehensive dashboard for e-commerce business analytics, featuring sales metrics, inventory tracking, and customer insights with dynamic visualizations.",
    image: "/dashboard.png",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    link: "https://github.com/example/ecommerce-dashboard"
  },
  {
    id: "4",
    title: "Building a Portfolio Website",
    description: "This project is part of the Web Programming course assignment at WebDev Studio. It showcases a dark-themed, glassmorphic single-page application.",
    image: "/portfolio.jpeg",
    technologies: ["HTML", "CSS", "ReactJS", "Vite"],
    link: "https://tinyurl.com/Building-IT-Portfolio-Website"
  },
  {
    id: "2",
    title: "Real-time Collaboration Canvas",
    description: "An interactive whiteboarding application allowing multiple users to draw, add notes, and collaborate in real-time using web sockets.",
    image: "/canva.jpg",
    technologies: ["Vite", "React", "Socket.io", "Express", "Tailwind CSS"],
    link: "https://github.com/example/collab-canvas"
  },
  {
    id: "3",
    title: "AI Code Helper",
    description: "A developer tool that analyzes code snippets, suggests optimizations, and generates documentation using LLM APIs.",
    image: "/chatbot.jpg",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Gemini API"],
    link: "https://github.com/example/ai-code-helper"
  },
  {
    id: "5",
    title: "Fitness Tracking App",
    description: "A mobile-first web app that allows users to track their daily workouts, log calories, and visualize their progress over time.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    link: "https://github.com/example/fitness-app"
  }
];

// GET endpoint to retrieve projects
app.get('/api/projects', (req, res) => {
  let result = projects;

  if (req.query.search) {
    const keyword = req.query.search.toLowerCase();
    result = result.filter(project => project.title.toLowerCase().includes(keyword));
  }

  if (req.query.tech) {
    const techName = req.query.tech;
    result = result.filter(project => project.technologies.includes(techName));
  }

  res.json(result);
});

// POST endpoint to create a new project
app.post('/api/projects', (req, res) => {
  const { title, description, image, technologies, link } = req.body;
  const newProject = {
    id: Date.now().toString(),
    title,
    description,
    image,
    technologies: technologies || [],
    link
  };
  projects.push(newProject);
  res.status(201).json(newProject);
});

// PUT endpoint to update an existing project by ID
app.put('/api/projects/:id', (req, res) => {
  const project = projects.find(p => p.id === req.params.id);
  if (!project) {
    return res.status(404).json({ message: 'Project not found' });
  }

  const { title, description, image, technologies, link } = req.body;
  if (title !== undefined) project.title = title;
  if (description !== undefined) project.description = description;
  if (image !== undefined) project.image = image;
  if (technologies !== undefined) project.technologies = technologies;
  if (link !== undefined) project.link = link;

  res.json(project);
});

// DELETE endpoint to remove a project by ID
app.delete('/api/projects/:id', (req, res) => {
  const index = projects.findIndex(p => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ message: 'Project not found' });
  }

  const deletedProject = projects.splice(index, 1)[0];
  res.status(200).json(deletedProject);
});

// Default root route
app.get('/', (req, res) => {
  res.send('Express Portfolio Backend is running.');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
