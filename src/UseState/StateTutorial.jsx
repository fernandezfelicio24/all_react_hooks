import React, { useState } from 'react'


const StateTutorial = () => {

    // const [counter, setCounter] = useState(0);

    // const increment = () => {
    //         setCounter(counter +1);
    // };

    const [inputvalue, setInputvalue] = useState("felicio")

    let onChange = (event) => {
        const newValue = event.target.value;
        setInputvalue(newValue);
    }
        return(

            <div>

                {/* {counter}
                <button onClick={increment}>Increment</button> */}
                <input placeholder="enter something..." onChange={onChange} />
                {inputvalue}
            </div>
        )
};

export default StateTutorial;
