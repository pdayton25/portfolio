import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <section className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <div className="logo-wrap">
                        <img src={require("../assets/logo.png")} alt="logo" className="logo"></img>
                    </div>
                    <div className="section-router">
                        <a className="route" href="#hero">Home</a>
                        <a className="route" href="#projects">Projects</a>
                        <a className="route" href="#contact">Contact</a>
                    </div>
                </div>
                <div className="footer-right">
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/patrick-dayton-902b7176/" className="social-icon">
                            <img src={require(`../assets/LinkedIn.png`)} alt="LinkedIn" className="icon-img"></img>
                        </a>
                        <a href="https://github.com/pdayton25" className="social-icon">
                            <img src={require(`../assets/GitHub.png`)} alt="github" className="icon-img"></img>
                        </a>
                    </div>
                    <div className="right-title">EXTERNAL LINKS</div>
                </div>
            </div>
        </section>
    )
};
export default Footer;

