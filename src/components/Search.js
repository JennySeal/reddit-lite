import React from 'react';

const Search = ({onHandleSearch}) => {
    return (
        <form className="search" >
            <input type="text" id="search-input" placeholder="search art" onInput={onHandleSearch}/>     
            </form>
            )
}

export default Search
