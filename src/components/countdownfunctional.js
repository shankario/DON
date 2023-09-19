import { useState } from "react"

const Counterfunctional = () => {
    const {value, setvalue} = useState(0);
    const increment = () =>{
        setvalue(value +1);
    }
    return (
        <div>
            <h3>counter functional value: {value} </h3>
            <button onClick={increment}>increment value</button>
        </div>);
} 

export default Counterfunctional;