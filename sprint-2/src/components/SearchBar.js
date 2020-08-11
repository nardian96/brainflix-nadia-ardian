import React from 'react'; 
import SearchIcon from '../assets/icons/SVG/Icon-search.svg';

const SearchBar = () => {
    return (
        <form className="header__search-container">
            <label htmlFor="header__search" className="header__search-icon">
                <img src={SearchIcon}/>
            </label>
            <input className="header__search" type="search" name="searchbar" placeholder="Search"></input>
        </form>
    )
}

export default SearchBar;