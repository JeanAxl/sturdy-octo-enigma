import { render } from 'react-dom';
import React from 'react';

import App from '$src/app';
import { GlobalStyle } from './style';

render(
  <React.Fragment>
    <GlobalStyle />
    <App />
  </React.Fragment>,
  document.getElementById('root'),
);
