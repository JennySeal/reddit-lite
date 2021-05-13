import React from 'react'

const Sidebar = ({onSearchSubmit}) => {
    return (
        <aside>
        <p>Artists</p>
        <form onSubmit={onSearchSubmit}>
            <button id="Gabriel Dawe" value="Gabriel Dawe" onClick={onSearchSubmit}> Gabriel Dawe</button>
            <button id="Yayoi Kusama" value="Yayoi Kusama" onClick={onSearchSubmit}>Yayoi Kusama</button>
            <button id="Christopher Wool" value="Christopher Wool" onClick={onSearchSubmit}>Christopher Wool</button>
            <button id="Cecily Brown" value="Cecily Brown" onClick={onSearchSubmit}>Cecily Brown</button>
            <button id="Banksy" value="Banksy" onClick={onSearchSubmit}>Banksy</button>
            <button id="Damien Hirst" value="Damien Hirst" onClick={onSearchSubmit}>Damien Hirst</button>
            </form>
            </aside>
    )
}
export default Sidebar;