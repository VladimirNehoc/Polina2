import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux'

import App from './containers/App';
import reducer from './reducers/index'

import './normalize.css'
import './index.css'

const store = createStore(reducer, [{id: 1, count: 1}, {id: 7, count: 2}])

ReactDOM.render(
    <BrowserRouter>
        <App store={store} />
    </BrowserRouter>,
    document.getElementById('root')
);