import { contactList } from "../../data/contactList"
import Contact from "../contact/contact"

const Contacts=()=>{
    let result =contactList.map(c=><Contact key={c.id}
                                     name={c.name} 
                                     email={c.email} 
                                     phone={c.phone} 
                                     gender={c.gender}
                                     contacted={c.contacted}>
                                     
                                     </Contact> );
          return(
            <div>
                {result}
                
            </div>
          )  ;                         
}

export default Contacts;