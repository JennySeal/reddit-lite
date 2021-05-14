import React from 'react'

const SubSidebar = ({onSearchSubmit}) => {
    return (
        <aside className="asideSub" >
        <p>SubReddits</p>
        <form onSubmit={onSearchSubmit}>

        <button className="buttonSub" id="/r/DesignPorn" value="/r/DesignPorn/top/.json?count=25" onClick={onSearchSubmit}>/r/DesignPorn</button>
        <button className="buttonSub" id="/r/ITookAPicture" value="/r/ITookAPicture/top/.json?count=25" onClick={onSearchSubmit}>/r/ITookAPicture</button>
        <button className="buttonSub" id="/Art" value="r/Art/top/.json?count=25" onClick={onSearchSubmit}>/r/Art</button>
        <button className="buttonSub" id="/r/EarthPorn" value="/r/EarthPorn/top/.json?count=25" onClick={onSearchSubmit}>/r/EarthPorn</button>
        <button className="buttonSub" id="/r/SpacePorn" value="r/SpacePorn/top/.json?count=25" onClick={onSearchSubmit}>/r/SpacePorn</button>
        <button className="buttonSub" id="/r/WildLifePhotography" value="/r/wildlifephotography/top/.json?count=25" onClick={onSearchSubmit}>/r/WildlifePhotography</button>
        
            </form>
            </aside>
    )
}
export default SubSidebar;