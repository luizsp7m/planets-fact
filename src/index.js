import React from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import GlobalStyle from './styles/globalStyle';

import { PlanetProvider } from './contexts/PlanetContext';

ReactDOM.render(
  <React.StrictMode>
    <PlanetProvider>
      <Home />
      <GlobalStyle />
    </PlanetProvider>
  </React.StrictMode>,
  document.getElementById('root')
);