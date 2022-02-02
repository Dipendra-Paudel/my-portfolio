import HeadTag from "../components/utils/HeadTag";
import HeroSection from "../components/ui/HeroSection";

const Home = () => {
  return (
    <div>
      <HeadTag title="Dipendra Paudel" keywords="Portfolio homepage" />

      <HeroSection />

      <div className="min-h-screen" id="skills"></div>
    </div>
  );
};

export default Home;
