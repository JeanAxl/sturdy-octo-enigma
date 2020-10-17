import { render } from 'react-dom';
import React from 'react';
import { App } from '$src/main/app';
import { GlobalStyle } from './style';
render(React.createElement(React.Fragment, null,
    React.createElement(GlobalStyle, null),
    React.createElement(App, null)), document.getElementById('root'));
