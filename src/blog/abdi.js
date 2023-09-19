import { useEffect, useState } from "react";

function Safe(){
    const [age,setage]=useState(23)
    const changeAge = ()=>{
    setage(age + 1)
    }
    useEffect(()=>{
        console.log("age change")

    })
    
    return(
        <button onClick={changeAge}>click</button>
    )
}
export default Safe;