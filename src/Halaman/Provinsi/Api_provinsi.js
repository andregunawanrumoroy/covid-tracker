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
        <>
            {dataPro.map((item, index) => {
                return(
                    <NumberFormat value={dataPro} thousandSeparator={true} displayType={'text'}/>
                )
            })}
        </>
    )
}