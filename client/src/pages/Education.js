import React from "react";
import "./Education.css";

export default function Education({ data }) {
  const { education, skills } = data;

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">Academic</div>
        <h1 className="section-title">Education</h1>

        <div className="edu-cards">
          {education.map((e, i) => (
            <div key={e.id} className="edu-card" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="edu-num">0{i + 1}</div>
              <div className="edu-body">
                <span className="edu-period">{e.period}</span>
                <h2 className="edu-degree">{e.degree}</h2>
                <p className="edu-school">{e.school}</p>
                <p className="edu-location">{e.location}</p>
                <div className="edu-highlights">
                  <p className="edu-hl-label">Key Courses</p>
                  <div className="edu-hl-pills">
                    {e.highlights.map(h => (
                      <span key={h} className="tag">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills section */}
        <div className="skills-section">
          <div className="section-label" style={{ marginTop: "4rem" }}>Technical Skills</div>
          <h2 className="section-title" style={{ fontSize: "2rem" }}>Skills & Expertise</h2>
          <div className="skills-all">
            {Object.entries(skills).map(([cat, items]) => (
              <div key={cat} className="skill-group">
                <div className="skill-group-header">
                  <span className="skill-group-num">{Object.keys(skills).indexOf(cat) + 1 < 10 ? `0${Object.keys(skills).indexOf(cat) + 1}` : Object.keys(skills).indexOf(cat) + 1}</span>
                  <h3 className="skill-group-title">{cat}</h3>
                </div>
                <div className="skill-pills">
                  {items.map(s => (
                    <span key={s} className="skill-item">
                      <span className="skill-dot" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
