import React from "react";
import Hero from "./components/Hero";
import Header from './components/Header';
import ProjectCards from "./components/ProjectCards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Project from "./components/Project";
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