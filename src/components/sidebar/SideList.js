import React from "react";
import "../../styles/Sidebar.css";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
function SideList(props) {
  return (
    <div className="sidebar">
      <div className="arrow">{props.arrow && <ArrowRightIcon />}</div>
      <div className="SideListitems">
        {props.icon}
        <p>{props.label}</p>
      </div>
    </div>
  );
}

export default SideList;
