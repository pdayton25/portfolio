import React from "react";
import "./Button.css";

const Button = ({ name }) => {

    return (
        <div className="button-wrapper" onClick={(e) => console.log('clicked')}>
            <button href="#"className="expand-button">{name}
                <div className="arrow">
                    <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1L10 10L19 1" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </button>
        </div>
    )
}
export default Button;