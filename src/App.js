import React, { useState } from 'react';
import Header from './components/header/Header'
import Feed from './components/feed/Feed'
import Result from './components/result/Result'
import './App.css';

function App() {

  const [feedData, setFeedData] = useState(undefined)

  return (
    <div className='app'>
      <Header />
      <Feed setFeedData={setFeedData} />
      <Result data={feedData} />
    </div>
  );
}

export default App;
