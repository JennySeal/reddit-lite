import React, {useState, useCallback, useEffect} from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Story from './components/Story';
import axios from 'axios';
import './styles/styles.scss'
import {useDispatch} from 'react-redux';
import {fetchingStories, gotStories, fetchStoriesFailed} from './features/stories/storiesSlice';

const API_ENDPOINT = 'https://www.reddit.com/search.json?q='

const App = () => {
  const [searchTerm, setSearchTerm] = useState('pizza');
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
    <div className='container'>
    <Header/>
    <Search searchTerm={searchTerm} />
    <Story/>
    </div>
  )
}
export default App;
