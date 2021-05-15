import React from 'react';
import LoadingIcon from './LoadingIcon';
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';
import StoryList from './StoryList';
import FullStory from './FullStory';

const Story = ({handleSidebarClick}) => {
    const stories = useSelector(selectStories)
    const loading = stories.isLoading;

    
    return (
        <div className="storyContainer">
        {(loading === undefined) ? 
            <LoadingIcon/> : <p>Here are some Reddit Stories for you</p>}
        {(stories.data !== undefined) ?
            (stories.data.data !== undefined) ?
        <StoryList handleSidebarClick={handleSidebarClick}/>
         : <FullStory/> : <p></p>}
        </div>      
        )
}


export default Story
