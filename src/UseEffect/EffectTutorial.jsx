import React, {useEffect, useState} from 'react'
import axios from 'axios';


function EffectTutorial() {
    const [data, setData] = useState("")
    const [count, setCount] = useState(0);

    //if you want call the useEffect whenever the state count is change then
    //you can add [count] but if you don't want then you don't have to add [count] instead just []

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then((response) => {
                // console.log(response)
                setData(response.data[0].email);
                console.log("API WAS CALLED");
            });
    },[]);
    
    return (
        <div>
            Hello World
        <h1>{data}</h1>
        <h1>{count}</h1>
        <button
            onClick={() => {
            setCount(count + 1);
            }}
        >
            Click
        </button>
        </div>
    )
}

export default EffectTutorial

//useEffect can use for many things but primarily for making API calls
// Whatever the function we put inside the useEffect, that will call first
// everytime the page is render or whenever you change the state the useEffect
//will call firstly