import React from 'react'

const Sidebar = ({updateSearchTerm}) => {
    return (
        <aside>
            <button type="submit" id="Gabriel Dawe" value="Gabriel Dawe" onClick={updateSearchTerm}> Gabriel Dawe</button>
            <button type="submit" id="Yayoi Kusama" value="Yayoi Kusama" onClick={updateSearchTerm}>Yayoi Kusama</button>
            <button id="Takashi Murakami" value="Takashi Murakami" onClick={updateSearchTerm}>Takashi Murakami</button>
            <button id="Christopher Wool" value="Christopher Wool" onClick={updateSearchTerm}>Christopher Wool</button>
            <button id="Cecily Brown" value="Cecily Brown" onClick={updateSearchTerm}>Cecily Brown</button>
            <button id="Banksy" value="Banksy" onClick={updateSearchTerm}>Banksy</button>
            <button id="Damien Hirst" value="Damien Hirst" onClick={updateSearchTerm}>Damien Hirst</button>
        </aside>
    )
}
export default Sidebar;