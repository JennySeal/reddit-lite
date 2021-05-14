import React from 'react';
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';
import RedditLogo from './RedditLogo.png';
import LoadingIcon from './LoadingIcon';
import StoryPage from './StoryPage'

const Story = ({onSearchSubmit}) => {
    const stories = useSelector(selectStories);
    console.log(stories);
    const loading = stories.isLoading;
    
    return (
        <div className="storyContainer">
        {(loading === undefined) ? <LoadingIcon/> : <p>Here are some Reddit Stories for you</p>}
        <div className="stories">
        {(stories.data !== undefined) ?        
        stories.data.data.children.map((story) => 
        <div key={story.data.id} className="story">
        <div className="storyText">
        <h3>{story.data.title}</h3>
        <ul>
        <li>SubReddit: {story.data.subreddit}</li>
        <li>Author: {story.data.author}</li>
        <li>Ups: {story.data.ups}</li> 
        <li><span className="tag">{story.data.link_flair_text}</span></li>
        </ul>
        <StoryPage id={story.data.id} onSearchSubmit={onSearchSubmit}/>    
        </div>
        <p><img src={story.data.url} alt="Nothing to see here" onError={(e)=>{
           e.target.src=RedditLogo;
       } } /></p>
        </div>
        ) : <p>Nothing to see!</p>}
        </div>      
         </div>
    )
}


export default Story
