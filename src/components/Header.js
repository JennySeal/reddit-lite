import React from 'react';
import RedditLogo from './RedditLogo.png';
import Search from './Search';

const header = ({onHandleSearch}) => {
    return (
        <header>
            <img src={RedditLogo} alt="Reddit Logo - Smiley alien face"/>
            <div className="titles">
            <h1>Reddit Art</h1>
            <h3>For checking out the latest art news on the internet</h3>
            <Search onSearchSubmit={onHandleSearch}/>
            </div>
            </header>
    )
}
export default header