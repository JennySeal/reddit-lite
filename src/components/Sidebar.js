import React from 'react'

const Sidebar = ({onArtistClick}) => {
    return (
        <aside>
        <p>Artists</p>
        <form onSubmit={onArtistClick}>
            <button id="Gabriel Dawe" value="Gabriel Dawe" onClick={onArtistClick}> Gabriel Dawe</button>
            <button id="Yayoi Kusama" value="Yayoi Kusama" onClick={onArtistClick}>Yayoi Kusama</button>
            <button id="Peter Doig" value="Peter Doig" onClick={onArtistClick}>Peter Doig</button>
            <button id="Olafur Eliasson" value="Olafur Eliasson" onClick={onArtistClick}>Olafur Eliasson</button>
            <button id="Banksy" value="Banksy" onClick={onArtistClick}>Banksy</button>
            <button id="Jeff Koons" value="Jeff Koons" onClick={onArtistClick}>Jeff Koons</button>
            </form>
            </aside>
    )
}
export default Sidebar;