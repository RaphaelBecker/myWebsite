import "./App.css";
import Header from "./Components/Navbar";
import ContactForm from "./Components/Contact";
import About from "./Components/About";
import Projects from "./Components/Projects";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <ContactForm />
    </div>
  );
}

export default App;
