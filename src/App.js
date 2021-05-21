import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import SubSidebar from './components/SubSidebar';
import Footer from './components/Footer';


import './styles/styles.scss'

import {fetchingStories, gotStories, fetchStoriesFailed} from './features/stories/storiesSlice';
import {updateSearch} from './features/searches/searchSlice';
import {selectSearches} from './features/searches/searchSlice';
import FullStory from './components/FullStory';

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
    handleFetchStories();
    }, [handleFetchStories])
 
const onOpenPost = useCallback((event) => {
 const openPostParams = `/${event.currentTarget.value}.json`;
  console.log(openPostParams);
  event.preventDefault();
  dispatch(updateSearch(openPostParams))
},[dispatch]);

console.log(window.localStorage.getItem('history'));

const Homepage = () => {
  return (
    <Story onOpenPost={onOpenPost}/>
  )
}


  return (
    <Router>
    <Header/>
    <div className='innerContainer'>
    <div className='sidebars'>
    <SubSidebar/>
    <Sidebar />
    </div>
    <Switch>
    <Route exact path='/' component={Homepage} />
    <Route path={`/story`} component={FullStory}/>
    </Switch>
    </div>
    <Footer/>
    </Router>
  )
}

export default App;