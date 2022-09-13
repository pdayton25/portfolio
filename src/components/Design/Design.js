import React from "react";
import Skylight from "./Skylight";
import Bundazzle from "./Bundazzle";
import RefCon from "./RefCon";
import ThirteenthFloor from "./ThirteenthFloor";
import Collage from "./Collage";


const Design = () => {
    return (
        <div className="designs-container">
            <Skylight />
            <Bundazzle />
            <RefCon />
            <ThirteenthFloor />
            <Collage />
        </div>
    )
}

export default Design;