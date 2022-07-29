import SenderChild from "../send-child/sender-child";
import { useState } from 'react';


const Parent = (props) => {
    const[val,getVal]=useState ('')
   const getValue=(e)=>{
    getVal(e)
   }

return ( 
        <>
        <h2>Valur from child :{val}</h2>
        <hr/>
        <SenderChild onSend={getValue} />
        </>
     );
}
 
export default Parent