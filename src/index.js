import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './services/registerServiceWorker';
import AppContainer from './containers/AppContainer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer/>
  </React.StrictMode>,
  document.getElementById('root')
);
registerServiceWorker();