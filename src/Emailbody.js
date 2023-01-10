import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import "./css/emaillist.css"
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { openMessage } from './features/mailslice';

const Emailbody = ({ name, subject, message, time, fromemail }) => {
    const history = useNavigate()
    const dispatch = useDispatch()

    const openHandler = (e) => {
        dispatch(openMessage({ name, subject, message, time, fromemail }))
        history('/mail')
    }
    return (
        <div className='emailbody' onClick={openHandler}>
            <div className='emailbody__left'>
                <CheckBoxOutlineBlankIcon />
                <StarBorderIcon />
                <LabelOutlinedIcon />
                <h4>{name}</h4>
            </div>
            <div className='emailbody__middle'>
                <div className="emailbody__middle__msg">
                    <p><b>{subject}&nbsp;-</b>&nbsp;{message}</p>
                </div>
            </div>
            <div className='emailbody__right'>
                <p>{time}</p>
            </div>
        </div>
    )
}

export default Emailbody