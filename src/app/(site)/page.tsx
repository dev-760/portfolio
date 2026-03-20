import About from "@/components/About";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Stats from "@/components/Stats";
import Volunteering from "@/components/Volunteering";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Stats />
      <About />
      <Skills />
      <Experience />
      <Volunteering />
      <Certifications />
      <Achievements />
      <Projects />
      <Contact />
    </>
  );
};

export default HomePage;
