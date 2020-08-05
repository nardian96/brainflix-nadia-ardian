import React from 'react';
import logo from '../assets/logo/Logo-brainflix.png'

const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Brainflix Logo" />
        </header>
    )
}

export default Header;