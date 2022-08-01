import React, {useEffect} from "react";
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from "./components/Footer/Footer";

//aos
import Aos from "aos";
import 'aos/dist/aos.css';

import "./App.css";


const App = () => {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  return (
    <div className="container">
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  )
};
export default App;
