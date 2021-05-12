import React from 'react';

const Search = ({searchTerm, updateSearchTerm, onSearchSubmit}) => {
    return (
            <form className="search" onSubmit={onSearchSubmit}>
            <input type="text" name="search" onChange={updateSearchTerm}/>
            <button className="right-aligned" type="submit" >Submit</button>
            </form>
    )
}

export default Search
