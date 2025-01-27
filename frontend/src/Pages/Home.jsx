import ConnectionProcess from "../components/Home/ConnectionProcess";
import ContactSection from "../components/Home/ContactSection";
import HeroSection from "../components/Home/HeroSection";
import ServicesSection from "../components/Home/ServicesSection";
import About from "./About";

const Home = () => {
  return (
    <>
      <HeroSection />
      <ConnectionProcess />
      <ServicesSection />
      <About />
      <ContactSection />
    </>
  );
};

export default Home;
