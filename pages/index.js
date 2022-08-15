import HeadTag from "../components/utils/HeadTag";
import Navigation from "../components/ui/Navigation";
import HeroSection from "../components/pages/home/HeroSection";
import About from "../components/pages/home/About";
import Skills from "../components/pages/home/Skills";
import Projects from "../components/pages/home/Projects";
import Contact from "../components/pages/home/Contact";

const Home = () => {
  return (
    <div>
      <HeadTag title="Dipendra Paudel" keywords="Portfolio homepage" />

      <Navigation />
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Home;
