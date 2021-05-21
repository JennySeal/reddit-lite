import React from 'react';
import LoadingIcon from './LoadingIcon';
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';
import StoryList from './StoryList';
import FullStory from './FullStory';
import {Link} from 'react-router-dom';

const Story = ({onOpenPost}) => {
    const stories = useSelector(selectStories)
    const loading = stories.isLoading;
    console.log(stories.data);

    
    return (
        <div className="storyContainer">
        {loading && <LoadingIcon/>}
        {(stories.data !== undefined) ?
            (stories.data.data !== undefined) ?
        <StoryList onOpenPost={onOpenPost}/>
         : <Link to={`story/${stories.data[0].data.children[0].data.title}`}><FullStory/></Link> : <p></p>}
        </div>      
        )
}


export default Story
