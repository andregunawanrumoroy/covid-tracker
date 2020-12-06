import React, { useEffect, useState} from "react";
import axios from "axios";

const Indoapi = () => {
    const [confirmed, setConfirmed] = useState("");
    const [recovered, setRecovered] = useState("");
    const [deaths, setDeaths] = useState("");

    useEffect(() => {
        axios
            .get("https://indonesia-covid-19.mathdro.id/api")
            .then((response) => {
                setConfirmed (response.data.confirmed.value);
                setRecovered (response.data.recovered.value);
                setDeaths (response.data.deaths.value);
            })
        }, [])

    return (
        <div>
            <table>
                <tr>
                    <th>
                        <p>Confirmed</p>
                        <NumberFormat value={confirmed} thousandSeparator={true} displayType={'text'}/>
                    </th> 
                    <th>
                        <p>Recovered</p>
                        <NumberFormat value={recovered} thousandSeparator={true} displayType={'text'}/>
                    </th> 
                    <th>
                        <p>Deaths</p>
                        <NumberFormat value={deaths} thousandSeparator={true} displayType={'text'}/>
                    </th>                
                </tr>
            </table>
        </div>
    );
};

export default Indoapi;