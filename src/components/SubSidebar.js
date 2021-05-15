import React from 'react'

const SubSidebar = ({handleSidebarClick}) => {
    return (
        <aside className="asideSub" >
        <p>SubReddits</p>
        <form onSubmit={handleSidebarClick}>

        <button className="buttonSub" id="/r/DesignPorn" value="/r/DesignPorn/top/.json?count=25" onClick={handleSidebarClick}>/r/DesignPorn</button>
        <button className="buttonSub" id="/r/ITookAPicture" value="/r/ITookAPicture/top/.json?count=25" onClick={handleSidebarClick}>/r/ITookAPicture</button>
        <button className="buttonSub" id="/Art" value="r/Art/top/.json?count=25" onClick={handleSidebarClick}>/r/Art</button>
        <button className="buttonSub" id="/r/EarthPorn" value="/r/EarthPorn/top/.json?count=25" onClick={handleSidebarClick}>/r/EarthPorn</button>
        <button className="buttonSub" id="/r/SpacePorn" value="r/SpacePorn/top/.json?count=25" onClick={handleSidebarClick}>/r/SpacePorn</button>
        <button className="buttonSub" id="/r/WildLifePhotography" value="/r/wildlifephotography/top/.json?count=25" onClick={handleSidebarClick}>/r/WildlifePhotography</button>
        
            </form>
            </aside>
    )
}
export default SubSidebar;