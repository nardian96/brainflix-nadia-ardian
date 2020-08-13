import React from 'react';
import SearchBar from './SearchBar';
import Button from './Button'
import UserPicture from './UserPicture';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const buttonValue = `UPLOAD`
    return (
        <header className="header__container">
            <Link to="/" className="header__logo-container">
                <img className="header__logo" src={props.logo} alt="Brainflix Logo" />
            </Link>

            < SearchBar />
            <div className="subheader__container">
                < Button value={buttonValue}/>
                < UserPicture />
            </div>
        </header>
    )
}

export default Header;