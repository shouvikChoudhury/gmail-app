import React, { useEffect } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./css/emaillist.css"
import { IconButton, Avatar } from '@mui/material';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import PrintIcon from '@mui/icons-material/Print';
import ReplyIcon from '@mui/icons-material/Reply';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { selectMail } from './features/mailslice';

const Emaildetail = () => {
    const history = useNavigate()
    const selectEmail = useSelector(selectMail)

    return (
        <div>
            <div className='emailist__settings'>
                <div className='emailist__settingsLeft'>
                    <IconButton>
                        <ArrowBackIcon onClick={e => history('/')}></ArrowBackIcon>
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon></ArrowDropDownIcon>
                    </IconButton>
                    <IconButton>
                        <RefreshIcon></RefreshIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
            </div>

            <div className="emaildetails__header">
                <div className="emaildetails__headerLeft">
                    <h4>{selectEmail?.subject}</h4>
                    <IconButton>
                        <LabelImportantIcon></LabelImportantIcon>
                    </IconButton>
                </div>
                <div className="emaildetails__headerRight">
                    <IconButton>
                        <PrintIcon></PrintIcon>
                    </IconButton>
                    <IconButton>
                        <ShareIcon></ShareIcon>
                    </IconButton>
                    <IconButton>
                        <MoreHorizIcon></MoreHorizIcon>
                    </IconButton>
                </div>
            </div>

            <div className="emaildetails__middleheader">
                <div className="emaildetails__middleheaderLeft">
                    <IconButton>
                        <Avatar></Avatar>
                    </IconButton>
                    <h4><i>From:</i> {selectEmail?.fromemail}</h4>
                    <h4><i>To:</i> {selectEmail?.name}</h4>
                </div>
                <div className="emaildetails__middleheaderRight">
                    <p>{selectEmail?.time}</p>
                    <IconButton>
                        <StarIcon></StarIcon>
                    </IconButton>
                    <IconButton>
                        <ReplyIcon></ReplyIcon>
                    </IconButton>

                </div>
            </div>

            <div className="emaildetails_body">
                <p>{selectEmail?.message}</p>
            </div>
        </div>
    )
}

export default Emaildetail