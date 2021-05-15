import React from 'react'
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';
import RedditLogo from './RedditLogo.png';
import StoryPage from './StoryPage'

const StoryList = ({handleSidebarClick}) => {

const stories = useSelector(selectStories);
console.log(stories);

    return (
        <div className="stories">
            {stories.data.data.children.map((story) => 
            <div key={story.data.id} className="story">
            <div className="storyText">
            <h3>{story.data.title}</h3>
            <p>SubReddit: {story.data.subreddit}</p>
            <p>Author: {story.data.author}</p>
            <p>Ups: {story.data.ups}</p> 
            {story.data.link_flair_text && <p><span className="tag">{story.data.link_flair_text}</span></p>}
            <StoryPage id={story.data.id} handleSidebarClick={handleSidebarClick}/>    
            </div>
            <p><img src={story.data.url} alt="Nothing to see here" onError={(e)=>{
               e.target.src=RedditLogo;
           } } /></p>
        </div>)}
        </div>
        )
}

export default StoryList
