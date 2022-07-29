import { useState } from "react"
import "./form.css"
import { axios } from 'axios';
const Form =(props)=>{
const [formData,setUser]=useState({ user: {name : '',
                                      username:'',
                                      email:'',
                                      phone:''},
                                    validationMsg:{name : '',
                                                  username:'',
                                                  email:'',
                                                 phone:''}
                                  });

    const handleInput=(e)=>{
    //let id=e.target.id;
    //let value=e.target.value;
    let{id, value}=e.target; //to bind the values
    let msg=''
    switch(id){
       
           case 'name':
            msg=value.length===0 ? 'Name is Mandatory' :
            (value.length<3 ? 'name must have atleast 3 charachter': '')
            break;

            case 'username':
                msg=value.length===0 ? 'username is Mandatory' :
                (value.length<3 ? 'name must have atleast 3 charachter': '')
                break;

                case 'email':
                    msg= value.length === 0 ? "Please Enter Your Email" : 
                    (value.length < 3 ? " Please Enter Correct Email" : "");
              break;

              case 'phone':
                msg= value.length === 0 ? "Please Enter Your Phone Number" : 
                (value.length < 10 ? " Please Enter Correct Phone number" : "");
              break;                

            default:
                break;
    }

    // **setUser({...user,[id]:value})
   setUser({ ...formData,  
             validationMsg:{...formData.validationMsg,[id]:msg},
              user:{...formData.user,[id]:value}
            })
    }

       
    const validationForm=()=>{
        let valid=true;
        Object.values(formData.validationMsg).forEach(value=>{
            if(value.length!==0)
            valid=false;
        })
        return valid;
    }

    const handleSubmit =(e)=>{
        e.preventDefault(); //after clicking on submit button form will not refresh , we can see data into consol
       console.log(formData.user);

       if(validationForm()){
        axios.post('https://jsonplaceholder.typicode.com/users',formData.user).then(resp=>{
            console.log('data Submitted',resp.data)
        })
       }
       else{
        console.log('Invlid Form ')
       }
      
    }
  
    return(
        <div className="containerBox">
         <form onSubmit={handleSubmit}>

            <div className="form-group" style={{marginBottom:'10px'}}>
                <label>Name</label>
                <input type="text"
                       id="name"
                       placeholder="Enter Name"
                       className="form-control"
                       onChange={handleInput}/>

                       {
                        formData.validationMsg.name.length!==0 ?
                        <div className="alert alert-danger">
                            {formData.validationMsg.name} 
                        </div>:''
                       }
            </div>

            <div className="form-group" style={{marginBottom:'10px'}}>
                <label>User Name</label>
                <input type="text"
                       id="username"
                       placeholder="Enter User Name"
                       className="form-control"
                       onChange={handleInput}/>

                       
                    {
                        formData.validationMsg.username.length!==0 ?
                        <div className="alert alert-danger">
                            {formData.validationMsg.username} 
                        </div>:''
                       }
            </div>

            <div className="form-group" style={{marginBottom:'10px'}}>
                <label>Email</label>
                <input type="text"
                       id="email"
                       placeholder="Enter Email"
                       className="form-control"
                       onChange={handleInput}/>

                    {
                        formData.validationMsg.email.length!==0 ?
                        <div className="alert alert-danger">
                            {formData.validationMsg.email} 
                        </div>:''
                       }
            </div>

            <div className="form-group" style={{marginBottom:'10px'}}>
                <label>Phone</label>
                <input type="text"
                       id="phone"
                       placeholder="Enter Phone"
                       className="form-control"
                       onChange={handleInput}/>

                      {
                        formData.validationMsg.phone.length!==0 ?
                        <div className="alert alert-danger">
                            {formData.validationMsg.phone} 
                        </div>:''
                       }
            </div>
         <div>
            <button className="btn btn-primary">Submit</button>
         </div>

         </form>

        </div>
    )

}
export default Form