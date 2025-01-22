import ConnectionProcess from "../components/Home/ConnectionProcess";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import Contact from "./Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ConnectionProcess />
      <ServicesSection />
      <Contact />
    </>
  );
};

export default Home;
