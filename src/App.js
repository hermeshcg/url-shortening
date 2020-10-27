import React from 'react';

import GlobalStyle from './styles/global';

import Header from './components/Header';
import GetStarted from './components/GetStarted';
import UrlShortening from './components/UrlShortening';

function App() {
  return (
    <>
      <Header />
      <GetStarted />
      <UrlShortening />
      <GlobalStyle />
    </>
  );
}

export default App;
