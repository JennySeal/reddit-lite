import React, {useCallback} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {selectSearches, updateSearch} from './../features/searches/searchSlice';

const Sidebar = () => {

    const searchTerm = useSelector(selectSearches);
    const dispatch = useDispatch();

    const onArtistClick = useCallback((event) => {
        const artistSearchParams = "search.json?limit=30&q=";
        event.preventDefault();
        localStorage.setItem('history', searchTerm)
        dispatch(updateSearch(`${artistSearchParams}${event.currentTarget.value}`))
      },[dispatch, searchTerm]);
      
      
    return (
        <aside className="asideSub">
        <p>Artists</p>
        <form onSubmit={onArtistClick}>
            <button className="buttonSub" id="Gabriel Dawe" value="Gabriel Dawe" onClick={onArtistClick}> Gabriel Dawe</button>
            <button className="buttonSub" id="Yayoi Kusama" value="Yayoi Kusama" onClick={onArtistClick}>Yayoi Kusama</button>
            <button className="buttonSub" id="Peter Doig" value="Peter Doig" onClick={onArtistClick}>Peter Doig</button>
            <button className="buttonSub" id="Olafur Eliasson" value="Olafur Eliasson" onClick={onArtistClick}>Olafur Eliasson</button>
            <button className="buttonSub" id="Banksy" value="Banksy" onClick={onArtistClick}>Banksy</button>
            <button className="buttonSub" id="Jeff Koons" value="Jeff Koons" onClick={onArtistClick}>Jeff Koons</button>
            </form>
            </aside>
    )
}
export default Sidebar;