import React from 'react'
import Header from './components/Header';
import Search from './components/Search';
import Story from './components/Story';
import './styles/styles.scss'

const App = () => {
  return (
    <div className='container'>
    <Header/>
    <Search/>
    <Story/>
    </div>
  )
}
export default App;
