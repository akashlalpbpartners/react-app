import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import userContext from "./userContext";
import axios from "axios";
const UserState = (props) => {
  const [user, setUser] = useState([]);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const [empType, setEmpType] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (Cookies.get("userCookie")) {
      setUser(Cookies.get("userCookie"));
      fetchState();
      fetchCity();
      loadEmpType();
      navigate("/service");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const loginUser = async () => {
    const response = await fetch("http://localhost:3001/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        FINCode: JSON.parse(localStorage.getItem("UserDetails")).FINCode,
        MobileNumber: JSON.parse(localStorage.getItem("UserDetails"))
          .MobileNumber,
      }),
    });
    console.log("Login user API called!");
    const parseRes = await response.json();
    Cookies.remove("userCookie");
    Cookies.set("userCookie", JSON.stringify(parseRes));
    setUser(JSON.stringify(parseRes));
    fetchCity();
    return parseRes;
  };

  const fetchUser = async (FINCode) => {
    try {
      if (FINCode !== process.env.REACT_APP_ADMIN_USERNAME) {
        // const response = await axios.post("http://localhost:3001/api/fincode", {
        //   FinanceCode: FINCode,
        // });
        // const res = response.data.data;
        // console.log(response);
        // if (res.length !== 0) {
        const result = [
          {
            FINCode: "FIN100120382",
            Name: "Sachin",
            MobileNumber: 9999999999,
            // FINCode: FINCode,
            // Name: res.Name,
            // MobileNumber: res.MobileNo,
          },
        ];
        localStorage.setItem("UserDetails", JSON.stringify(result[0]));
        return result;
        // } else {
        //   return [];
        // }
      } else {
        const result = [
          {
            FINCode: process.env.REACT_APP_ADMIN_USERNAME,
            Name: process.env.REACT_APP_ADMIN_NAME,
            MobileNumber: process.env.REACT_APP_ADMIN_MOBILE_NUMBER,
          },
        ];
        localStorage.setItem("UserDetails", JSON.stringify(result[0]));
        return result;
      }
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

  const loadEmpType = async () => {
    const response = await fetch("http://localhost:3001/employmenttype/", {
      method: "GET",
    });
    const parseRes = await response.json();
    console.log("EmpType loading API called!");
    setEmpType(parseRes);
    return parseRes;
  };

  const logoutUser = async () => {
    try {
      // id number name email
      await fetch(
        `http://localhost:3001/api/logout/${
          JSON.parse(Cookies.get("userCookie")).Id
        }`,
        {
          method: "PUT",
        }
      );
      // console.log(JSON.parse(Cookies.get("userCookie")).Id);
      console.log("Logout Api called");
      setUser([]);
      localStorage.clear();
      Cookies.remove("userCookie");
    } catch (err) {
      alert(err);
      console.error(err.message);
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        state,
        city,
        empType,
        setUser,
        loginUser,
        fetchUser,
        fetchState,
        fetchCity,
        loadEmpType,
        logoutUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
