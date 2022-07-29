import axios from "axios";
import{useParams} from 'react-router-dom'
import { useEffect,useState } from "react";

const User = () => {
  const [user, getUsers] = useState({});

  const loadUsers = (id) => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/" +id)
      .then((response) => {
        // console.log("DATA", response.data);

        console.log(response);

        getUsers(response.data);
      })
      .catch((err) => {
        console.log("Error", err.message);
      });
  };
 const{id}=useParams();
  useEffect(()=>{
    loadUsers(id)
  })

  return (
    <>
      {/* <button onClick={loadUsers}>Load Users</button> */}

      <div>
        <ul>
          <li> name:{user.name}</li>
          <li> username:{user.username}</li>
          <li> email:{user.email}</li>
          <li> city:{ user.address && user.address.city}</li>
        </ul>
      </div>
    </>
  );
};

export default User;
