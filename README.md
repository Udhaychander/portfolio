Udhay Chander Bharatha — Portfolio

Personal portfolio website built with React & Node.js/Express

About
A full-stack portfolio showcasing my experience, projects, and skills as a Software Engineer. Built with a React frontend and a Node.js/Express backend serving portfolio data via REST API.

Pages
RouteDescription/Hero, stats, featured projects, skills overview/experienceInteractive work history with tabbed timeline/projectsFilterable project cards with expandable details/educationAcademic background and full skills breakdown/contactContact form with live backend submission

Tech Stack
Frontend

React 18
React Router v6 (client-side routing)
CSS (custom design system, no UI library)
Google Fonts — Syne + DM Mono + DM Sans

Backend

Node.js + Express
REST API serving portfolio data
Nodemailer (contact form)
CORS enabled for cross-origin requests


Getting Started
Prerequisites

Node.js v16+
npm

Installation
bash# Clone the repository
git clone https://github.com/Udhaychander/portfolio.git
cd portfolio

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
Running Locally
Terminal 1 — Start the backend server
bashcd server
PORT=3001 node index.js
# Server running at http://localhost:3001
Terminal 2 — Start the React app
bashcd client
npm start
# App running at http://localhost:3000

Project Structure
portfolio/
├── server/
│   ├── index.js          # Express server + REST API + portfolio data
│   └── package.json
├── client/
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── pages/
│       │   ├── Home.js
│       │   ├── Experience.js
│       │   ├── Projects.js
│       │   ├── Education.js
│       │   └── Contact.js
│       ├── components/
│       │   └── Navbar.js
│       ├── hooks/
│       │   └── usePortfolio.js   # API data fetching hook
│       ├── App.js
│       └── index.js
└── README.md

API Endpoints
MethodEndpointDescriptionGET/api/portfolioFull portfolio dataGET/api/experienceWork experienceGET/api/projectsProjectsGET/api/educationEducationGET/api/skillsSkillsPOST/api/contactContact form submission

Contact
Udhay Chander Bharatha

📧 bharathaudhay@gmail.com
💼 linkedin.com/in/udhay-chander-bharatha
🐙 github.com/Udhaychander
📍 Chicago, IL
