import React from 'react';
import RedditLogo from './RedditLogo.png';

const header = () => {
    return (
        <header>
            <img src={RedditLogo} alt="Reddit Logo - Smiley alien face"/>
            <div className="titles">
            <h1>Reddit Art</h1>
            <h2>For checking out the latest art news on the internet</h2>
            </div>
            </header>
    )
}
export default header