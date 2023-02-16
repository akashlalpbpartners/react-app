import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
  var [user, setUser] = useState([]);
  const fetchUser = async () => {
    try {
      // id number name email
      const response = await fetch("http://localhost:3001/details/readall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const parseRes = await response.json();
      console.log("Api called");
      setUser(parseRes);
      return parseRes;
    } catch (err) {
      alert(err);
      console.error(err.message);
    }
  };
  return (
    <userContext.Provider value={{ user, fetchUser, setUser }}>
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
