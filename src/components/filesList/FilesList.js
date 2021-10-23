import React, { useState, useEffect } from "react";
import "../../styles/FilesList.css";
import FileCard from "./FileCard";
import FileItem from "./FileItem";
import { db } from "../../firebase";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";

function FilesList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    db.collection("myFiles").onSnapshot((snapshot) => {
      setFiles(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          item: doc.data(),
        }))
      );
    });
  }, []);

  console.log(files.length);
 
  return (
    <div className="filemanage">
      <div className="filetop">
        <p>My Drive</p>
        <ArrowDropDownOutlinedIcon />
        <InfoOutlinedIcon />
      </div>
      <div className="filesrow">
        {files.slice(0,4).map(({ item}) => (
        
          <FileCard
            caption={item.caption}
            timestamp={item.timestamp}
            fileUrl={item.fileUrl}
           
          />
        ))}
        
      </div>
      <div className="fileslist">
        <div className="filelist--left">
          <p>Name</p>
        </div>
        <div className="filelist--right">
          <p>Last Modified</p>
          <p>File size</p>
        </div>
      </div>
      {files.map(({ id, item }) => (
        <FileItem
          id={id}
          caption={item.caption}
          timestamp={item.timestamp}
          fileUrl={item.fileUrl}
          size={item.size}
        />
      ))}
    </div>
  );
}

export default FilesList;
