import React from "react";
import { useState } from "react";

const ChildComponent = (props) => {
  const [name, setName] = useState();

  const [last, setLast] = useState();

  const DataSent = () => {
    props.UseData({
      name: name,

      last: last,
    });
  };

  return (
    <div>
      <div>
        <label>First Name</label>

        <br></br>

        <input
          placeholder="Enter  first name"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Last Name</label>

        <br></br>

        <input
          placeholder="Enter last name"
          onChange={(e) => setLast(e.target.value)}
        ></input>
      </div>

      <button onClick={DataSent}>Send</button>
    </div>
  );
};

export default ChildComponent;
