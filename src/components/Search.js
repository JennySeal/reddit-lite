import React from 'react';

const Search = ({searchTerm, updateSearchTerm}) => {
    return (
        <div>
            <input type="text" value={searchTerm} placeholder="search" name="search" onInput={updateSearchTerm}/>
        </div>
    )
}

export default Search
