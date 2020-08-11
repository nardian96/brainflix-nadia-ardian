import React from 'react';
import SearchBar from './SearchBar';
import Button from './Button'
import UserPicture from './UserPicture';
// import '../styles/app.css';

const Header = (props) => {
    const buttonValue = `UPLOAD`
    return (
        <header className="header__container">
            <div className="header__logo-container">
                <img className="header__logo" src={props.logo} alt="Brainflix Logo" />
            </div>

            < SearchBar />
            <div className="subheader__container">
                < Button value={buttonValue}/>
                < UserPicture />
            </div>
        </header>
    )
}

export default Header;