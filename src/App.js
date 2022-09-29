import React, {useEffect, useState} from "react";
import Hero from "./components/Hero/Hero";
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Footer from "./components/Footer/Footer";
import Design from "./components/Design/Design";
//aos
import Aos from "aos";
import 'aos/dist/aos.css';

import "./App.css";



const App = () => {
  const [sectionToggle, setSectionToggle] = useState(0)
  console.log(sectionToggle);

  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  function sectionBar() {
    if(sectionToggle === 0) {
      return (
        <Projects />
      )
    } else {
      return <Design />
    }
  }

  useEffect(() => {
    if(sectionToggle === 0) {
      let Projects= document.getElementsByClassName('projects-tab')
      Projects[0].classList.add('active');

      let Remove= document.getElementsByClassName('design-tab')
      Remove[0].classList.remove('active');
    } else {
      let Projects = document.getElementsByClassName('design-tab')
      Projects[0].classList.add('active');

      let Remove= document.getElementsByClassName('projects-tab')
      Remove[0].classList.remove('active');
    }
  },[sectionToggle])

  return (
    <div className="container">
      <Hero />
      <About />
      <div className="section-select">
        <p className="select projects-tab" onClick={(e) =>{e.preventDefault(); setSectionToggle(0)}}>Projects</p>
        <p className="select design-tab" onClick={(e) => {e.preventDefault(); setSectionToggle(1)}}>Design Portfolio</p>
      </div>
      {sectionBar()}
      <Footer />
    </div>
  )
};
export default App;
