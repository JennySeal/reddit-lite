import React from 'react'

const Sidebar = ({handleSidebarClick}) => {
    return (
        <aside>
        <p>Artists</p>
        <form onSubmit={handleSidebarClick}>
            <button id="Gabriel Dawe" value="search.json?limit=25&q=Gabriel Dawe" onClick={handleSidebarClick}> Gabriel Dawe</button>
            <button id="Yayoi Kusama" value="search.json?limit=25&q=Yayoi Kusama" onClick={handleSidebarClick}>Yayoi Kusama</button>
            <button id="Peter Doig" value="search.json?limit=25&q=Peter Doig" onClick={handleSidebarClick}>Peter Doig</button>
            <button id="Olafur Eliasson" value="search.json?limit=25&q=Olafur Eliasson" onClick={handleSidebarClick}>Olafur Eliasson</button>
            <button id="Banksy" value="search.json?limit=25&q=Banksy" onClick={handleSidebarClick}>Banksy</button>
            <button id="Jeff Koons" value="search.json?limit=25&q=Jeff Koons" onClick={handleSidebarClick}>Jeff Koons</button>
            </form>
            </aside>
    )
}
export default Sidebar;