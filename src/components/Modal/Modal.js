import React from "react";

const Modal = (props) => {

    return (
        <div className="modal-container">
            <div className="modal">
                <div 
                onClick={() => {}}
                >
                X</div>
                {props.children}
            </div>
        </div>
    )
}
export default Modal;