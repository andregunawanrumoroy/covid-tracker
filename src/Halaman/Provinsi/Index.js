import React from "react";
import Api_provinsi from "./Api_provinsi";

const Provinsi = () => {
    return (
         <div className="Provinsi-Container">
            <h1 style={{ fontFamily: "Sen", fontSize: "60px" }}>Jumblah Kasus di seluruh Provinsi Indonesia</h1>
            <Api_provinsi/>
        </div>
    );
};

export default Provinsi;