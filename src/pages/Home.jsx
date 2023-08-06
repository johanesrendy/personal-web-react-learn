import Public from "../layouts/Public";
import Hero from "../layouts/home/Hero";
import About from "../layouts/home/About";
import Skills from "../layouts/home/Skills";
import Experience from "../layouts/home/Experience";
import Projects from "../layouts/home/Projects";
import Contact from "../layouts/home/Contact";

function Home() {
  return (
    <div className="absolute -z-100 font-['Rubik'] w-full bg-black text-white">
      <Public>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </Public>
    </div>
  );
}

export default Home;
