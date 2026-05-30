# Udhay Chander Bharatha — Portfolio

> Personal portfolio website built with React & Node.js/Express

![React](https://img.shields.io/badge/React-18.2-61DAFB?style=flat&logo=react&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat&logo=node.js&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-6-CA4245?style=flat&logo=react-router&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow?style=flat)
![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat)

---

## 🌐 Live Demo

### **[https://udhay-portfolio-two.vercel.app/](https://udhay-portfolio-two.vercel.app/)**

> Frontend hosted on Vercel · Backend hosted on Render

---

## About

A full-stack portfolio showcasing my experience, projects, and skills as a Software Engineer. Built with a React frontend and a Node.js/Express backend serving portfolio data via REST API.

---

## Pages

| Route | Description |
|---|---|
| `/` | Hero, stats, featured projects, skills overview |
| `/experience` | Interactive work history with tabbed timeline |
| `/projects` | Filterable project cards with expandable details |
| `/education` | Academic background and full skills breakdown |
| `/contact` | Contact form with live backend submission |

---

## Tech Stack

**Frontend**
- React 18
- React Router v6 (client-side routing)
- CSS (custom design system, no UI library)
- Google Fonts — Syne + DM Mono + DM Sans

**Backend**
- Node.js + Express
- REST API serving portfolio data
- Nodemailer (contact form)
- CORS enabled for cross-origin requests

**Deployed On**
- Frontend → [Vercel](https://vercel.com)
- Backend → [Render](https://render.com)

---

## Getting Started

### Prerequisites
- Node.js v16+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Udhaychander/portfolio.git
cd portfolio

# Install server dependencies
cd server
npm install

# Install client dependencies
cd ../client
npm install
```

### Running Locally

**Terminal 1 — Start the backend server**
```bash
cd server
PORT=3001 node index.js
# Server running at http://localhost:3001
```

**Terminal 2 — Start the React app**
```bash
cd client
npm start
# App running at http://localhost:3000
```

---

## Project Structure

```
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
```

---

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/api/portfolio` | Full portfolio data |
| `GET` | `/api/experience` | Work experience |
| `GET` | `/api/projects` | Projects |
| `GET` | `/api/education` | Education |
| `GET` | `/api/skills` | Skills |
| `POST` | `/api/contact` | Contact form submission |

---

## Contact

**Udhay Chander Bharatha**

- 📧 [bharathaudhay@gmail.com](mailto:bharathaudhay@gmail.com)
- 💼 [linkedin.com/in/udhay-chander-bharatha](https://www.linkedin.com/in/udhay-chander-bharatha)
- 🐙 [github.com/Udhaychander](https://github.com/Udhaychander)
- 📍 Chicago, IL

---

## License

This project is open source and available under the [MIT License](LICENSE).