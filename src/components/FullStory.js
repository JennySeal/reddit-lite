import React from 'react'
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';
import {v4 as uuidv4} from 'uuid';

const FullStory = () => {

const fullstory = useSelector(selectStories);
console.log(fullstory);

    return (
        <div className="fullStory">
            {fullstory.data.map((dataItem) => 
            <div key={uuidv4()}>
            {dataItem.data.children[0].data.title && <h3>{dataItem.data.children[0].data.title}</h3>}
            {dataItem.data.children[0].data.url_overridden_by_dest && <img src={dataItem.data.children[0].data.url_overridden_by_dest} alt=""/>}
            {dataItem.data.children[0].data.num_comments &&<p>Number of comments: {dataItem.data.children[0].data.num_comments}</p>}
            {dataItem.data.children.map((comment)=>
                comment.data.body && <ul><li className="comment">"{comment.data.body}"
                &nbsp; <span className="author">from &nbsp;  {comment.data.author}</span></li></ul>)}
            </div>)}
        </div>
    )
}

export default FullStory
