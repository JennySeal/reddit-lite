import React, {useCallback, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

import Header from './components/Header';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import SubSidebar from './components/SubSidebar';
import Footer from './components/Footer';
import FullStory from './components/FullStory';

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
return console.error()
}, [url, dispatch]);

useEffect(() => {
  localStorage.setItem('history', searchTerm);  
    handleFetchStories();
    }, [handleFetchStories, searchTerm])
 
const onArtistClick = useCallback((event) => {
  const artistSearchParams = "search.json?limit=30&q=";
  event.preventDefault();
  localStorage.setItem('history', searchTerm)
  dispatch(updateSearch(`${artistSearchParams}${event.currentTarget.value}`))
},[dispatch, searchTerm]);

const onSubRedditClick = useCallback((event) => {
  const subRedditParams = "top/.json?count=25";
  console.log(`${event.currentTarget.value}${subRedditParams}`)
  event.preventDefault();
  localStorage.setItem('history', searchTerm);
  dispatch(updateSearch(`${event.currentTarget.value}${subRedditParams}`))
},[dispatch, searchTerm]);

const onOpenPost = useCallback((event) => {
 const openPostParams = `/${event.currentTarget.value}.json`;
  console.log(openPostParams);
  event.preventDefault();
  localStorage.setItem('history', searchTerm);
  dispatch(updateSearch(openPostParams))
},[dispatch, searchTerm]);

  return (
    <Router>
    <div className='outerContainer'>
    <Header/>
    <div className='innerContainer'>
    <Sidebar onArtistClick={onArtistClick}/>
    <Switch>
    <Route path="/" exact component={Story} onOpenPost={onOpenPost}/>
    <Route path="/:id" component={FullStory}/>
    </Switch>
    <SubSidebar onSubRedditClick={onSubRedditClick}/>
    </div>
    <Footer/>
    </div>
    </Router>
  )
}
export default App;