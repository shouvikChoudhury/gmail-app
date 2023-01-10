import React from 'react'
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import "./css/sidebar.css"
import Sidebaroptions from './Sidebaroptions';
import InboxIcon from '@mui/icons-material/Inbox';
import StarRateIcon from '@mui/icons-material/StarRate';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SendIcon from '@mui/icons-material/Send';
import DraftsIcon from '@mui/icons-material/Drafts';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DeleteIcon from '@mui/icons-material/Delete';
import VideocamIcon from '@mui/icons-material/Videocam';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import { useDispatch } from 'react-redux';
import { openCompose } from './features/mailslice'
import { useNavigate } from 'react-router-dom'
import "./css/sidebaroptions.css"

const Sidebar = () => {
    const dispatch = useDispatch()
    const history = useNavigate()

    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon />} className="compose__btn"
                onClick={() => dispatch(openCompose())}>Compose</Button>
            <div className="sidebarOptions" onClick={() => history('/inbox')}>
                <InboxIcon />
                <h4>Inbox</h4>
                <p>106</p>
            </div>
            <Sidebaroptions Icon={<StarRateIcon />} title={"Starred"} number={106} />
            <Sidebaroptions Icon={<WatchLaterIcon />} title={"Snoozed"} number={106} />
            <Sidebaroptions Icon={<SendIcon />} title={"Sent"} number={106} isactive={true} />
            <Sidebaroptions Icon={<DraftsIcon />} title={"Drafts"} number={106} />
            <Sidebaroptions Icon={<DeleteIcon />} title={"Trash"} number={106} />
            <Sidebaroptions Icon={<ExpandMoreIcon />} title={"More"} number={106} />
            <h3 className='sidebarOptions__heading'>Meet</h3>
            <Sidebaroptions Icon={<VideocamIcon />} title={"New Meeting"} />
            <Sidebaroptions Icon={<KeyboardIcon />} title={"Join Meeting"} />
        </div>
    )
}

export default Sidebar