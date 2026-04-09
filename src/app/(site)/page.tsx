import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import PersonalStatement from "@/components/PersonalStatement";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <PersonalStatement />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
