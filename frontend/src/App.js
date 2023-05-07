import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Navbar";
import ContactForm from "./Components/Contact";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Companies from "./Companies";
import Footer from "./Components/Footer";

function App() {
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
  const companiesRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef = useRef(null);

  const scrollToRef = (refName) => {
    const ref =
      refName === "aboutRef"
        ? skillRef
        : refName === "projectsRef"
        ? projectsRef
        : refName === "contactRef"
        ? contactRef
        : refName === "companiesRef"
        ? companiesRef
        : homeRef;
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <div>
      <section ref={homeRef}>
        <Intro scrollToRef={scrollToRef} />
      </section>
      <section ref={skillRef}>
        <Skills />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={companiesRef}>
        <Companies />
      </section>
      <section ref={contactRef}>
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
