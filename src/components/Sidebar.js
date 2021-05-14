import React from 'react'

const Sidebar = ({onSearchSubmit}) => {
    return (
        <aside>
        <p>Artists</p>
        <form onSubmit={onSearchSubmit}>
            <button id="Gabriel Dawe" value="search.json?limit=25&q=Gabriel Dawe" onClick={onSearchSubmit}> Gabriel Dawe</button>
            <button id="Yayoi Kusama" value="search.json?limit=25&q=Yayoi Kusama" onClick={onSearchSubmit}>Yayoi Kusama</button>
            <button id="Peter Doig" value="search.json?limit=25&q=Peter Doig" onClick={onSearchSubmit}>Peter Doig</button>
            <button id="Olafur Eliasson" value="search.json?limit=25&q=Olafur Eliasson" onClick={onSearchSubmit}>Olafur Eliasson</button>
            <button id="Banksy" value="search.json?limit=25&q=Banksy" onClick={onSearchSubmit}>Banksy</button>
            <button id="Jeff Koons" value="search.json?limit=25&q=Jeff Koons" onClick={onSearchSubmit}>Jeff Koons</button>
            </form>
            </aside>
    )
}
export default Sidebar;