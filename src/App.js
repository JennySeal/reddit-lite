import React, {useCallback, useEffect} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import './styles/styles.scss'
import {useDispatch, useSelector} from 'react-redux';
import {fetchingStories, gotStories, fetchStoriesFailed, removeStory} from './features/stories/storiesSlice';
import {updateSearch} from './features/searches/searchSlice';
import {selectSearches} from './features/searches/searchSlice';

const API_ENDPOINT = 'https://www.reddit.com/search.json?limit=50&q='

const App = () => {
  const searchTerm = useSelector(selectSearches);
  const url = `${API_ENDPOINT}${searchTerm}`;
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


const handleRemove = useCallback((id) => {
  dispatch(removeStory(id))},[dispatch]);

const onSearchSubmit = useCallback((event) => {
  dispatch(updateSearch(event.currentTarget.value))
  event.preventDefault();
},[dispatch]);

  return (
    <div className='outerContainer'>
    <Header/>
    <Search searchTerm={searchTerm} onSearchSubmit={onSearchSubmit}/>
    <div className='innerContainer'>
    <Sidebar onSearchSubmit={onSearchSubmit}/>
    <Story handleRemove={handleRemove}/>
    </div>
    </div>
  )
}
export default App;
