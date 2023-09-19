import { useState } from "react"

const Sample = ()=>{
    const [Display, setDisplay] = useState(false);
    if(Display){
        return(
            <div>
                <h3>the condition is true</h3>
            </div>
        )
    }
    else{
        return(
            <div>
                <h3>the condition is false</h3>
            </div>
        )
    }
}
export default Sample;