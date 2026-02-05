import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Qualifications from "./components/Qualifications/Qualification";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import Scrollup from "./components/Scrollup/Scrollup";
import Certificates from "./components/Certificate/Certificate";
import Projects from "./components/Projects/Projects";

export default function App() {
  return (
    <>
      <Header />

     <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualifications />
          
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
      
    </>
  );
}