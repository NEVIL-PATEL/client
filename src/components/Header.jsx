import React from 'react'
import {Outlet} from 'react-router-dom'
function Header() {
    return ( 
        <>
        <div id="header">
            <nav className="main-nav">
                <div className="logo">
                    <h2>
                        <span>nevil</span>
                    </h2>
                </div>
                <div className="menu-link">
                    <ul>
                        <li><a href="">home</a></li>
                        <li><a href="">about</a></li>
                        <li><a href="">contact</a></li>
                        <li><a href="">feed</a></li>
                        <li><a href="">post</a></li>
                    </ul>
                </div>
                <div className="social-media">
                        <ul className="social-media-desktop">
                            <li><a href="">1</a></li>
                            <li><a href="">2</a></li>
                            <li><a href="">3</a></li>
                        </ul>
                </div>
            </nav>
            
        </div>
        <Outlet/>
        </> 
     );
}

export default Header;