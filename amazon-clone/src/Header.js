import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";

function Header() {
    return (
        <div className='header'>
            <img className="header__logo" alt="logo"src="https://cdn.freebiesupply.com/logos/large/2x/amazon-dark-logo-black-and-white.png"/>

        <div className="header__search">
            <input className="header__searchInput" type="text" />
            <input 
            <SearchIcon className="header__searchInput" type="text"/>
            {/* Logo */}
        </div>
        <div className="header__nav">
            <div className='header__option'>
                <span className="header__optionLineOn">Hello Guest</span> 
                    <span className="header__optionLineOn">Hello Sign In</span>
            </div>

            <div className='header__option'>
            <span className="header__optionLineOn">Returns</span> 
                <span className="header__optionLineOn">& Orders</span>
            </div>
            
            <div className='header__option'>
            <span className="header__optionLineOn">Your</span> 
                <span className="header__optionLineOn">Prime</span>
            </div>
        </div>
        </div>
    )
}

export default Header
