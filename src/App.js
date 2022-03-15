import React from "react";
import Hero from "./components/Hero";
import Header from './components/Header';
import ProjectCards from "./components/ProjectCards";
import Contact from "./components/Contact";


const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <ProjectCards />
      <Contact />
    </div>
  )
};
export default App;