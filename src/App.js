import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import BasicExample from "./components/NavBar";
import Home from "./pages/home";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Footer from "./components/Footer";
import "./index.css";
import Particle from "./components/Particles";

function App() {
  return (
    <Router>
      <BasicExample />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        {/* Add other routes as needed */}
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
