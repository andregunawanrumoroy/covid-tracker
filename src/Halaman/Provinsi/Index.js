import React from "react";
import Api_provinsi from "./Api_provinsi";

const Provinsi = () => {
    return (
         <div className="Provinsi-Container">
            <p>Jumlah Kasus Per Provinsi</p>
            <Api_provinsi/>
        </div>
    );
};

export default Provinsi;