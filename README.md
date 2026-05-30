# Udhay Chander Bharatha — Portfolio v2

Multi-page portfolio built with **React** (frontend) + **Node.js/Express** (backend).

## Pages
- `/` — Home: Hero, stats, featured projects, skills preview, CTA
- `/experience` — Interactive tabbed work history with timeline
- `/projects` — Filterable project cards with expandable detail
- `/education` — Degrees + full skills breakdown
- `/contact` — Contact form with subject picker + availability badge

## Quick Start

```bash
# 1. Install all dependencies
npm run install-all

# 2. Start server (Terminal 1)
cd server
node index.js
# ✅ Server → http://localhost:5000

# 3. Start React (Terminal 2)
cd client
npm start
# Opens http://localhost:3000
```

## Project Structure
```
portfolio-v2/
├── server/
│   ├── index.js        ← Express API + all portfolio data
│   └── package.json
├── client/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.js / Home.css
│   │   │   ├── Experience.js / Experience.css
│   │   │   ├── Projects.js / Projects.css
│   │   │   ├── Education.js / Education.css
│   │   │   └── Contact.js / Contact.css
│   │   ├── components/
│   │   │   ├── Navbar.js / Navbar.css
│   │   ├── hooks/
│   │   │   └── usePortfolio.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── package.json
```

## Update Your Data
All your portfolio data is in ONE place: `server/index.js` → the `data` object at the top.
Change it there and everything updates instantly.

## Enable Contact Emails (Free)
1. Create Gmail App Password at https://myaccount.google.com/apppasswords
2. Create `server/.env`: `EMAIL_USER=bharathaudhay@gmail.com` and `EMAIL_PASS=your_app_password`
3. Uncomment the nodemailer block in `server/index.js`

## Free Deployment

### Frontend → Vercel
- Push `client/` to GitHub
- Import at vercel.com → Build: `npm run build`, Output: `build`

### Backend → Render
- Push `server/` to GitHub  
- New Web Service at render.com → Start: `node index.js`
- Copy Render URL and set env var in Vercel: `REACT_APP_API_URL=https://your-app.onrender.com`
