import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {updateSearch} from './../features/searches/searchSlice';
import {selectSearches} from './../features/searches/searchSlice';


const SubSidebar = () => {

    const searchTerm = useSelector(selectSearches);
    const dispatch = useDispatch();

    const onSubRedditClick = useCallback((event) => {
        const subRedditParams = "top/.json?count=25";
        console.log(`${event.currentTarget.value}${subRedditParams}`)
        event.preventDefault();
        localStorage.setItem('history', searchTerm);
        dispatch(updateSearch(`${event.currentTarget.value}${subRedditParams}`))
      },[dispatch, searchTerm]);

    return (
        <aside className="asideSub" >
        <p>SubReddits</p>
        <form onSubmit={onSubRedditClick}>
        <button className="buttonSub" id="/r/DesignPorn/" value="/r/DesignPorn/" onClick={onSubRedditClick}>/r/DesignPorn</button>
        <button className="buttonSub" id="/r/ITookAPicture/" value="/r/ITookAPicture/" onClick={onSubRedditClick}>/r/ITookAPicture</button>
        <button className="buttonSub" id="/Art/" value="r/Art/" onClick={onSubRedditClick}>/r/Art</button>
        <button className="buttonSub" id="/r/EarthPorn/" value="/r/EarthPorn/" onClick={onSubRedditClick}>/r/EarthPorn</button>
        <button className="buttonSub" id="/r/SpacePorn/" value="r/SpacePorn/" onClick={onSubRedditClick}>/r/SpacePorn</button>
        <button className="buttonSub" id="/r/WildLifePhotography/" value="/r/wildlifephotography/" onClick={onSubRedditClick}>/r/WildlifePhotography</button>
        </form>
        </aside>
    )
}
export default SubSidebar;