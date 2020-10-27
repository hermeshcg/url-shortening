import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import GetStarted from './components/GetStarted';
import UrlShortening from './components/UrlShortening';
import AdvancedStatistics from './components/AdvancedStatistics';

function App() {
  return (
    <>
      <Header />
      <GetStarted />
      <UrlShortening />
      <AdvancedStatistics />
      <GlobalStyle />
    </>
  );
}

export default App;
