import React from 'react';
import { Element } from 'react-scroll'
import './resources/styles.css'

import Header from './components/header-footer/Header'
import Featured from './components/featured'
import VenueInfo from './components/venueInfo'
import Highlight from './components/highlights'
import Pricing from './components/pricing'
import Location from './components/location'
import Footer from './components/header-footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />

      <Element name='featured'>
        <Featured />
      </Element>

      <Element name='venueinfo'>
        <VenueInfo />
      </Element>

      <Element name='highlights'>
        <Highlight />
      </Element>

      <Element name='pricing'>
        <Pricing />
      </Element>

      <Element name="location">
        <Location/>
      </Element>

      <Footer />
    </div>
  );
}

export default App;
