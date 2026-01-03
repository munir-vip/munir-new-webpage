import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Photography from "./components/sections/Photography";
import Contact from "./components/sections/Contact";
import CursorGlow from "./components/animations/CursorGlow";
import FloatingElements from "./components/animations/FloatingElements";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <CursorGlow />
      <FloatingElements />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Photography />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
