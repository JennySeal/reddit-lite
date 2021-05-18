import React from 'react';
import RedditLogo from './RedditLogo.png';
import Search from './Search';

const header = () => {
    return (
        <header>
        <div className="logoSearch">
            <img src={RedditLogo} alt="Reddit Logo - Smiley alien face"/>
            <Search/>
            </div>
            <div className="titles">
            <h1>Reddit Sublime</h1>
            <h2>A Feast For The Eyes</h2>
            </div>
            </header>
    )
}
export default header