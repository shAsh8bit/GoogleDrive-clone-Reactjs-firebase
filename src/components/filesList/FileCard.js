import React from 'react'
import '../../styles/FileCard.css'

import DescriptionIcon from '@mui/icons-material/Description';

const FileCard = (props) => {
    return (
        <div className='fileCard'>
           <a href={props.fileUrl}> 
           <div className="fileCard--top">
                <DescriptionIcon style={{ fontSize: 130 }} />
            </div>

            <div className="fileCard--bottom">
                <p>{props.caption} </p>
            </div></a>
        </div>
    )
}

export default FileCard