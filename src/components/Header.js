import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <section className="header-container">
            <div className="inner-container">
                    <img src={require("../assets/logo.png")} alt="logo" className="logo"></img>
                <div className="links">
                    <a href="#projects" className="button">PROJECTS</a>
                    <a href="#contact" className="button">CONTACT</a>
                </div>
            </div>
        </section>
    )
}

export default Header;