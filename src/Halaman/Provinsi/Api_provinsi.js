import React, { useEffect, useState } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";

export default function Api_indonesia() {
    const [dataPro, setDataList] = useState([]);
    
    useEffect (() => {
        axios
        .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
        .then(response => {
            setDataList(response.data.data)
        })
        .catch (err => {
            console.log(err)
        })
    }, []);

    console.log(dataPro)
    return (
        <div>
            <h1 className="Data-Provinsi">
                <NumberFormat value={dataPro} thousandSeparator={true} displayType={'text'}/>
                <p>Confirmed</p>
            </h1>
        </div>
    )
}