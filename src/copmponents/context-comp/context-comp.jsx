import { useContext } from "react"
import UserContext from "../../context/user-context"


const ContextComp=()=>{
    let value= useContext(UserContext)

    return(
        <>
        <h3>Context Value:{value.getData.userName}</h3>
        <h3>Cont :{value.getData.userCount}</h3>
        <button onClick={()=>
           value.setData("userCount",value.getData.userCount+1)
         }>Increment</button>
        </>
    )
}
export default ContextComp;