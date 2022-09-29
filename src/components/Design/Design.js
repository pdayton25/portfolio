import React, { useState } from "react";
import Skylight from "./Skylight";
import Bundazzle from "./Bundazzle";
import RefCon from "./RefCon";
import ThirteenthFloor from "./ThirteenthFloor";
import Collage from "./Collage";
import Modal from "../Modal/Modal";


const Design = () => {

    const [show, setShow] = useState(false);
    const [selected, setSelected] = useState(null);

    return (
        <div className="designs-container">
            <div onClick={() => {setShow(true); setSelected('Skylight');}}>
                <Skylight />
            </div>
            <div onClick={() => {setShow(true); setSelected('Bundazzle');}}>
                <Bundazzle />
            </div>
            <div onClick={() => {setShow(true); setSelected('RefCon');}}>
                <RefCon />
            </div>
            <div onClick={() => {setShow(true); setSelected('13th Floor');}}>
                <ThirteenthFloor />
            </div>
            <div onClick={() => {setShow(true); setSelected('Collage');}}>
                <Collage />
            </div>
            <Modal show={show} setShow={setShow} selected={selected}/>
        </div>
    )
}

export default Design;