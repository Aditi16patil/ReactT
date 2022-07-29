import {connect} from 'react-redux';
import { checkChange, decrementNumber, incrementNumber, setUserName } from './../../redux/actionCreater';
import { useState } from 'react';
import { asyncTask } from '../../redux/asyncTask';

const ReduxComp=(props)=>{
    const [username,setUsername]=useState(0)
    return(
        <>
        <h2>User Name: {props.name}</h2>
        <h3>Num: {props.num}</h3>
         
         <input type="text" placeholder='Enter User Name' value={username}
         onChange={ (e)=> setUsername(e.target.value)}/><br/>
         <button onClick={()=>props.setUserName(username)}>Set User</button>

        <button onClick={props.onIncrementNum}>Increment</button>
        <button onClick={props.onDecrementNum}>Decrement</button>
        <br></br>
        <input type='checkbox' checked={props.checked} onChange={props.onCheckChange}/>Checked
        </>
    )
}
const  mapStateToProps=(state)=>{
  return {
    checked :state.checked,
    num:state.count,
    name: state.userName
  }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        onIncrementNum:()=>dispatch(asyncTask()),
      //  onIncrementNum:()=>dispatch(incrementNumber(5)),
        onDecrementNum:()=>dispatch(decrementNumber(2)),
        onCheckChange:()=>dispatch(checkChange()),
        setUserName:(payload)=>dispatch(setUserName(payload))
    }
}

 export default connect(mapStateToProps,mapDispatchToProps)(ReduxComp)