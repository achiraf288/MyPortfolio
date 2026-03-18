import React from "react";
import { MemoryRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
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
        <main className="pt-20">
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
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
