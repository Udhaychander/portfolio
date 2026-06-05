import React, { useState } from "react";
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
      const res = await fetch("https://formspree.io/f/xlgkdwdn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message
        })
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({
          type: "success",
          msg: "Message sent! I'll get back to you within 24 hours."
        });
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({
          type: "error",
          msg: data.error || "Something went wrong. Please try again."
        });
      }
    } catch {
      setStatus({
        type: "error",
        msg: "Network error. Please email me directly at bharathaudhay@gmail.com"
      });
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