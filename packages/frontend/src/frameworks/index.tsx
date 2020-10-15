import { render } from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';

import App from '$src/frameworks/app';
import { GlobalStyle } from './style';
import store from '$src/frameworks/redux';

render(
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root'),
);
