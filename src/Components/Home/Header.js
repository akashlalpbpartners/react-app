import React, { useState } from "react";
import logo from "../../../src/images/logo.png";

const Header = (props) => {
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => {
    setIsShown((current) => !current);

    props.setToggleForm(!isShown)
  };

  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div className="header-left">
            <img src={logo} width="205" alt="" />
          </div>
          <div className="header-right">
            <button
              type="button"
              className="btn btn-outline-primary register"
              onClick={handleClick}
            >
              {isShown ? "REGISTER" : "LOGIN"}
            </button>
            {/* <button
              type="button"
              className="btn btn-outline-primary login hide"
            >
              LOGIN
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
