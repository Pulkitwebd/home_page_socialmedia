import React from "react";
import "./navbar.css";
import lightning from "../Asset/lightning.jpg";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ElectricBoltOutlinedIcon from "@mui/icons-material/ElectricBoltOutlined";
import SearchIcon from "@mui/icons-material/Search";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import PersonIcon from '@mui/icons-material/Person';


const Navbar = () => {
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    backgroundColor: "#F5F5F5",
    borderRadius: "30px 30px 30px 30px",
    color: "grey",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: "30px 0 0 30px",
    color: "grey",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      color: "grey",
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "28ch",
        height: "3.5ch",
      },
    },
  }));
  return (
    <>
      <header className="Navbar">
        <div className="logo">
          <div className="firstImgBox">
            <img src={lightning} className="firstImg"></img>
          </div>
          <div className="secongImg">Sociala.</div>
        </div>

        <div className="searchBox">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </div>
        <div className="logoBox">
          <div className="leftSideLogo">
            <div className="logocss">
              <HomeOutlinedIcon className="logostylingactive" />
            </div>
            <div className="logocss">
              <ElectricBoltOutlinedIcon className="logostyling" />
            </div>
            <div className="logocss">
              <VideocamOutlinedIcon className="logostyling" />
            </div>
            <div className="logocss">
              <PersonOutlineOutlinedIcon className="logostyling" />
            </div>
            <div className="logocss">
              <ShoppingBagOutlinedIcon className="logostyling" />
            </div>
          </div>
          <div className="rightSideLogo">
            <div className="RSlogoStyle">
              <NotificationsNoneOutlinedIcon />
            </div>
            <div className="RSlogoStyle">
              <ChatBubbleOutlineOutlinedIcon />
            </div>
            <div className="RSlogoStyle">
              <DarkModeOutlinedIcon/>
            </div>
            <div className="RSlogoStyle">
              <PersonIcon/>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
