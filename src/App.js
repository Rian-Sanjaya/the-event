import React from 'react';
import { Element } from 'react-scroll'
import './resources/styles.css'

import Header from './components/header-footer/Header'
import Featured from './components/featured'

function App() {
  return (
    <div className="App">
      <Header />

      <Element name='featured'>
        <Featured />
      </Element>
    </div>
  );
}

export default App;
