import React from "react";
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import "./App.css";


const App = () => {
  return (
    <div className="container">
      <Hero />
      <About />
    </div>
  )
};
export default App;

/*
      <Header />
      <ProjectCards />
      <Footer />
*/