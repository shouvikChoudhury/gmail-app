import React from 'react'
import ReorderIcon from '@mui/icons-material/Reorder';
import { IconButton, Avatar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "./css/header.css"
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import SettingsIcon from '@mui/icons-material/Settings';
import AppsIcon from '@mui/icons-material/Apps';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userslice';
import { authen } from './Firebase'

const Header = () => {
    const user = useSelector(selectUser)
    console.log(user.photoURL)
    return (
        <div className="header">
            <div className="header__left">
                <IconButton>
                    <ReorderIcon></ReorderIcon>
                </IconButton>
                <img style={{ width: "30%" }} src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail2020.logo.png" alt="dfdsf" />
            </div>
            <div className="header__middle">
                <div className="search_mail">
                    <IconButton>
                        <SearchIcon></SearchIcon>
                    </IconButton>
                    <input placeholder='Search mail' type="text" />
                    <IconButton>
                        <ExpandMoreIcon></ExpandMoreIcon>
                    </IconButton>
                </div>
            </div>
            <div className="header__right">
                <IconButton>
                    <HelpOutlineIcon></HelpOutlineIcon>
                </IconButton>
                <IconButton>
                    <SettingsIcon></SettingsIcon>
                </IconButton>
                <IconButton>
                    <AppsIcon></AppsIcon>
                </IconButton>
                <IconButton>
                    <Avatar onClick={() => authen.signOut()} src={user.photoURL}>
                    </Avatar>
                </IconButton>
            </div>

        </div>
    )
}

export default Header