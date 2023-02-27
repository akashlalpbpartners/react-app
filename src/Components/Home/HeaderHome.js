import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../../src/images/logo.png";

function HeaderHome(props) {
  const [isShown, setIsShown] = useState(true);

  const handleClick = () => {
    setIsShown((current) => !current);

    props.setToggleForm(!isShown);
  };
  return (
    <>
      <nav className="navbar fixed-top bg-white">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand" href="/service">
              <img src={logo} width="205" alt="" />
            </a>
            <ul>
              <li>
                <button type="button" className="btn btn-outline-primary register" onClick={handleClick} >
                  {isShown ? "REGISTER" : "LOGIN"}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
    // <AppBar
    //   style={{
    //     background:
    //       "transparent linear-gradient(300deg, #5e9ffa2d 0%, #ffffff 100%) 0%",
    //     marginBottom: "7ch",
    //   }}
    //   position="static"
    // >
    //   <Container
    //     maxWidth="lg"
    //     style={{
    //       padding: "1rem",
    //       display: "flex",
    //       alignItems: "center",
    //       justifyContent: "space-between",
    //     }}
    //   >
    //     <Box>
    //       <a href="/service">
    //         <img src={logo} width="205" alt="" />
    //       </a>
    //     </Box>
    //     <Box>
    //       <button
    //         type="button"
    //         className="btn btn-outline-primary register"
    //         onClick={handleClick}
    //       >
    //         {isShown ? "REGISTER" : "LOGIN"}
    //       </button>
    //     </Box>
    //   </Container>
    // </AppBar>
  );
}
export default HeaderHome;
