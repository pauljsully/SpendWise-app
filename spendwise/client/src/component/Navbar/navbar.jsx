import React from 'react';
import { useNavigate } from 'react-router-dom';
import './navbar.css';
import avatar from '../../assets/img/man1.png'
import { signout } from '../../utils/icons'
import { menu } from '../../utils/menu'

function Navbar({active}) {

    const navigate = useNavigate();

    const handleMenuItemClick = (link) => {
        // Use the navigate function
        navigate(link);
    };
    
    return (
        <nav className='navbar'> 
            <div className="user-con">
                <img src={avatar} alt="" />
                <div className="text">
                    <h2>Hi, Paul</h2>
                    <p>Your Money</p>
                </div>
            </div>
            <ul className="menu-items">
                {menu.map((item) => {
                    return <li
                    key={item.id}
                    onClick={() => handleMenuItemClick(item.link)}
                    className={active === item.id ? 'active' : ''}
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