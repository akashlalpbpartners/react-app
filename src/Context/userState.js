import React, { useState } from "react";
import userContext from "./userContext";

const UserState = (props) => {
  const [user, setUser] = useState([]);
  const [userToken, setUserToken] = useState();
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);

  const loginUser = async (loginCustomer, otp) => {
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        CustomerID: loginCustomer[0].ID,
        MobileNumber: loginCustomer[0].MobileNumber,
        Otp: otp,
      }),
    });
    console.log("Login user API called!");
    const parseRes = await response.json();
    setUserToken(parseRes.Token);
    return parseRes;
  };

  const fetchUser = async (mobileNumber) => {
    try {
      const response = await fetch(
        `http://localhost:3001/details/getinfo/${mobileNumber}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      const parseRes = await response.json();
      console.log("Fetch user called!");
      setUser(parseRes);
      
      return parseRes;
    } catch (err) {
      alert(err);
      console.error(err.message);
    }
  };
  const fetchState = async () => {
    try {
      const response = await fetch("http://localhost:3001/geo/readstates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      const parseRes = await response.json();
      console.log("Fetch states called!");
      setState(parseRes);
    } catch (err) {
      alert(err);
      console.error(err.message);
    }
  };
  const fetchCity = async () => {
    try {
      const response = await fetch("http://localhost:3001/geo/readcity", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const parseRes = await response.json();
      console.log("Fetch cities called!");
      setCity(parseRes);
      return parseRes;
    } catch (err) {
      alert(err);
      console.error(err.message);
    }
  };
  // const fetchUser = async () => {
  //   try {
  //     // id number name email
  //     const response = await fetch("http://localhost:3001/details/readall", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     const parseRes = await response.json();
  //     console.log("Api called");
  //     setUser(parseRes);
  //     return parseRes;
  //   } catch (err) {
  //     alert(err);
  //     console.error(err.message);
  //   }
  // };
  // const fetchUser = async () => {
  //   try {
  //     // id number name email
  //     const response = await fetch("http://localhost:3001/details/readall", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //     });
  //     const parseRes = await response.json();
  //     console.log("Api called");
  //     setUser(parseRes);
  //     return parseRes;
  //   } catch (err) {
  //     alert(err);
  //     console.error(err.message);
  //   }
  // };
  return (
    <userContext.Provider
      value={{
        user,
        userToken,
        state,
        city,
        loginUser,
        fetchUser,
        setUser,
        fetchState,
        fetchCity,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
