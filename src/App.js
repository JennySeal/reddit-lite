import React, {useState, useCallback, useEffect} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Story from './components/Story';
import Sidebar from './components/Sidebar';
import axios from 'axios';
import './styles/styles.scss'
import {useDispatch} from 'react-redux';
import {fetchingStories, gotStories, fetchStoriesFailed} from './features/stories/storiesSlice';

const API_ENDPOINT = 'https://www.reddit.com/search.json?q='

const App = () => {
  const [searchTerm, setSearchTerm] = useState('gabriel dawe');
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


  return (
    <div className='outerContainer'>
    <Header/>
    <Search searchTerm={searchTerm} />
    <div className='innerContainer'>
    <Sidebar/>
    <Story/>
    </div>
    </div>
  )
}
export default App;
