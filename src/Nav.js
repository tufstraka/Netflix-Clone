import React, {useState, useEffect} from 'react'
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if (window.scrollY > 70) {
                handleShow(true);
            } else handleShow(false);
        });
        return() => {
            window.removeEventListener("scroll");
        };
    },[]);

    return (
        <div className ={`Nav ${show && "Nav__black"}`}>
            <img
            className ="Nav__logo"
            src ="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png"
            alt = "Netfflix Logo"
             />
             <img 
             className ="Nav__avatar"
             src = "https://pbs.twimg.com/media/DmtcXxYUcAYshhQ.jpg"
             alt = "Netflix Av"
             />
            
        </div>
    )
}

export default Nav
