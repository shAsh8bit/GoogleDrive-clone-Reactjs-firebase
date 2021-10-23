import React from "react";
import SideList from "./SideList";
import New from "./New";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import ComputerIcon from '@mui/icons-material/Computer';
import FolderSharedIcon from '@mui/icons-material/FolderShared';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

function index({userId}) {
  return (
    <div>
     <New userId={userId}/>

      <SideList arrow icon={(<InsertDriveFileIcon/>)} label="My Drive"/>
      <SideList arrow icon={(<ComputerIcon/>)} label="Computers"/>
      <SideList icon={(<FolderSharedIcon/>)} label="Shared with me"/>
      <SideList icon={(<AccessTimeIcon/>)} label="Recent"/>
      <SideList icon={(<StarBorderIcon/>)} label="Starred"/>
      <SideList icon={(<DeleteOutlineIcon/>)} label="Trash"/>
      <hr/>
      <SideList icon={(<CloudQueueIcon/>)} label="My Storage"/>
    </div>
  );
}

export default index;
