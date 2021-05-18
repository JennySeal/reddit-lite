import React from 'react'
import {selectStories} from './../features/stories/storiesSlice';
import {useSelector} from 'react-redux';


const FullStory = () => {

const fullstory = useSelector(selectStories);
const post = fullstory.data[0].data.children[0].data;
console.log(fullstory);

    return (
        <div className="fullStory">
            <div key={post.created}>
            <h3>{post.title}</h3>
            {post.url_overridden_by_dest ? 
                <img src={post.url_overridden_by_dest} alt=""/> :
                <img src={post.thumbnail} alt=""/>} 
                {post.num_comments && <p>Number of comments: {post.num_comments}</p>}
            {fullstory.data[1].data.children.map((comment)=>
                comment.data.body && <p className="comment">"{comment.data.body}"
                &nbsp; <span className="author">from &nbsp;  {comment.data.author}</span></p>)}
                </div>
        </div>
    )
}

export default FullStory
