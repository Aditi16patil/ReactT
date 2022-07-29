import './contact.css'
import { useState } from "react";
const Contact = (props) => {

    const [contacted,setContacted]=useState(props.contacted)
    // let name="Aditi"
    // let email="aditi@gmail.com"
    // let phone="6764573648"

    let Gender ;
    if(props.gender=='M'){
        Gender='Mr'
    }else{
        Gender='Miss'
    }

    // 

    return ( 
        <div className='contactCard'>
            <div className={(contacted ? "checked contactCard":"contactCard")+" "+ (props.gender==="M"?"male":"female")}>
                <div>
      <h3>Name:{Gender} {props.name}</h3>
      
      
       {
        props.phone ? <h4>{props.phone}</h4> :''
       }
       {
        props.email ? <h4>{props.email}</h4> : <h4>Email :NA</h4>
       }
       
      <h3> Email :{props.email}</h3>
     
       <h3>Phone :{props.phone}</h3>

       <h3>Gender :{props.gender}</h3>
        
       </div>
       {/* <input ></input> Contacted */}
       <input type='checkbox' checked={contacted} onChange ={()=>setContacted(!contacted)}/> Contacted
       </div>
        </div>
     );
}
 
export default Contact;