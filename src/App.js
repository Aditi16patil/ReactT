
import Contacts from "./copmponents/contacts/contacts";
import Header from "./copmponents/header/header";
import Table from "./copmponents/Table/table";
import ClickCounter from "./copmponents/click-counter/clickCounter";
import Contact from "./copmponents/contact/contact";
import ClassState from "./copmponents/class-state/class-state";
import NameState from "./copmponents/name-state/name-state";
import ArrayState from "./copmponents/array-state/array-state";
import Parent from "./copmponents/parent/parent";
import ParentComponent from "./copmponents/parent/parentComp";
import HoverCounter from "./copmponents/hover-counter/hover-counter";
import ClickingCounter from "./copmponents/click-counter/ClickingCounter";
import Users from "./copmponents/users/User";
import User from "./copmponents/user/user";

import UserContext from "./context/user-context";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import React, { useState } from "react";
import ContextComp from "./copmponents/context-comp/context-comp";
import ReduxComp from "./copmponents/redux-comp/redux-comp";
import ParentComp from "./Task/ParentComp";
import Form from "./copmponents/form/form";
import NotFoundComp from "./copmponents/not-found/not-found";

const LazyBigComp=React.lazy(()=> import('./copmponents/big-comp/big-comp'))
function App(){
    
  const[data,setData]=useState({userName :"aditi", userCount:0})
const updateData=(key,value)=>{
  setData({
    ...data,
    [key]:value
  })

}
return (

 <BrowserRouter>
<UserContext.Provider value={{getData:data ,setData:updateData}}>
<Header></Header>

<Routes>
  <Route path="/" element={<Contacts/>}> </Route>
  <Route path="/contacts" element={<Table/>}> </Route>
  <Route path="/counter" element={<HoverCounter/>}> </Route>
  <Route path="/context" element={<ContextComp/>}> </Route>
  <Route path="/users" element={<Users/>}> </Route>
  <Route path="/users/:id" element={<User/>}> </Route>
  <Route path="/redux" element={<ReduxComp/>}> </Route>
  <Route path="/form" element={<Form/>}> </Route>
  <Route path="/big" element={<React.Suspense fallback='Loading...'><LazyBigComp></LazyBigComp></React.Suspense>}> </Route>
  <Route path="*" element={<NotFoundComp/>}> </Route>
 </Routes>
 </UserContext.Provider>
 </BrowserRouter> 

)



}



export  default App; 












{/* <>
<ParentComp/>
</> */}