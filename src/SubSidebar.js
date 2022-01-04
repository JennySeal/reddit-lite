import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {updateSearch} from './../features/searches/searchSlice';
import {selectSearches} from './../features/searches/searchSlice';


const SubSidebar = () => {

    const searchTerm = useSelector(selectSearches);
    const dispatch = useDispatch();

    const onSubRedditClick = useCallback((event) => {
        const subRedditParams = ".json?count=24";
        console.log(`${event.currentTarget.value}${subRedditParams}`)
        event.preventDefault();
        window.localStorage.setItem('history', searchTerm);
        dispatch(updateSearch(`${event.currentTarget.value}${subRedditParams}`))
      },[dispatch, searchTerm]);

    return (
        <aside className="asideSub" >
        <p>SubReddits</p>
        <form onSubmit={onSubRedditClick}>
        <button className='home' id="Homepage" value="r/MostBeautiful/" onClick={onSubRedditClick}>Home</button><br/>
        <button id="/r/WildLifePhotography/" value="/r/wildlifephotography/" onClick={onSubRedditClick}>/r/Wildlife Photography</button>
        <button id="/r/DesignPorn/" value="/r/DesignPorn/" onClick={onSubRedditClick}>/r/Design Sublime</button>
        <button id="/r/ITookAPicture/" value="/r/ITookAPicture/" onClick={onSubRedditClick}>/r/ITook APicture</button>
        <button id="/Art/" value="r/Art/" onClick={onSubRedditClick}>/r/Artist Sublime</button>
        <button id="/r/EarthPorn/" value="/r/EarthPorn/" onClick={onSubRedditClick}>/r/Earth Sublime</button>
        <button id="/r/SpacePorn/" value="r/SpacePorn/" onClick={onSubRedditClick}>/r/Space Sublime</button>
        </form>
        </aside>
    )
}
export default SubSidebar;