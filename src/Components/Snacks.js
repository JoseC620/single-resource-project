import { useState, useEffect } from "react";
import axios from "axios";
import Snack from "./Snack";

const API = process.env.REACT_APP_API_URL;


export default function Snacks() {

    const [snacks, setSnacks] = useState([])

    useEffect(() => {
        axios
        .get(`${API}/snacks`)
        .then((response) =>{
            setSnacks(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.warn(error)
        })
    }, [])

    // for some reason whenever i make an edit to a snack it gets put to the end of the array, this is to keep it from not changing position on the webpage.
    snacks.sort((a, b) => a.id - b.id);

    return(
        <div>
            {snacks.map((snack) => {
              return <Snack key={snack.id} snack={snack} />;
            })}
        </div>
    )
}