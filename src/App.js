import React from 'react';
import logo from './logo.svg';
import './App.css';
import News from './News';
import Newsf from './NewsF'
import Counter from './counter'

function App() {
  return (
    <div className="App">
      <News />
      <Counter />
      {/* <Newsf /> */}
    </div>
  );
}

export default App;
