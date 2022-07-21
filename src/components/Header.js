import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <section className="header-container">
            <div className="inner-container">
                    <img src={require("../assets/PD.png")} alt="logo" className="logo"></img>
            </div>
        </section>
    )
}

export default Header;