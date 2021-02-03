import React from 'react';

import "./search-input.style.css"

export const SearchInput = ({placeholder, handleChange}) => (
    <input className="search" type= "search" placeholder= {placeholder} onChange = {handleChange}></input>
) 