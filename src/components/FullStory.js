import React from 'react'
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

const FullStory = () => {

const fullstory = useSelector(selectStories);
console.log(fullstory)

    return (
        <div className="fullStory">
           {fullstory.data.map((dataItem) => 
            <div key={uuidv4()}>
            <h3>{dataItem.data.children[0].data.title}</h3>
            <img src={dataItem.data.children[0].data.url_overridden_by_dest} alt=""/>
            {dataItem.data.children[0].data.num_comments &&<p>Number of comments: {dataItem.data.children[0].data.num_comments}</p>}
            {dataItem.data.children.map((comment)=>
                <ul>{comment.data.body && <li className="comment">"{comment.data.body}"
                {comment.data.author}</li>}</ul>)}
            </div>)}
            
        </div>
    )
}

export default FullStory
