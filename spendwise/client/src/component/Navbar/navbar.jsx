// import React, { useState } from 'react'
import './navbar.css';
import avatar from '../../assets/img/man1.png'
import { signout } from '../../utils/icons'
import { menu } from '../../utils/menu'

function Navbar({active, setActive}) {
    
    return (
        <nav className='navbar'> 
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Hi, Paul Sullivan</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menu.map((item) => {
                    return <li
                        key={item.id}
                        onClick={() => setActive(item.id)}
                        className={active === item.id ? 'active': ''}
                    >
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="menu-items">
                <li>
                    {signout} Sign Out
                </li>
            </div>
        </nav>
    )
};

export default Navbar