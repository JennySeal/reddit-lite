import React from 'react'

const StoryPage = ({id, onOpenPost}) => {

        
    return (
        <form onSubmit={onOpenPost}>
        <button className="yellow-button" value={id} onClick={onOpenPost}>Click to open</button> 
        </form>
    )
}

export default StoryPage
