import React, { useEffect, useState } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";

export default function Api_indonesia() {
    const [confirmed, setConfirmed] = useState("");
    const [recovered, setRecovered] = useState("");
    const [deaths, setDeaths] = useState("");

    useEffect (() => {
        axios
        .get("https://indonesia-covid-19.mathdro.id/api")
        .then(response => {
            console.log(response)
            setConfirmed(response.data.confirmed)
            setRecovered(response.data.recovered)
            setDeaths(response.data.deaths)
        })
        .catch (err => {
            console.log(err)
        })
    }, []);

    return (
        <div>
            <h1 className="Confirmed-Indonesia">
                <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
                <p>Confirmed</p>
            </h1>
            <h1 className="Recovered-Indonesia">
                <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
                <p>recovered</p>
            </h1>
            <h1 className="Deaths-Indonesia">
                <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
                <p>deaths</p>
            </h1>
        </div>
    )
}