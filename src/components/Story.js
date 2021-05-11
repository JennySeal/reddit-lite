import React from 'react';
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';
import RedditLogo from './RedditLogo.png'


const Story = () => {
    const stories = useSelector(selectStories);
    const error = stories.isError;
    const loading = stories.isLoading;

    const storyChildren = (stories.data !== undefined) ? stories.data.data.children : [];        


        
    return (
        <div className="storyContainer">
        {(loading) ? <p>Tick tick tick tick boom! Sorry you are waiting</p> : <p></p>}
        {(error) ? <p>So sorry, the loading went wrong!</p> : <p>Here are some Reddit Stories For You</p>}
        <div className="stories">
        {storyChildren.filter(story => story.data.post_hint === 'image' && !story.data.over_18).map((story) => 
        <div key={story.data.id} className="story">
        <div className="storyText">
        <h3>{story.data.title}</h3>
        <ul>
        <li>SubReddit: {story.data.subreddit}</li>
        <li>Created on: {story.data.created}</li>
        <li>{story.data.score}</li> 
        <li>{story.data.permalink}</li>
        <li><a href={story.data.url}>Click here for Reddit link</a></li>
        </ul>
        </div>
        <p><img src={story.data.url} alt="Nothing to see here" onError={(e)=>{
           e.target.src=RedditLogo;
       } } /></p>
        </div>
        )}
        </div>      
         </div>
    )
}


export default Story
