const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));
app.use(express.json());

// ── Portfolio Data ─────────────────────────────────────────────────────────────
const data = {
  name: "Udhay Chander Bharatha",
  initials: "UCB",
  title: "Software Engineer",
  subtitle: "Full Stack · Cloud · Microservices",
  location: "Chicago, IL",
  email: "bharathaudhay@gmail.com",
  phone: "312-394-9814",
  linkedin: "https://www.linkedin.com/in/udhay-chander-bharatha",
  github: "https://github.com/udhaychander",
  about: "I'm a Software Engineer based in Chicago, IL with a Master's in Computer Science from Illinois Institute of Technology. I specialize in building scalable full-stack applications, cloud-native architectures, and event-driven backend systems. I'm passionate about writing clean, efficient code and designing systems that scale.",

  stats: [
    { label: "Years Experience", value: "4+" },
    { label: "Projects Shipped", value: "15+" },
    { label: "Daily API Requests", value: "200k+" },
    { label: "Avg Perf Gain", value: "37%" }
  ],

  experience: [
    {
      id: 1,
      role: "Software Engineer",
      company: "Tek Ninjas",
      location: "US",
      period: "Aug 2025 – Present",
      type: "Full-time",
      bullets: [
        "Architected scalable microservices using Node.js and TypeScript, handling 200k+ daily requests and reducing API response time by 35% through optimized caching and query indexing.",
        "Developed secure authentication flows using OAuth2, JWT, and role-based access control (RBAC), ensuring compliance with internal security standards across multiple internal applications.",
        "Designed and deployed event-driven backend workflows using AWS SQS and Lambda, decoupling services and improving horizontal scalability of core systems.",
        "Enhanced application reliability by adding unit and integration tests (React Testing Library), increasing test coverage and reducing regressions during releases.",
        "Deployed containerized applications to production using Docker Engine on EC2 instances, implementing restart policies and log rotation to ensure high availability."
      ],
      tags: ["Node.js", "TypeScript", "AWS SQS", "Lambda", "Docker", "JWT"]
    },
    {
      id: 2,
      role: "Software Engineer",
      company: "Capgemini",
      location: "India",
      period: "Jun 2021 – Aug 2023",
      type: "Full-time",
      bullets: [
        "Developed cost and operations visualization tools using React and Tailwind CSS, enabling interactive exploration of 500k+ records for engineering and business teams.",
        "Built backend REST APIs with Node.js and Express, integrating with PostgreSQL and Redis for fast data retrieval and caching, improving API response times by 40%.",
        "Migrated legacy monolithic modules to a cloud-native architecture on AWS, improving scalability and reducing infrastructure costs by 25%.",
        "Optimized complex SQL queries and database schema for PostgreSQL, resulting in a 40% improvement in data retrieval speeds for high-volume reporting dashboards.",
        "Deployed and managed microservices on Kubernetes clusters, using Deployments, Services, and Ingress to achieve high availability and load-balanced traffic routing.",
        "Automated CI/CD pipelines using GitHub Actions and Terraform, integrating automated unit testing and security scanning (SAST), which reduced manual release overhead by 15 hours per month."
      ],
      tags: ["React", "Node.js", "PostgreSQL", "Redis", "Kubernetes", "Terraform"]
    },
    {
      id: 3,
      role: "Software Engineer, Intern",
      company: "Sathya Technologies",
      location: "India",
      period: "Jun 2020 – May 2021",
      type: "Internship",
      bullets: [
        "Assisted in developing internal web applications using Angular and Next.js, improving data entry efficiency and reducing manual errors by 20%.",
        "Designed and integrated REST APIs for backend services using Express and MongoDB, enabling seamless data access across modules.",
        "Orchestrated a gateway using Jenkins to orchestrate JUnit backend tests and Jest frontend tests in parallel, reducing production defects by 30%."
      ],
      tags: ["Angular", "Next.js", "Express", "MongoDB", "Jenkins"]
    },
    {
      id: 4,
      role: "Student Developer",
      company: "Keshav Memorial Institute of Technology",
      location: "India",
      period: "Aug 2018 – May 2020",
      type: "Academic",
      bullets: [
        "Implemented a web-based dashboard system to streamline college grant proposal tracking and budget management, contributing to a 10% increase in successful grant applications.",
        "Contributed to the development of a software solution incorporating NLP and LLM technologies to improve student proficiency."
      ],
      tags: ["React", "NLP", "LLM", "Dashboard"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "AI-Powered Meeting Summarizer",
      description: "Full-stack application that transcribes and summarizes video calls using OpenAI API, reducing manual note-taking time by 70%. Features secure OAuth authentication and MongoDB for user and meeting management.",
      longDescription: "Built an end-to-end AI application that listens to video calls, generates transcripts in real-time, and produces intelligent summaries with action items. The system uses OpenAI's Whisper for transcription and GPT-4 for summarization, achieving a 70% reduction in post-meeting documentation time.",
      tech: ["Next.js", "OpenAI API", "MongoDB", "Tailwind CSS", "OAuth2"],
      github: "#",
      live: "#",
      featured: true,
      category: "AI/ML"
    },
    {
      id: 2,
      title: "Real-Time Stock Trading Dashboard",
      description: "Real-time trading dashboard with WebSockets cutting latency by 60%, improved API performance by 35% using Redis caching. Deployed on AWS EC2 with CI/CD maintaining 99.9% uptime.",
      longDescription: "Engineered a high-performance trading dashboard that streams live market data via WebSockets. Implemented Redis caching layer reducing API response times by 35%. Built containerized microservices deployed on AWS EC2 with automated CI/CD pipelines maintaining 99.9% uptime SLA.",
      tech: ["React", "Node.js", "WebSockets", "Redis", "PostgreSQL", "AWS EC2"],
      github: "#",
      live: "#",
      featured: true,
      category: "FinTech"
    },
    {
      id: 3,
      title: "Serverless Video Processing Pipeline",
      description: "Serverless media pipeline triggering automatic video transcoding on S3 uploads using Lambda and Step Functions for parallel processing with SQS-based decoupling, ensuring 99.9% reliable processing.",
      longDescription: "Designed a fully serverless video processing system that automatically triggers on S3 uploads. Uses AWS Step Functions for orchestrating parallel transcoding jobs and SQS for reliable message delivery between services. Achieves 99.9% processing reliability with zero server management overhead.",
      tech: ["AWS Lambda", "FFmpeg", "S3", "Step Functions", "SQS"],
      github: "#",
      live: "#",
      featured: true,
      category: "Cloud"
    }
  ],

  skills: {
    "Languages": ["JavaScript", "TypeScript", "Java", "Python", "C#", "SQL"],
    "Frontend": ["React", "Next.js", "Angular.js", "Tailwind CSS", "Redux"],
    "Backend": ["Node.js", "Express", "Spring Boot", "Flask", "Django", ".NET"],
    "Databases": ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Snowflake", "Oracle"],
    "Cloud & DevOps": ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "Jenkins"]
  },

  education: [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      school: "Illinois Institute of Technology",
      location: "Chicago, Illinois, USA",
      period: "2023 – May 2025",
      gpa: null,
      highlights: ["Cloud Computing", "Distributed Systems", "Machine Learning", "Algorithms"]
    },
    {
      id: 2,
      degree: "Bachelor of Technology in Computer Science",
      school: "Keshav Memorial Institute of Technology",
      location: "Hyderabad, India",
      period: "2018 – 2022",
      gpa: null,
      highlights: ["Data Structures", "Operating Systems", "Database Management", "Web Development"]
    }
  ]
};

// ── Routes ────────────────────────────────────────────────────────────────────
app.get("/api/portfolio",   (req, res) => res.json(data));
app.get("/api/experience",  (req, res) => res.json(data.experience));
app.get("/api/projects",    (req, res) => res.json(data.projects));
app.get("/api/skills",      (req, res) => res.json(data.skills));
app.get("/api/education",   (req, res) => res.json(data.education));
app.get("/api/health",      (req, res) => res.json({ status: "ok" }));

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  // Uncomment + add .env EMAIL_USER/EMAIL_PASS to enable real emails
  /*
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  });
  await transporter.sendMail({
    from: email,
    to: "bharathaudhay@gmail.com",
    subject: subject || `Portfolio contact from ${name}`,
    text: message
  });
  */

  console.log(`📬 [${new Date().toISOString()}] Contact: ${name} <${email}> — ${subject || "No subject"}\n${message}\n`);
  res.json({ success: true, message: "Thanks for reaching out! I'll get back to you within 24 hours." });
});

app.listen(PORT, () => console.log(`✅ Server → http://localhost:${PORT}`));
