import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Users = () => {
  const [users, getUsers] = useState([]);

  const loadUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // console.log("DATA", response.data);

        console.log(response);

        getUsers(response.data);
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  };

  useEffect(() => {
    loadUsers();
  });

  return (
    <>
      {users.map((value) => {
        return (
          <ul>
            <li key={value.id}>
              <Link to={"/users/" + value.id}>name:{value.name}</Link>
            </li>
          </ul>
        );
      })}
    </>

    // //   {/* <button onClick={loadUsers}>Load Users</button> */}
    //  <>
    // <ul>
    //   {
    //     users.map(u=><li key={u.id}><Link to={'/users/' + u.id} >name:{u.name}</Link></li>)
    //   }
    // </ul>
    // </>
  );
};

export default Users;

// import axios from 'axios';
// import { useState } from 'react';
// const Users=()=>{

//     const BASE_URL="https://jsonplaceholder.typicode.com/";
//     const [users,setUsers]=useState([ ]);

//     const loadUsers=()=>{
//         axios.get( BASE_URL + "users").then(response=>{
//            // console.log("DATA",response.data);
//           console.log(response);
//           setUsers(response.data)
//         }).catch(err=>{
//             console.log("Error",err.message);
//         })

//     }

//     return(
//         <>

//         <button onClick={loadUsers}>Load Users</button>
//         <div>
//             <h3>
//                 {users.name}
//             </h3>
//         </div>
//         </>
//     )
// }
// export default Users;
