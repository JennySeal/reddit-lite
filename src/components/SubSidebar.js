import React from 'react'

const SubSidebar = ({onSubRedditClick}) => {
    return (
        <aside className="asideSub" >
        <p>SubReddits</p>
        <form onSubmit={onSubRedditClick}>
        <button className="buttonSub" id="/r/DesignPorn/" value="/r/DesignPorn/" onClick={onSubRedditClick}>/r/DesignPorn</button>
        <button className="buttonSub" id="/r/ITookAPicture/" value="/r/ITookAPicture/" onClick={onSubRedditClick}>/r/ITookAPicture</button>
        <button className="buttonSub" id="/Art/" value="r/Art/" onClick={onSubRedditClick}>/r/Art</button>
        <button className="buttonSub" id="/r/EarthPorn/" value="/r/EarthPorn/" onClick={onSubRedditClick}>/r/EarthPorn</button>
        <button className="buttonSub" id="/r/SpacePorn/" value="r/SpacePorn/" onClick={onSubRedditClick}>/r/SpacePorn</button>
        <button className="buttonSub" id="/r/WildLifePhotography/" value="/r/wildlifephotography/" onClick={onSubRedditClick}>/r/WildlifePhotography</button>
        </form>
        </aside>
    )
}
export default SubSidebar;