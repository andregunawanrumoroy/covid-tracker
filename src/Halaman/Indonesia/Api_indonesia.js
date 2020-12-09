import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NumberFormat from "react-number-format";

export default function Api_indonesia(){
  const [confirmed, setConfirmed] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
   
    useEffect(() => {
      axios
      .get("https://indonesia-covid-19.mathdro.id/api")
      .then(response => {
        console.log(response)
        setConfirmed(response.data.perawatan)
        setRecovered(response.data.sembuh)
        setDeaths(response.data.meninggal)
        
      })
      .catch(err => {
        console.log(err)
    })
    }, []);

    return (
    <div>
        <h1 className="Confirmed-All">
            <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
                <p>confirmed</p>
        </h1>
        <h1 className="Recovered-All">
            <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
                <p>recovered</p>
        </h1>
        <h1 className="Deaths-All">
            <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
                <p>deaths</p>
        </h1>
  </div>
)
}