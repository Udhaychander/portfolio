import React, { useState } from "react";
import "./Projects.css";

export default function Projects({ data }) {
  const { projects } = data;
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  const [filter, setFilter] = useState("All");
  const [expanded, setExpanded] = useState(null);

  const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">Portfolio</div>
        <h1 className="section-title">Projects</h1>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map(c => (
            <button
              key={c}
              className={`filter-btn${filter === c ? " active" : ""}`}
              onClick={() => setFilter(c)}
            >
              {c}
              <span className="filter-count">
                {c === "All" ? projects.length : projects.filter(p => p.category === c).length}
              </span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filtered.map((p, i) => (
            <div
              key={p.id}
              className={`proj-card${expanded === p.id ? " expanded" : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className="proj-card-top">
                <div className="proj-meta">
                  <span className="tag">{p.category}</span>
                  {p.featured && <span className="featured-badge">★ Featured</span>}
                </div>
                <div className="proj-actions">
                  <a href={p.github} target="_blank" rel="noreferrer" className="proj-link">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a href={p.live} target="_blank" rel="noreferrer" className="proj-link">↗ Live</a>
                </div>
              </div>

              <h3 className="proj-title">{p.title}</h3>
              <p className="proj-desc">
                {expanded === p.id ? p.longDescription : p.description}
              </p>

              <button
                className="proj-expand"
                onClick={() => setExpanded(expanded === p.id ? null : p.id)}
              >
                {expanded === p.id ? "Show less ↑" : "Read more ↓"}
              </button>

              <div className="proj-tech">
                {p.tech.map(t => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
