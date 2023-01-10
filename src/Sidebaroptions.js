import React from 'react'
import "./css/sidebaroptions.css"

const Sidebaroptions = ({ Icon, title, number, isactive }) => {
    return (
        <div className={`sidebarOptions ${isactive && 'sidebarOptions--active'}`}>
            {Icon}
            <h4>{title}</h4>
            <p>{number}</p>
        </div>
    )
}

export default Sidebaroptions