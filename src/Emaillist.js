import React, { useEffect, useState } from 'react'
import EmailListSettings from './EmailListSettings'
import "./css/emaillist.css"
import Emailtype from './Emailtype'
import Emailbody from './Emailbody'
import { db } from './Firebase'

const Emaillist = () => {
    const [email, setemail] = useState([])
    useEffect(() => {
        db.collection("emails").orderBy('time', 'desc').onSnapshot(snap => {
            setemail(snap.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    console.log(email)
    return (
        <div className='emaillist'>
            <EmailListSettings />
            <Emailtype />
            {email.map(({ id, data }) => {
                return <Emailbody key={id} fromemail={data.sender} name={data.reciepent} subject={data.subject}
                    message={data.body}
                    time={new Date(data.time?.seconds * 1000).toLocaleTimeString()} />
            })}
        </div>
    )
}

export default Emaillist