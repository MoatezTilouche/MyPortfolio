import React, { lazy } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import 'flowbite';

import ResponsiveAppBar from "./components/Navbar";
import LoadingRoute from "./components/LoadingRoute";

import "./App.css";
import "./index.css";

// Lazy load components
const Welcome = lazy(() => import("./components/Welcome"));
const Services = lazy(() => import("./components/Services"));
const Skills = lazy(() => import("./components/skills"));
const Projects = lazy(() => import("./components/Projects"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <Router>
      {/* Navbar is always visible */}
      <ResponsiveAppBar />

      {/* Define routes for each section */}
      <Routes>
        <Route path="/" element={<LoadingRoute component={Welcome} />} />
        <Route path="/services" id="services" element={<LoadingRoute component={Services} />} />
        <Route path="/skills" element={<LoadingRoute component={Skills} />} />
        <Route path="/projects" element={<LoadingRoute component={Projects} />} />
        <Route path="/contact" element={<LoadingRoute component={Footer} />} />
      </Routes>
    </Router>
  );
}

export default App;
