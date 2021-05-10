import React, {useState} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Story from './components/Story';
import './styles/styles.scss'


const API_ENDPOINT = 'https://www.reddit.com/search.json?q='






const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);

  return (
    <div className='container'>
    <Header/>
    <Search searchTerm={searchTerm} />
    <Story/>
    </div>
  )
}
export default App;
