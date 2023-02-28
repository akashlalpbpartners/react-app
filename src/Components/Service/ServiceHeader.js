import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../images/logo.png";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import userContext from "../../Context/userContext";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Cookies from "js-cookie";

function ServiceHeader(props) {
  const [anchorElUser, setAnchorElUser] = useState(null);
  const settings = ["Basic Details", "Services", "Logout"];
  const navigate = useNavigate();
  const context = useContext(userContext);
  const { user, logoutUser } = context;

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (e) => {
    if (e.target.innerHTML === "Basic Details") {
      navigate("/info");
    } else if (e.target.innerHTML === "Services") {
      navigate("/service");
    } else if (e.target.innerHTML === "Logout") {
      logoutUser();
      navigate("/");
    }
    setAnchorElUser(null);
  };

  function handleClick(e) {
    props.setTogglePage(e.target.id);
  }

  return (
    <AppBar
      style={{
        background:
          "transparent linear-gradient(300deg, #5e9ffa2d 0%, #ffffff 100%) 0%",
      }}
      position="static"
    >
      <Container
        maxWidth="lg"
        style={{
          padding: "2ch",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <a href="/service">
            <img src={logo} width="205" alt="" />
          </a>
        </Box>
        <Box
          style={{
            width: "29ch",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <button
            className="btn btn-primary m-2"
            id="leadrequest"
            onClick={handleClick}
          >
            Lead Request
          </button>
          <button
            className="btn btn-primary"
            id="leaddetails"
            onClick={handleClick}
          >
            Lead Details
          </button>
        </Box>
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <AccountCircleIcon style={{ fontSize: "3ch" }} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClick={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography textAlign="center">{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </AppBar>
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
