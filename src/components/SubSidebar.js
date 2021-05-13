import React from 'react'

const SubSidebar = ({onSearchSubmit}) => {
    return (
        <aside className="asideSub" >
        <p>SubReddits</p>
        <form onSubmit={onSearchSubmit}>
            <button className="buttonSub" id="/Art" value="/Art" onClick={onSearchSubmit}>/r/Art</button>
            <button className="buttonSub" id="/r/Photography" value="/r/Photography" onClick={onSearchSubmit}>/r/Photography</button>
            <button className="buttonSub" id="/r/DesignPorn" value="/r/DesignPorn" onClick={onSearchSubmit}>/r/DesignPorn</button>
            <button className="buttonSub" id="/r/ITookAPicture" value="/r/ITookAPicture" onClick={onSearchSubmit}>/r/ITookAPicture</button>
            <button className="buttonSub" id="/r/Graphic_Design" value="/r/Graphic_Design" onClick={onSearchSubmit}>/r/Graphic_Design</button>
            <button className="buttonSub" id="/r/Typography" value="/r/Typography" onClick={onSearchSubmit}>/r/Typography</button>
            </form>
            </aside>
    )
}
export default SubSidebar;