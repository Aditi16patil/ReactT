


import { useEffect,useState } from 'react';
const ChildCopm = (props) => {

    const Deletes=(e)=>{
        props.Deletelength(e)
            }
        
            return (
                <div className='container mt-3'>
                     {props.length}
                    <button  type="button"  onClick={()=>Deletes(props.length)}> Delete</button>
                    
                </div>
            );
        };
 

export default ChildCopm









// import React from 'react'
// import { useEffect } from 'react';

// import { useState } from 'react';

// const ChildCopm = ({arr}) => {

//     const [data,setData] = useState([]);

//     const removeItem = (index) => {
//         let newData = [...data];
//         newData.splice(index,1);
//         setData(newData);
//     }

//     useEffect(()=>{
//         if(data.length !== arr.length){
//             let temp = [...arr];
//             setData(temp);
//         }
//         // eslint-disable-next-line
//     },[arr])

//   return (
//     <div>
//        {
//         data.map((item,index)=>{
//             return(
//                 <li key={index}>{index+1} . {item} &nbsp; &nbsp;
//                     <button onClick={()=>removeItem(index)}> remove </button> &nbsp;
//                 </li>
//             )
//         })}
//     </div>
//   )
// }

// export default ChildCopm
