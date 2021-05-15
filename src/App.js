import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import Header from './components/Header';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import SubSidebar from './components/SubSidebar';
import Footer from './components/Footer';

import './styles/styles.scss'

import {fetchingStories, gotStories, fetchStoriesFailed} from './features/stories/storiesSlice';
import {updateSearch} from './features/searches/searchSlice';
import {selectSearches} from './features/searches/searchSlice';

const API_Endpoint = 'https://www.reddit.com/'

const App = () => {
  
const searchTerm = useSelector(selectSearches);
const url = `${API_Endpoint}${searchTerm}`;
const dispatch = useDispatch(); 
  
const handleFetchStories = useCallback(() => {
  dispatch(fetchingStories);
  axios.get(url).then(({data}) => {
    dispatch(gotStories(data))
    window.scrollTo(0, 0)
  })
.catch(() => 
dispatch(fetchStoriesFailed));
}, [url, dispatch]);

useEffect(() => {
  localStorage.setItem('history', searchTerm);  
    handleFetchStories();
    }, [handleFetchStories, searchTerm])
 
const handleSidebarClick = useCallback((event) => {
  event.preventDefault();
  localStorage.setItem('history', searchTerm)
  dispatch(updateSearch(event.currentTarget.value))
},[dispatch, searchTerm]);

  return (
    <div className='outerContainer'>
    <Header/>
    <div className='innerContainer'>
    <Sidebar handleSidebarClick={handleSidebarClick}/>
    <Story handleSidebarClick={handleSidebarClick}/>
    <SubSidebar handleSidebarClick={handleSidebarClick}/>
    </div>
    <Footer/>
    </div>
  )
}
export default App;