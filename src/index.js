import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

import Home from './pages/Home';
import GlobalStyle from './styles/globalStyle';

ReactDOM.render(
  <React.StrictMode>
    <Fragment>
      <Home />
      <GlobalStyle />
    </Fragment>
  </React.StrictMode>,
  document.getElementById('root')
);