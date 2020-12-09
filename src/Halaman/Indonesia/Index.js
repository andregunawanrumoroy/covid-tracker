import React from "react";
import Api_indonesia from "./Api_indonesia";

const Indonesia = () => {
    return (
        <div className="Indonesia-Container">
            <h1 style={{ fontFamily: "Sen", fontSize: "40px", padding: "20px"}}>Jumblah kasus di Indonesia</h1>
            <Api_indonesia/>
        </div>
    );
};

export default Indonesia;