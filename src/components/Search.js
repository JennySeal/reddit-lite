import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {updateSearch} from './../features/searches/searchSlice';
import { FcSearch } from 'react-icons/fc';

const Search = () => {
    const dispatch = useDispatch();
    const [search, setSearch] = useState(''); 


    const handleSearchSubmit = useCallback((e) => {
        e.preventDefault();
        dispatch(updateSearch(search));
        setSearch('');
    },[dispatch, search])

    return (
        <div>
        <form className="search" onSubmit={handleSearchSubmit}>
        <p><input type="text" autoFocus={true} id="search" onInput={((e)=>setSearch(`search.json?limit=25&q=${e.currentTarget.value}`))}/>   
        <FcSearch className="searchIcon"/></p>
            </form>
            </div>
            )
}

export default Search
