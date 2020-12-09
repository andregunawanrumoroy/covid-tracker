import React, { useEffect, useState } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";

export default function Api_global() {
    const [confirmed, setConfirmed] = useState("");
    const [recovered, setRecovered] = useState("");
    const [deaths, setDeaths] = useState("");

    useEffect (() => {
        axios
        .get("https://covid19.mathdro.id/api")
        .then(response => {
            console.log(response)
            setConfirmed(response.data.confirmed.value)
            setRecovered(response.data.recovered.value)
            setDeaths(response.data.deaths.value)
        })
        .catch (err => {
            console.log(err)
        })
    }, []);

    return (
        <div className="Container">
            <h1 className="Confirmed-Global">
                <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
                <p>Confirmed</p>
            </h1>
            <h1 className="Recovered-Global">
                <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
                <p>recovered</p>
            </h1>
            <h1 className="Deaths-Global">
                <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
                <p>deaths</p>
            </h1>
        </div>
    )
}