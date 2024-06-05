import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import BasicExample from "./components/NavBar";
import About from "./pages/about";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import ContactMe from "./pages/contact";
import Footer from "./components/Footer";
import "./index.css";
import Particle from "./components/Particles";

function App() {
  return (
    <div className="app-container">
      <Particle />
      <Router>
        <BasicExample />
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<ContactMe />} />
          {/* Add other routes as needed */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
