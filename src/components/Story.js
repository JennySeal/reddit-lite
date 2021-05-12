import React from 'react';
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';
import RedditLogo from './RedditLogo.png';


const Story = ({handleRemove}) => {
    const stories = useSelector(selectStories);
    const error = stories.isError;
    const loading = stories.isLoading;



    return (
        <div className="storyContainer">
        {(loading === undefined) ? <p>Tick tick tick tick boom! Sorry you are waiting</p> : <p></p>}
        {(error) ? <p>So sorry, the loading went wrong!</p> : <p>Here are some Reddit Stories For You</p>}
        <div className="stories">
        {(stories.data !== undefined) ?        
        stories.data.data.children.filter(story => story.data.post_hint === 'image' && !story.data.over_18).map((story) => 
        <div key={story.data.id} className="story">
        <div className="storyText">
        <h3>{story.data.title}</h3>
        <ul>
        <li>SubReddit: {story.data.subreddit}</li>
        <li>Created on: {story.data.created}</li>
        <li>{story.data.score} likes</li> 
        <li><a href={story.data.url}>Click here for Reddit link</a></li>
        <button className="small-button" id={story.data.id} value={story.data.id} onClick={()=>{handleRemove(story.data.id)}}>Remove Story</button>
        </ul>
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
