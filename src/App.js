import React, {useState, useCallback, useEffect} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import './styles/styles.scss'
import {useDispatch} from 'react-redux';
import {fetchingStories, gotStories, fetchStoriesFailed, removeStory} from './features/stories/storiesSlice';

const API_ENDPOINT = 'https://www.reddit.com/search.json?limit=50&q='

const App = () => {
  const [searchTerm, setSearchTerm] = useState('search art');
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
  console.log(e.currentTarget)
 setSearchTerm(e.currentTarget.value)
 e.preventDefault();
}

const handleRemove = useCallback((id) => {
  dispatch(removeStory(id))},[dispatch]);

const onSearchSubmit = useCallback((event) => {
  setSearchTerm(event.currentTarget.value)
  setUrl(`${API_ENDPOINT}${searchTerm}`)
  console.log(searchTerm);
  event.preventDefault();
},[searchTerm]);

  return (
    <div className='outerContainer'>
    <Header/>
    <Search searchTerm={searchTerm} updateSearchTerm={updateSearchTerm} onSearchSubmit={onSearchSubmit}/>
    <div className='innerContainer'>
    <Sidebar updateSearchTerm={updateSearchTerm} onSearchSubmit={onSearchSubmit}/>
    <Story handleRemove={handleRemove}/>
    </div>
    </div>
  )
}
export default App;
