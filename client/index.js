import React from 'react'
import ReactDOM from 'react-dom'
import history from './history'

import { Router } from 'react-router-dom'

import App from './app'

ReactDOM.render(
    <Router history={history}>
        <App />
    </Router>,
    document.getElementById('app')
)
