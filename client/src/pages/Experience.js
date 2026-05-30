import React, { useState } from "react";
import "./Experience.css";

export default function Experience({ data }) {
  const { experience } = data;
  const [active, setActive] = useState(0);
  const job = experience[active];

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">Career</div>
        <h1 className="section-title">Work Experience</h1>

        <div className="exp-layout">
          {/* Sidebar */}
          <aside className="exp-sidebar">
            {experience.map((e, i) => (
              <button
                key={e.id}
                className={`exp-tab${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              >
                <span className="tab-num">0{i + 1}</span>
                <span className="tab-info">
                  <span className="tab-company">{e.company}</span>
                  <span className="tab-period">{e.period}</span>
                </span>
                <span className="tab-arrow">→</span>
              </button>
            ))}
          </aside>

          {/* Detail Panel */}
          <div className="exp-panel" key={active}>
            <div className="exp-panel-header">
              <div>
                <span className="exp-type-badge">{job.type}</span>
                <h2 className="exp-role">{job.role}</h2>
                <p className="exp-company-loc">
                  <span className="exp-company">{job.company}</span>
                  <span className="exp-dot">·</span>
                  <span className="exp-loc">{job.location}</span>
                  <span className="exp-dot">·</span>
                  <span className="exp-period">{job.period}</span>
                </p>
              </div>
            </div>

            <ul className="exp-bullets">
              {job.bullets.map((b, i) => (
                <li key={i} className="exp-bullet" style={{ animationDelay: `${i * 0.07}s` }}>
                  <span className="bullet-arrow">▹</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="exp-tags">
              {job.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>

        {/* Timeline strip */}
        <div className="timeline-strip">
          {experience.map((e, i) => (
            <div key={e.id} className={`timeline-node${active === i ? " active" : ""}`} onClick={() => setActive(i)}>
              <div className="tnode-dot" />
              <p className="tnode-company">{e.company}</p>
              <p className="tnode-period">{e.period}</p>
              {i < experience.length - 1 && <div className="tnode-line" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}