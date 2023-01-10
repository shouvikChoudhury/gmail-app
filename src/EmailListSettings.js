import React from 'react'
import { IconButton } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./css/emaillist.css"

const EmailListSettings = () => {
    return (
        <div className='emailist__settings'>
            <div className='emailist__settingsLeft'>
                <IconButton>
                    <CheckBoxOutlineBlankIcon></CheckBoxOutlineBlankIcon>
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
            <div className='emailist__settingsRight'>
                <p>1-25 of 1,106</p>
                <IconButton>
                    <ChevronLeftIcon></ChevronLeftIcon>
                </IconButton>
                <IconButton>
                    <ChevronRightIcon></ChevronRightIcon>
                </IconButton>
            </div>
        </div>
    )
}

export default EmailListSettings