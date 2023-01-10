import React, { useState } from 'react'
import RemoveIcon from '@mui/icons-material/Remove';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import LinkIcon from '@mui/icons-material/Link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import DeleteIcon from '@mui/icons-material/Delete';
import PhotoIcon from '@mui/icons-material/Photo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PhonelinkLockIcon from '@mui/icons-material/PhonelinkLock';
import "./css/compose.css"
import { useDispatch, useSelector } from 'react-redux';
import { closCompose } from './features/mailslice';
import { db } from './Firebase';
import firebase from 'firebase/compat/app';
import { selectUser } from './features/userslice';

const Compose = () => {
    const dispatch = useDispatch()
    const [recv, setrecv] = useState("")
    const [sub, setsub] = useState("")
    const [msg, setmsg] = useState("")
    const user = useSelector(selectUser)
    const formSubmit = (e) => {
        e.preventDefault()
        console.log(recv, sub, msg)
        db.collection("emails").add({
            reciepent: recv,
            subject: sub,
            body: msg,
            time: firebase.firestore.FieldValue.serverTimestamp(),
            sender: user.email
        })

        setrecv("")
        setsub("")
        setmsg("")
        alert("success")
        dispatch(closCompose())
    }

    return (
        <div className='compose'>
            <div className='compose__header'>
                <div className='compose__header__left'>
                    <span>New Message</span>
                </div>
                <div className='compose__header__right'>
                    <RemoveIcon />
                    <HeightIcon />
                    <CloseIcon onClick={() => dispatch(closCompose())} />
                </div>
            </div>
            <form onSubmit={formSubmit}>
                <div className='compose__body'>
                    <div className="compose__bodyForm">
                        <input required='required' type="email" placeholder='Reciepents' value={recv} onChange={((e) => setrecv(e.target.value))} />
                        <input required='required' type="text" placeholder='Subject' value={sub} onChange={((e) => setsub(e.target.value))} />
                        <textarea required='required' cols="60" rows="20" value={msg} onChange={((e) => setmsg(e.target.value))}></textarea>
                    </div>
                </div>
                <div className='compose__footer'>
                    <div className='compose__footerLeft'>
                        <button type="submit">Send<ArrowDropDownIcon /></button>
                    </div>
                    <div className='compose__footerRight'>
                        <FormatColorTextIcon />
                        <AttachFileIcon />
                        <PhotoIcon />
                        <LinkIcon />
                        <InsertEmoticonIcon />
                        <NoteAddIcon />
                        <PhonelinkLockIcon />
                        <MoreVertIcon />
                        <DeleteIcon />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Compose