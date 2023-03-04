import React, { useContext } from "react";
import logo from "../../images/logo.png";
import userContext from "../../Context/userContext";
import imguser from "../../../src/images/img-user.png";
import downarrow from "../../../src/images/icon-arrow.png";

function ServiceHeader(props) {
  const context = useContext(userContext);
  const { logoutUser } = context;

  const handleLogout = (e) => {
    logoutUser();
  };

  function handleClick(e) {
    props.setTogglePage(e.target.id);
    console.log(props.togglePage)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/service">
              <img src={logo} width="205" alt="" />
            </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              {JSON.parse(localStorage.getItem("UserDetails")).FINCode !==
              process.env.REACT_APP_ADMIN_USERNAME ? (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        props.togglePage === "leadrequest" ? "active" : ""
                      }`}
                      aria-current="page"
                      href="#"
                      id="leadrequest"
                      onClick={handleClick}
                    >
                      Create Lead
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        props.togglePage === "leaddetails" ? "active" : ""
                      }`}
                      href="#"
                      id="leaddetails"
                      onClick={handleClick}
                    >
                      Lead Details
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        props.togglePage === "dashboard" ? "active" : ""
                      }`}
                      href="#"
                      id="dashboard"
                      onClick={handleClick}
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      id="leaddetails"
                      onClick={handleClick}
                    >
                      Lead Details
                    </a>
                  </li>

                  <li className="nav-item">
                    <a
                      className={`nav-link ${
                        props.togglePage === "Dashboard" ? "active" : ""
                      }`}
                      href="#"
                      id="dashboard"
                      onClick={handleClick}
                    >
                      Dashboard
                    </a>
                  </li>
                </ul>
                
              )}
            </div>
            <form className="d-flex">
              <ul className="navbar-nav nav-user">
                <li className="nav-item dropdown user">
                  <a
                    className="nav-link dropdown-toggle circle-icon"
                    href="/*"
                    id="dropdown10"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <div className="userimg">
                      <img src={imguser} alt="" className="user-image" />
                    </div>
                    <span className="name">
                      {JSON.parse(localStorage.getItem("UserDetails")).Name}
                    </span>
                    <img src={downarrow} alt="" className="downarrow" />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown10">
                    <li className="header">
                      <div className="user">
                        <img src={imguser} alt="" />
                        <h6>
                          {JSON.parse(localStorage.getItem("UserDetails")).Name}
                          <small className="lastlogin">
                            <strong>Last Login -</strong> 2023-02-27 11:02:04
                          </small>
                        </h6>
                      </div>
                    </li>
                    <li>
                      <a
                        className="dropdown-item logout"
                        href="#"
                        onClick={handleLogout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
export default ServiceHeader;
