import React from 'react'
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';
import StoryPage from './StoryPage'

const StoryList = ({onOpenPost}) => {

const stories = useSelector(selectStories);
console.log(stories);

    return (
        <>
        <p>Here are some Reddit Stories for you</p>
        <div className="stories">
            {stories.data.data.children.map((story) => 
            <div key={story.data.id} className="story">
            <p><img src={story.data.thumbnail} alt="" onError={(e)=>{e.target.onerror = null; e.target.src=story.data.url }}/></p>
            <div className="storyText">
            <h3>{story.data.title}</h3>
            <p>SubReddit: {story.data.subreddit}</p>
            <p>Author: {story.data.author}</p>
            <p>Ups: {story.data.ups}</p> 
            {story.data.link_flair_text && <p><span className="tag">{story.data.link_flair_text}</span></p>}
            <StoryPage id={story.data.id} onOpenPost={onOpenPost}/>    
            </div>
        </div>)}
        </div>
        </>
        )
}

export default StoryList
