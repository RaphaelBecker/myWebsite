import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Header from "./Components/Navbar";
import ContactForm from "./Components/Contact";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

const styles = {
  about: {
    background: "#33FF99",
  },
  skills: {
    background: "#FFFFFF",
  },
  projects: {
    background: "#F6F6F6",
  },
};

function App() {
  const skillRef = useRef(null);
  const projectsRef = useRef(null);
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
        : homeRef;
    window.scrollTo(0, ref.current.offsetTop);
  };

  return (
    <div>
      <Header scrollToRef={scrollToRef} />

      <section ref={homeRef} style={styles.about}>
        <Intro scrollToRef={scrollToRef} />
      </section>
      <section ref={skillRef} style={styles.skills}>
        <Skills />
      </section>
      <section ref={projectsRef} style={styles.projects}>
        <Projects />
      </section>
      <section ref={contactRef} className="section contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
}

export default App;
