import React from 'react';
import RedditLogo from './RedditLogo.png';
import Search from './Search';

const header = () => {
    return (
        <header>
            <img src={RedditLogo} alt="Reddit Logo - Smiley alien face"/>
            <div className="titles">
            <h1>Reddit Art</h1>
            <h3>A Feast For The Eyes</h3>
            <Search/>
            </div>
            </header>
    )
}
export default header