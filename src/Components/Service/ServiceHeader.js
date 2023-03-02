import React, { useState, useContext } from "react";
import logo from "../../images/logo.png";
import userContext from "../../Context/userContext";
import imguser from "../../../src/images/img-user.png";
import downarrow from "../../../src/images/icon-arrow.png";

function ServiceHeader(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const context = useContext(userContext);
  const { user, logoutUser } = context;

  const handleLogout = (e) => {
    logoutUser();
  };

  function handleClick(e) {
    props.setTogglePage(e.target.id);
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
                    id="leaddetails"
                    onClick={handleClick}
                  >
                    Lead Details
                  </a>
                </li>
              </ul>
            </div>

            <form className="d-flex">
              <ul className="navbar-nav nav-user">
                <li className="nav-item dropdown user">
                  <a
                    className="nav-link dropdown-toggle circle-icon"
                    href="#"
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
                        href="/"
                        onClick={handleLogout}
                      >
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </form>

            {/* <ul>
              <li>
                <button type="button" className="btn btn-outline-primary register" onClick={handleClick} >
                  {isShown ? "REGISTER" : "LOGIN"}
                </button>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    </>
    // <AppBar
    //   style={{
    //     background:
    //       "transparent linear-gradient(300deg, #5e9ffa2d 0%, #ffffff 100%) 0%",
    //   }}
    //   position="static"
    // >
    //   <Container
    //     maxWidth="lg"
    //     style={{
    //       padding: "2ch",
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
    //     <Box
    //       style={{
    //         width: "29ch",
    //         display: "flex",
    //         alignItems: "center",
    //         justifyContent: "space-between",
    //       }}
    //     >
    //       <button
    //         className="btn btn-primary m-2"
    //         id="leadrequest"
    //         onClick={handleClick}
    //       >
    //         Lead Request
    //       </button>
    //       <button
    //         className="btn btn-primary"
    //         id="leaddetails"
    //         onClick={handleClick}
    //       >
    //         Lead Details
    //       </button>
    //     </Box>
    //     <Box sx={{ flexGrow: 0 }}>
    //       <Tooltip title="Open settings">
    //         <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    //           <AccountCircleIcon style={{ fontSize: "3ch" }} />
    //         </IconButton>
    //       </Tooltip>
    //       <Menu
    //         sx={{ mt: "45px" }}
    //         id="menu-appbar"
    //         anchorEl={anchorElUser}
    //         anchorOrigin={{
    //           vertical: "top",
    //           horizontal: "right",
    //         }}
    //         keepMounted
    //         transformOrigin={{
    //           vertical: "top",
    //           horizontal: "right",
    //         }}
    //         open={Boolean(anchorElUser)}
    //         onClick={handleCloseUserMenu}
    //       >
    //         {settings.map((setting) => (
    //           <MenuItem key={setting} onClick={handleCloseUserMenu}>
    //             <Typography textAlign="center">{setting}</Typography>
    //           </MenuItem>
    //         ))}
    //       </Menu>
    //     </Box>
    //   </Container>
    // </AppBar>
  );
}
export default ServiceHeader;
//   function handleClick(e) {
//     // Changing toggle menu state
//     props.setTogglePage(e.target.id);
//   }
//   return (
//     <>
//       <div className="container-fluid">
//         <div className="header">
//           <div className="header-left">
//             <a className="navbar-brand" href="/noacess">
//               <img src={logo} width="205" alt="" />
//             </a>
//           </div>
//           <div className="header-middle">
//             <button className="btn btn-primary m-2" id="leadrequest" onClick={handleClick}>Lead Request</button>
//             <button className="btn btn-primary" id="leaddetails" onClick={handleClick}>Lead Details</button>
//           </div>
//           <div className="header-right">
//             <div className="hide">
//               <button
//                 type="button"
//                 className="btn btn-outline-primary register"
//               >
//                 REGISTER
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-outline-primary login hide"
//               >
//                 LOGIN
//               </button>
//             </div>
//             <div className="user-profile">
//               <div className="dropdown">
//                 <img className="user-img" src={users} alt="" />
//                 <a
//                   className="dropdown-toggle"
//                   href="/noacess"
//                   role="button"
//                   id="dropdownMenuLink"
//                   data-bs-toggle="dropdown"
//                   aria-expanded="false"
//                 >
//                   Alina Mclaurd
//                 </a>

//                 <ul
//                   className="dropdown-menu"
//                   aria-labelledby="dropdownMenuLink"
//                 >
//                   <li>
//                     <a className="dropdown-item" href="/noacess">
//                       Product
//                     </a>
//                   </li>
//                   <li>
//                     <a className="dropdown-item" href="/noacess">
//                       Services
//                     </a>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Header;
