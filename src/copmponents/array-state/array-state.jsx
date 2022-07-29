
import { useState } from 'react';
const ArrayState=()=>{
       const [data,setData]=useState({num:0,arr:[]});
       const btnClick=()=>{
        setData(prev=>{
            data.num=prev.num +1;
            data.arr=prev.arr.concat(data.num)
            console.log(data);
            return{...data};
        })
       }

    return(
        <>
        <button onClick={btnClick}>Click Me</button>
        <h2>NUM: {data.num}</h2>
        <h3>List: </h3>
        <ul>
            {
                data.arr.map(n =><li>{n} </li>)
            }
        </ul>
        </>
    );

}
export default ArrayState;