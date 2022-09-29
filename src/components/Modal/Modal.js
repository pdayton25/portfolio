import React from "react";

//Cases
import BundazzleCase from "../Cases/BundazzleCase/BundazzleCase";
import CollageCase from "../Cases/CollageCase/CollageCase";
import RefConCase from "../Cases/RefconCase/RefConCase";
import SkylightCase from "../Cases/SkylightCase/SkylightCase";
import ThirteenthCase from "../Cases/ThirteenthCase/ThirteenthCase";

import './Modal.css';

const Modal = ({show, setShow, selected}) => {
    const handleOffClick = (e) => {
        if(e.target !== e.currentTarget) {
            return
        } else {
            setShow(false);
        }
    }

    if(!show) {
        return null;
    } 

    const handleChildren = (selected) => {
        if(selected === "Skylight") {
            return (
                <SkylightCase />
            )
        }
        if(selected === "Bundazzle") {
            return (
                <BundazzleCase />
            )
        }
        if(selected === "RefCon") {
            return (
                <RefConCase />
            )
        }
        if(selected === "13th Floor") {
            return (
                <ThirteenthCase />
            )
        }
        if(selected === "Collage") {
            return (
                <CollageCase />
            )
        }

    }

    return (
        <div className="modal-container" onClick={(e) => {handleOffClick(e)}}>
            <div className="modal">
                {handleChildren(selected)}
            </div>
        </div>
    )
}
export default Modal;