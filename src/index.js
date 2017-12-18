import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import App from './containers/app';

import './app.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <App />
    </Provider>,
    target
);