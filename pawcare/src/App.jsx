import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Vetrrinarians from "./components/Vetrrinarians";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Appointment from "./components/Appointment";
import Questions from "./components/Questions";
import Footer from "./components/Footer";
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);
  return (
    <div>
      <Navbar />
      <Hero />
      <Vetrrinarians />
      <About />
      <Services />
      <Testimonials />
      <Appointment />
      <Questions />
      <Footer />
    </div>
  );
};

export default App;
