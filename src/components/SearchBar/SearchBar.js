import React from 'react'
import './SearchBar.css'

const SearchBar = (props) => {
    return (
        <input className="search" type={props.search} placeholder={props.placeholder} onChange={(e) => props.handleChange(e.target.value)}/>
    )
}

export default SearchBar
