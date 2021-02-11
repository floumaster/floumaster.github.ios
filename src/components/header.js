import React, { useContext } from 'react';
import Context from './context'
import DropMenu from './dropMenu'

function Header(){
    const {menu_flag, show_menu, hide_menu, curr_links, changeLinks} = useContext(Context);
    return(
        <header className="header">
            <nav className="navbar">
                <ul className="leftUl">
                    <li onMouseOver={()=>{changeLinks('Shop'); show_menu()}} onMouseLeave={()=>{hide_menu()}}>Shop</li>
                    <li onMouseOver={()=>{changeLinks('Corporate'); show_menu()}} onMouseLeave={()=>{hide_menu()}}>Corporate</li>
                    <li onMouseOver={()=>{changeLinks('Custom'); show_menu()}} onMouseLeave={()=>{hide_menu()}}>Custom</li>
                </ul>
                <a>
                    <img className="logo" src="teak-twine-logo-desktop.svg" alt="logo"/>
                </a>
                <ul className="rightUl">
                    <li onMouseOver={()=>{changeLinks('About'); show_menu()}} onMouseLeave={()=>{hide_menu()}}>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </nav>
            <DropMenu/>
        </header>
    );
}

export default Header;