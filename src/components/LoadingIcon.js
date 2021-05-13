import React from 'react';
import RedditLogo from './RedditLogo.png'

const LoadingIcon = () => {
    return (
        <div id="loading">
        <p>Tick tick tick tick boom! Sorry you are waiting</p>
        <img className="loadingIcon" src={RedditLogo} alt="Cool Spinning Logo"/> 
        </div>
    )
}

export default LoadingIcon
