import React from 'react'

const StoryPage = ({id, handleSidebarClick}) => {
    const pageId = `/${id}.json`
        
    return (
        <form onSubmit={handleSidebarClick}>
        <button className="yellow-button" value={pageId} onClick={handleSidebarClick}>Click here to open story</button> 
        </form>
    )
}

export default StoryPage
