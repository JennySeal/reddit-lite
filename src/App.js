import React, {useState, useCallback, useEffect} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import './styles/styles.scss'
import {useDispatch} from 'react-redux';
import {fetchingStories, gotStories, fetchStoriesFailed} from './features/stories/storiesSlice';

const API_ENDPOINT = 'https://www.reddit.com/search.json?limit=50&q='

const App = () => {
  const [searchTerm, setSearchTerm] = useState('contemporary art');
  const [url, setUrl] = useState(`${API_ENDPOINT}${searchTerm}`);
  const dispatch = useDispatch(); 
  
  const handleFetchStories = useCallback(() => {
  dispatch(fetchingStories);
  axios.get(url).then(({data}) => {
    dispatch(gotStories(data))
  })
.catch(() => 
dispatch(fetchStoriesFailed));
}, [url, dispatch]);

useEffect(() => {
  handleFetchStories();}, [handleFetchStories])

const updateSearchTerm = (e) => {
 setSearchTerm(e.currentTarget.value)
 setUrl(`${API_ENDPOINT}${searchTerm}`)
}

  return (
    <div className='outerContainer'>
    <Header/>
    <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} />
    <div className='innerContainer'>
    <Sidebar updateSearchTerm={updateSearchTerm}/>
    <Story/>
    </div>
    </div>
  )
}
export default App;
