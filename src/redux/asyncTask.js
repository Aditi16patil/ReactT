import { incrementNumber } from "./actionCreater";
import axios from 'axios'

const asyncTask=()=>{
    let num=0;
    let uri='https://www.random.org/integers/?num=1&min=0&max=9&col=1&base=10&format=plain&rnd=new';

    return dispatch=>{
        axios.get(uri).then(response =>{
            num=response.data;
            console.log(num);
            dispatch(incrementNumber(num));
        }).catch(err=>{
            console.log(err);
        })
    }
}

export{asyncTask}