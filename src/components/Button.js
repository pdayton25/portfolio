import React from "react";

const Button = ({ name }) => {

    return (
        <div className="button-wrapper" onClick={(e) => console.log('clicked')}>
            <button href="#"className="expand-view">{name}</button>
            <div className="arrow">\/</div>
        </div>
    )
}
export default Button;