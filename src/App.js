import React, {useCallback, useEffect} from 'react'
import Header from './components/Header';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import SubSidebar from './components/SubSidebar';
import axios from 'axios';
import './styles/styles.scss'
import {useDispatch, useSelector} from 'react-redux';
import {fetchingStories, gotStories, fetchStoriesFailed} from './features/stories/storiesSlice';
import {updateSearch} from './features/searches/searchSlice';
import {selectSearches} from './features/searches/searchSlice';


const API_ENDPOINT = 'https://www.reddit.com/'

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


const onSearchSubmit = useCallback((event) => {
  event.preventDefault();
  console.log(event.currentTarget.value)
  dispatch(updateSearch(event.currentTarget.value))
  
},[dispatch]);


  return (
    <div className='outerContainer'>
    <Header/>
    <div className='innerContainer'>
    <Sidebar onSearchSubmit={onSearchSubmit}/>
    <Story onSearchSubmit={onSearchSubmit}/>
    <SubSidebar onSearchSubmit={onSearchSubmit}/>
    </div>
    </div>
  )
}
export default App;
