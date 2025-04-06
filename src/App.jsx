import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Portfolio } from "./components/Portfolio";
import { ProjectDetail } from "./components/ProjectDetail";
import { Contact } from "./components/Contact";

export function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-br from-purple-900 via-gray-900 to-teal-900 animate-gradient">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Portfolio />
                <Contact />
              </>
            }
          />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
