import React from "react";
import "../../styles/Navbar.css";
import DriveLogo from "../../images/Google_Drive_logo.png";
import SearchIcon from "@mui/icons-material/Search";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
function index(props) {
  return (
      
    <div className="navbar">
      <div className="logo">
        <img className="Drivelogo" src={DriveLogo} alt="" />
        <span>Drive</span>
      </div>
      <div className="searchContainer">
        <div className="searchBar">
          <SearchIcon />
          <input type="text" placeholder="Search in Drive" />
          <MoreHorizIcon />
        </div>
      </div>
      <div className="rightIcons">
         <HelpOutlineIcon/> 
         <SettingsIcon/> 
      </div>

      <div className="userIcon">
      <AppsIcon/>
      <img src={props.userPhoto} />
      </div>
    </div>
  );
}

export default index;
