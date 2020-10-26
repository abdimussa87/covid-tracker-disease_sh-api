import React from 'react';
import './App.css';
import Header from './Header';
import InfoBox from './InfoBox';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__stats">

        <InfoBox />
        <InfoBox />
        <InfoBox />
      </div>
    </div>
  );
}

export default App;
