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
                        <span className='icon'>{item.icon}</span>
                        <span className='title'>{item.title}</span>
                    </li>
                })}
            </ul>
            <div className="menu-items">
                <li>
                <span className='icon'>{signout}</span> 
                <span className='title'>Sign Out</span>
                </li>
            </div>
        </nav>
    )
};

export default Navbar