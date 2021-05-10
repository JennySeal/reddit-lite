import React from 'react';
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';


const Story = () => {
    const stories = useSelector(selectStories);
    const storyChildren = stories.data.children;
    console.log(storyChildren);
    

    return (
        <div className="story">
        <p>Here is a Reddit Story For You</p>
        </div>
    )
}

export default Story
