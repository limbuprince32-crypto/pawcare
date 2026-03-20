import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Vetrrinarians from "./components/Vetrrinarians";
import About from "./components/About";
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
    </div>
  );
};

export default App;
