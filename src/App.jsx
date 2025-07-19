import React from "react";
import Navbar from "./compo/Navbar";
import Hero from "./compo/Hero";
import About from "./compo/About";
import "./index.css";
import Skills from "./compo/Skills";
import Projects from "./compo/ProjectCard";
import Contact from "./compo/ContactForm";
import Footer from "./compo/Footer";

const App = () => {
  return (
    <>
      
      <div  className="relative w-full min-h-[800px] overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
        
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="src/assets/224141.mp4" type="video/mp4" />
        </video>

        
        <div className="absolute inset-0 bg-black/50 z-10" />

        {/* Navbar + Hero go on top */}
        <div className="relative z-20 flex flex-col gap-[15px] justify-center items-center">
          <Navbar />
          <section
            id="home"
            className="w-full min-h-screen text-white flex items-center justify-center px-8"
          >
                  <div className="main" aria-hidden="true"></div>
            <Hero />
          </section>
        </div>
      </div>

     
      <section id="about" className="w-full p-17">
        <About />
      </section>

      <section id="skills" className="w-full">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
};

export default App;
