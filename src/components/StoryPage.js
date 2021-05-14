import React from 'react'

const StoryPage = ({id, onSearchSubmit}) => {
    const pageId = `/${id}.json`
        
    return (
        <form onSubmit={onSearchSubmit}>
        <button className="small-button" value={pageId} onClick={onSearchSubmit}>Click here to open story</button> 
        </form>
    )
}

export default StoryPage
