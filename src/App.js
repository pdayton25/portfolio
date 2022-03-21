import React from "react";
import Hero from "./components/Hero";
import Header from './components/Header';
import ProjectCards from "./components/ProjectCards";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";


const App = () => {
  return (
    <div className="container">
      <Header />
      <div className="spacer"></div>
      <Hero />
      <ProjectCards />
      <Contact />
      <Footer />
    </div>
  )
};
export default App;