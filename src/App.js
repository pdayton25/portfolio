import React from "react";
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from "./components/Footer/Footer";

import "./App.css";


const App = () => {
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
