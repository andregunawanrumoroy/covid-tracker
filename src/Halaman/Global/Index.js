import React from "react";
import Api_global from "./Api_global";

const Global = () => {
    return (
        <div className="Global-Container">
            <h1 style={{ fontFamily: "Sen", fontSize: "40px", padding: '20px'}}>Jumblah kasus di seluruh dunia</h1>
            <Api_global/>
        </div>
    );
};

export default Global;
