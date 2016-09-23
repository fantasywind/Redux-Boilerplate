import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.js';
import store from './store/configureStore';

ReactDOM.render(<App store={store} />, document.getElementById('root'));
