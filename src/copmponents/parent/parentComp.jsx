import React from "react";

import { useState } from "react";

import ChildComponent from "../send-child/child";

const ParentComponent = () => {
  const [name, setName] = useState();

  const [last, setLast] = useState();

  const UserData = (e) => {
    setName(e.name);

    setLast(e.last);
  };

  return (
    <div>
      <h2>First Name : {name}</h2>

      <h2>Last Name : {last}</h2>

      <ChildComponent UseData={UserData}></ChildComponent>
    </div>
  );
};

export default ParentComponent;
