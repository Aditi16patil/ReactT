import { useState } from "react";

const ClickCounter=()=>{
    const intialValue=0;
    const [num,setNum]=useState(intialValue);
    const nums=[1,2,3,4,5];

    const add5Nums=()=>{
        for(let i=0; i<nums.length; i++){
            setNum(prev=> prev+ nums[i])
        }
    }
    return(
        <div>
            <h3>{num}</h3>
            <button onClick={ ()=> setNum(intialValue)}> Reset</button>
            <button onClick={ ()=> setNum(num + 1)}> Increment</button>
            <button onClick={ ()=> setNum(num -1)}> Decrement</button>
            <button onClick={ add5Nums}> Add Multiple Number</button>
        </div>
    )

}
export default ClickCounter;