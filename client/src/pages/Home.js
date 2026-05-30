import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home({ data }) {
  const { name, title, subtitle, about, stats, projects, skills } = data;
  const firstName = name.split(" ")[0];
  const featured = projects.filter(p => p.featured).slice(0, 3);

  return (
    <div className="page">
      {/* ── Hero ── */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <div className="hero-eyebrow">
              <span className="dot-live" />
              Available for opportunities
            </div>
            <h1 className="hero-name">
              {firstName}<br />
              <span className="hero-name-rest">{name.split(" ").slice(1).join(" ")}</span>
            </h1>
            <p className="hero-role">{title} <span className="hero-sep">·</span> {subtitle}</p>
            <p className="hero-bio">{about}</p>
            <div className="hero-actions">
              <Link to="/projects" className="btn btn-primary">View Projects ↗</Link>
              <Link to="/contact" className="btn btn-ghost">Get In Touch</Link>
            </div>
            <div className="hero-links">
              <a href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span>/</span>
              <a href={data.github} target="_blank" rel="noreferrer">GitHub</a>
              <span>/</span>
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="avatar-ring">
              <div className="avatar-inner">
                <span>{data.initials}</span>
              </div>
            </div>
            <div className="hero-badge hero-badge-1">
              <span className="badge-icon">⚡</span>
              <div>
                <p className="badge-val">200k+</p>
                <p className="badge-lbl">Daily API requests</p>
              </div>
            </div>
            <div className="hero-badge hero-badge-2">
              <span className="badge-icon">🚀</span>
              <div>
                <p className="badge-val">35%</p>
                <p className="badge-lbl">Avg perf improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ── */}
      <section className="stats-bar">
        <div className="container">
          <div className="stats-grid">
            {stats.map((s, i) => (
              <div key={i} className="stat-item">
                <span className="stat-val">{s.value}</span>
                <span className="stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ── */}
      <section className="section">
        <div className="container">
          <div className="section-label">Selected Work</div>
          <div className="home-section-header">
            <h2 className="section-title">Featured Projects</h2>
            <Link to="/projects" className="btn btn-ghost">All Projects →</Link>
          </div>
          <div className="featured-grid">
            {featured.map((p, i) => (
              <div key={p.id} className={`feat-card${i === 0 ? " feat-card--wide" : ""}`}>
                <div className="feat-card-top">
                  <span className="tag">{p.category}</span>
                  <div className="feat-links">
                    <a href={p.github} target="_blank" rel="noreferrer">GitHub ↗</a>
                    <a href={p.live} target="_blank" rel="noreferrer">Live ↗</a>
                  </div>
                </div>
                <h3 className="feat-title">{p.title}</h3>
                <p className="feat-desc">{p.description}</p>
                <div className="feat-tech">
                  {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Skills Snapshot ── */}
      <section className="section skills-preview-section">
        <div className="container">
          <div className="section-label">Tech Stack</div>
          <div className="home-section-header">
            <h2 className="section-title">Skills & Tools</h2>
          </div>
          <div className="skills-scroll">
            {Object.values(skills).flat().map((s, i) => (
              <span key={i} className="tag skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-box">
            <p className="cta-label">Currently open to work</p>
            <h2 className="cta-heading">Let's build something great together</h2>
            <Link to="/contact" className="btn btn-primary">Start a Conversation ↗</Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-name">{name}</p>
          <p className="footer-copy">© {new Date().getFullYear()} · Built with React & Node.js</p>
        </div>
      </footer>
    </div>
  );
}
