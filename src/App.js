import React from "react";
import Hero from "./components/Hero";
import Header from './components/Header';
import ProjectCards from "./components/ProjectCards";


const App = () => {
  return (
    <div className="container">
      <Header />
      <Hero />
      <ProjectCards />
    </div>
  )
};
export default App;