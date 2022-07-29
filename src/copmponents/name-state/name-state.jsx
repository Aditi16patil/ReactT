
import { useState } from 'react';
const NameState=()=>{
    const [name,setName]=useState({
        firstName:'',
        lastName:''
    });
    return(
        <>
          <h2>{JSON.stringify(name)}</h2>

<input type="text"
placeholder='Enter First Name'
value={name.firstName}
onChange={e=>setName({...name,firstName:e.target.value})}/>

<input type="text"
placeholder='Enter last Name'
value={name.lastName}
onChange={e=>setName({...name,lastName:e.target.value})}/>


        </>
      
    )







    

}
export default NameState;
