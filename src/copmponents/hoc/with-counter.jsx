import { useState } from 'react';
const WithCounter=(Comp)=>{

    const NewComp=(props)=>{
        const [count,setCount]=useState(props.start !=null ? parseInt(props.start) :0);
        const incrementCount=()=>{
            setCount(prev=>prev+1);
        }
        return (
            <Comp{...props} count={count} increment={incrementCount}/>
        )
    }
    return NewComp;
}

export default WithCounter;