import React, { useState } from "react";
import { sendContact } from "../hooks/usePortfolio";
import "./Contact.css";

const SUBJECTS = [
  "Job Opportunity",
  "Freelance Project",
  "Collaboration",
  "Just Saying Hi",
  "Other"
];

export default function Contact({ data }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      const res = await sendContact(form);
      if (res.success) {
        setStatus({ type: "success", msg: res.message });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", msg: res.error || "Something went wrong." });
      }
    } catch {
      setStatus({ type: "error", msg: "Server unreachable. Please email me directly." });
    }
    setLoading(false);
  };

  return (
    <div className="page">
      <div className="container section">
        <div className="section-label">Get In Touch</div>
        <h1 className="section-title">Contact</h1>

        <div className="contact-layout">
          {/* Left: Info */}
          <div className="contact-info">
            <p className="contact-intro">
              Got an opportunity, project idea, or just want to connect? I'm always open to interesting conversations.
            </p>

            <div className="contact-items">
              <a href={`mailto:${data.email}`} className="contact-item">
                <div className="ci-icon">@</div>
                <div>
                  <p className="ci-label">Email</p>
                  <p className="ci-val">{data.email}</p>
                </div>
              </a>
              <a href={`tel:${data.phone.replace(/-/g, "")}`} className="contact-item">
                <div className="ci-icon">☏</div>
                <div>
                  <p className="ci-label">Phone</p>
                  <p className="ci-val">{data.phone}</p>
                </div>
              </a>
              <div className="contact-item">
                <div className="ci-icon">📍</div>
                <div>
                  <p className="ci-label">Location</p>
                  <p className="ci-val">{data.location}</p>
                </div>
              </div>
            </div>

            <div className="contact-socials">
              <a href={data.linkedin} target="_blank" rel="noreferrer" className="social-btn">
                LinkedIn ↗
              </a>
              <a href={data.github} target="_blank" rel="noreferrer" className="social-btn">
                GitHub ↗
              </a>
            </div>

            <div className="availability-card">
              <span className="dot-live" />
              <div>
                <p className="avail-title">Available for Work</p>
                <p className="avail-sub">Open to full-time roles & freelance projects</p>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="John Smith"
                  value={form.name} onChange={handleChange} required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="john@company.com"
                  value={form.email} onChange={handleChange} required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <div className="subject-pills">
                {SUBJECTS.map(s => (
                  <button
                    key={s} type="button"
                    className={`subject-pill${form.subject === s ? " active" : ""}`}
                    onClick={() => setForm({ ...form, subject: s })}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                rows={6}
                placeholder="Tell me about your project, opportunity, or just say hello..."
                value={form.message} onChange={handleChange} required
              />
            </div>

            {status && (
              <div className={`form-status form-status--${status.type}`}>
                {status.type === "success" ? "✓ " : "✕ "}
                {status.msg}
              </div>
            )}

            <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
              {loading ? (
                <><span className="btn-spinner" /> Sending...</>
              ) : (
                <>Send Message ↗</>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
