import React, { useState } from "react";
import logo from "../../../src/images/logo.png";
import users from "../../../src/images/users.jpg";

const Header = (props) => {
  function handleClick(e) {
    // Changing toggle menu state
    props.setTogglePage(e.target.id);
  }
  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div className="header-left">
            <a className="navbar-brand" href="#">
              <img src={logo} width="205" alt="" />
            </a>
          </div>
          <div className="header-middle">
            <button className="btn btn-primary m-2" id="leadrequest" onClick={handleClick}>Lead Request</button>
            <button className="btn btn-primary" id="leaddetails" onClick={handleClick}>Lead Details</button>
          </div>
          <div className="header-right">
            <div className="hide">
              <button
                type="button"
                className="btn btn-outline-primary register"
              >
                REGISTER
              </button>
              <button
                type="button"
                className="btn btn-outline-primary login hide"
              >
                LOGIN
              </button>
            </div>
            <div className="user-profile">
              <div className="dropdown">
                <img className="user-img" src={users} alt="" />
                <a
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Alina Mclaurd
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Product
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
