import ConnectionProcess from "../components/Home/ConnectionProcess";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ConnectionProcess />
      <ServicesSection />
      <About />
      <Contact />
    </>
  );
};

export default Home;
