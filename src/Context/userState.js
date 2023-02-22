import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import userContext from "./userContext";

const UserState = (props) => {
  const [user, setUser] = useState([]);
  const [bankInfo, setBankInfo] = useState([]);
  const [kycInfo, setKycInfo] = useState([]);
  const [userToken, setUserToken] = useState("");
  const [completeKYCalert, setCompleteKYCalert] = useState(false);
  const [state, setState] = useState([]);
  const [city, setCity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (getCookie("userCookie") !== null) {
      const object = JSON.parse(Cookies.get("userCookie"));
      setUserToken(object.Token);
      fetchState();
      fetchCity();
    } else {
      navigate("/");
    }
  }, []);

  // console.log(JSON.parse(localStorage.getItem("UserDetails")));
  // console.log(JSON.parse(localStorage.getItem("BankDetails")));
  // console.log(localStorage.getItem("KycDetails"));

  function getCookie(name) {
    var documentCookies = document.cookie;
    var prefix = name + "=";
    var begin = documentCookies.indexOf("; " + prefix);
    if (begin === -1) {
      begin = documentCookies.indexOf(prefix);
      if (begin !== 0) return null;
    } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end === -1) {
        end = documentCookies.length;
      }
    }
    return decodeURI(documentCookies.substring(begin + prefix.length, end));
  }

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
    Cookies.remove("userCookie");
    Cookies.set("userCookie", JSON.stringify(parseRes));
    setUserToken(parseRes.Token);
    await fetchBankInfo(parseRes.CustomerID);
    await fetchKycInfo(parseRes.CustomerID);
    return parseRes;
  };

  const fetchUser = async (mobileNumber) => {
    try {
      const response = await fetch(
        `http://localhost:3001/details/getbasicinfo/${mobileNumber}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }
      );
      const parseRes = await response.json();
      console.log("Fetch user called!");
      setUser(parseRes);
      localStorage.setItem("UserDetails", JSON.stringify(parseRes[0]));
      return parseRes;
      // if (checkFields(parseRes)) setCompleteKYCalert(true);
    } catch (err) {
      alert(err);
      console.error(err.message);
    }
  };
  const fetchBankInfo = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/details/getbankinfo/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(Cookies.get("userCookie")).Token
            }`,
            "Content-Type": "application/json",
          },
        }
      );
      const parseRes = await response.json();
      console.log("Fetch bank called!");
      setBankInfo(parseRes);
      localStorage.setItem("BankDetails", JSON.stringify(parseRes[0]));
      return parseRes;
    } catch (err) {
      alert(err);
      console.error(err.message);
    }
  };
  const fetchKycInfo = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:3001/details/getbasicinfo/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${
              JSON.parse(Cookies.get("userCookie")).Token
            }`,
            "Content-Type": "application/json",
          },
        }
      );
      const parseRes = await response.json();
      console.log("Fetch kyc called!");
      setKycInfo(parseRes);
      localStorage.setItem("KycDetails", JSON.stringify(parseRes));
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
  const logoutUser = async () => {
    try {
      // id number name email
      await fetch(
        `http://localhost:3001/api/logout/${
          JSON.parse(Cookies.get("userCookie")).id
        }`,
        {
          method: "PUT",
        }
      );
      console.log("Logout Api called");
      Cookies.remove("userCookie");
      localStorage.clear();
      setUserToken("");
      setUser([]);
    } catch (err) {
      alert(err);
      console.error(err.message);
    }
  };

  return (
    <userContext.Provider
      value={{
        user,
        bankInfo,
        kycInfo,
        userToken,
        state,
        city,
        completeKYCalert,
        loginUser,
        fetchUser,
        fetchBankInfo,
        fetchKycInfo,
        setUser,
        fetchState,
        fetchCity,
        logoutUser,
      }}
    >
      {props.children}
    </userContext.Provider>
  );
};

export default UserState;
