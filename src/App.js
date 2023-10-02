import React, {useEffect, useState} from "react";
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Footer from "./components/Footer/Footer";
import Design from "./components/Design/Design";
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
      <Footer />
    </div>
  )
};
export default App;
