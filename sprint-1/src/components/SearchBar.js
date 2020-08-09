import React from 'react'; 

const SearchBar = () => {
    return (
        <form className="header__search-container">
            <input className="header__search" type="search" name="searchbar" placeholder="Search"></input>
        </form>
    )
}

export default SearchBar;