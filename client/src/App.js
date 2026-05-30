import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Contact from "./pages/Contact";
import { usePortfolio } from "./hooks/usePortfolio";

function Loader() {
  return (
    <div className="page-loader">
      <div className="loader-ring" />
      <p className="loader-text">loading portfolio...</p>
    </div>
  );
}

function ErrorState({ msg }) {
  return (
    <div className="page-loader">
      <p style={{ color: "var(--text2)", fontFamily: "var(--font-mono)", fontSize: "0.85rem" }}>
        ⚠ Could not connect to server. Make sure <code style={{ color: "var(--accent)" }}>node index.js</code> is running in the <code style={{ color: "var(--accent)" }}>server/</code> folder.
      </p>
      {msg && <p style={{ color: "var(--text3)", fontSize: "0.75rem", fontFamily: "var(--font-mono)", marginTop: "0.5rem" }}>{msg}</p>}
    </div>
  );
}

export default function App() {
  const { data, loading, error } = usePortfolio();

  if (loading) return <Loader />;
  if (error || !data) return <ErrorState msg={error} />;

  return (
    <>
      <Navbar name={data.name} />
      <Routes>
        <Route path="/"           element={<Home data={data} />} />
        <Route path="/experience" element={<Experience data={data} />} />
        <Route path="/projects"   element={<Projects data={data} />} />
        <Route path="/education"  element={<Education data={data} />} />
        <Route path="/contact"    element={<Contact data={data} />} />
      </Routes>
    </>
  );
}
