import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import GetStarted from './components/GetStarted';
import UrlShortening from './components/UrlShortening';
import AdvancedStatistics from './components/AdvancedStatistics';
import Boost from './components/Boost';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <GetStarted />
      <UrlShortening />
      <AdvancedStatistics />
      <Boost />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
