import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {updateSearch} from './../features/searches/searchSlice';
import {VscSearch} from 'react-icons/vsc';

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(''); 

    const handleSearchSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch(updateSearch(search));
    },[dispatch, search])

    return (
        <div>
        <form className="search" onSubmit={handleSearchSubmit}>
        <VscSearch className="searchIcon"/>
        <input type="text" autoComplete="off" autoFocus={true} id="search" onInput={((e)=>setSearch(`search.json?limit=25&q=${e.currentTarget.value}`))}/>
        </form>
        </div>
            )
}

export default Search
