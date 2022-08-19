import HeadTag from "../components/utils/HeadTag";
import Navigation from "../components/ui/Navigation";
import HeroSection from "../components/pages/home/HeroSection";
import About from "../components/pages/home/About";
import Skills from "../components/pages/home/Skills";
import Projects from "../components/pages/home/Projects";
import Contact from "../components/pages/home/Contact";
import Footer from "../components/ui/Footer";
import WhatToExpectFromMe from "../components/pages/home/WhatToExpectFromMe";

const Home = () => {
  return (
    <div>
      <HeadTag title="Dipendra Paudel -- Fullstack Developer" keywords="Portfolio homepage" />

      <Navigation />
      <HeroSection />
      <About />
      <WhatToExpectFromMe />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
