import React from 'react';
import RedditLogo from './RedditLogo.png';

const header = () => {
    return (
        <header>
            <img src={RedditLogo} alt="Reddit Logo - Smiley alien face"/>
            <h1>Reddit Lite</h1>
            <h2>For the top issues on the internet</h2>
            </header>
    )
}
export default header