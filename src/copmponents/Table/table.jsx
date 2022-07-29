import { contactList } from "../../data/contactList"
import Contact from "../contact/contact"
const Table=()=>{
    return (

        <div>

             <table className='table-width'>

             <tr>

               <th>Id</th>
               
                <th>Name</th>

               <th>Gender</th>

               <th>Email</th>

               <th>Phone</th>

             </tr>

             {contactList .map((item)=>(

             <tr className={item.gender==="M" ? "male ": "female "}>
             
               <td>{item.id}</td>

               <td>{item.name}</td>

               <td>{item.gender}</td>

               <td>{item.email}</td>

               <td>{item.phone}</td>

             </tr>

          ))}

           </table>

        </div>

    );

}
export default Table;










//     let table =contactList.map(c=><Contact key={c.id}
//         name={c.name} 
//         email={c.email} 
//         phone={c.phone} 
//         gender={c.gender}></Contact> );
// return(
//     <div>
//         <table>
//             <tr>
//             <th>Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Gender</th>
//             </tr>

//             <tbody>
//                 <td>
//                     <tr>
//                     name
//                     </tr>
//                    </td>

//             </tbody>

//         </table>
//     </div>
// )
