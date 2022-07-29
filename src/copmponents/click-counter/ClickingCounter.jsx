import { useState } from "react";

const ClickingCounter=()=>{
    const intialValue=0;
    const [num,setNum]=useState(intialValue);
    const nums=[1,2,3,4,5];
    const incrementCount=()=>{
        setNum(prev=>prev+1);
    }

    return(
        <div>
            <h3>{num}</h3>
         <button onClick={incrementCount}> Increment</button>
           
        </div>
    )

}
export default ClickingCounter;