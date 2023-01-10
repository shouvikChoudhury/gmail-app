import React, { useEffect, useState } from 'react'
import EmailListSettings from './EmailListSettings'
import "./css/emaillist.css"
import Emailtype from './Emailtype'
import Emailbody from './Emailbody'
import { db } from './Firebase'
import { selectUser } from './features/userslice'
import { useSelector } from 'react-redux'

const Mailbox = () => {
    const [email, setemail] = useState([])
    useEffect(() => {
        db.collection("emails").orderBy('time', 'desc').onSnapshot(snap => {
            setemail(snap.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    const user = useSelector(selectUser)

    const inboxmail = email.filter(({ id, data }) =>
        user.email === data.reciepent
    )

    return (
        <div className='emaillist'>
            <EmailListSettings />
            <Emailtype />
            {inboxmail.map(({ id, data }) => {
                return <Emailbody key={id} fromemail={data.sender} name={data.reciepent} subject={data.subject}
                    message={data.body}
                    time={new Date(data.time?.seconds * 1000).toLocaleTimeString()} />
            })}
        </div>
    )
}

export default Mailbox