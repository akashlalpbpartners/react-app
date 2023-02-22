import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import logo from "../../../src/images/logo.png";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import userContext from "../../Context/userContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Cookies from "js-cookie";

function FormHeader(props) {
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
      logoutUser(JSON.parse(Cookies.get("userCookie")).id);
      navigate("/");
    }
    setAnchorElUser(null);
  };
  return (
    <AppBar
      style={{
        background:
          "transparent linear-gradient(300deg, #5e9ffa2d 0%, #ffffff 100%) 0%",
        marginBottom: "7ch",
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
export default FormHeader;
