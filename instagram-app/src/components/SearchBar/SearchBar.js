import React from 'react';
import './SearchBar.css'

import logo from './logo.png'

const SearchBar = () => {
    return (
        <div className="search-bar">
            <img className="logo" src={logo} alt="logo" />

            <input
                className="search-input"
                placeholder="Search"
            />

            <div className="buttons">
                <i id="compass-icon" class="far fa-compass"></i>
                <i id="heart-icon" class="far fa-heart"></i>
                <i id="user-icon" class="far fa-user"></i>
            </div>
        </div>
    )
}

export default SearchBar;