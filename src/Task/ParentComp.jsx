import React,{useState,useEffect} from "react";
import ChildCopm from "./ChildComp";










function ParentComp(props){



   const[addcomponent , setAddcomponent ]=useState([])
  
    let length=[]
    length=addcomponent.length

    console.log("key",addcomponent.keys())
    console.log(addcomponent)
    console.log(length)


    const Delete=(e)=>{
       let Filter=addcomponent.filter(item=>item !== e)
       setAddcomponent(Filter)
      
        
    }
     const AddComponent=()=>{
        setAddcomponent(addcomponent.concat(<ChildCopm key={addcomponent.length}  length={length} Deletelength={Delete } />)  );
     }
    return (
        <div >
            <div>
                <button type="button"  onClick={AddComponent}> Add Component</button>

            </div>
          
            {addcomponent}
         
        </div>
    );
};

    export default ParentComp;

















// function ParentComp(props){

//     const [data,setData] = useState([]);
//     const [textinput,setTextInput] = useState("");

//     const addItem = (e) => {
//         e.preventDefault();
//         const tempdata = [...data];
//         tempdata.push(textinput);
//         setData(tempdata);
//         setTextInput("");
//     }
   
//     return(
//         <div>
//             <h1>Registry</h1>
//             <form onSubmit={addItem}>
//                 <label>
//                     Text input : 
//                     &nbsp; <input type="text" value={textinput} onChange={(e)=>setTextInput(e.target.value)}/>
//                 </label>&nbsp; &nbsp;
//                 <input type="submit" value="Submit"/>
//             </form><br/>
//             <div>
//               <ChildCopm arr={data} />
//             </div>
//         </div>
//     )
// }

// export default ParentComp;
 
