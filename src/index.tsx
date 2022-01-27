import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './styles';
import { reportWebVitals } from './core';

ReactDOM.render(
  <React.StrictMode>
    <>
      <GlobalStyles />
      <div>Hello World</div>
    </>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
