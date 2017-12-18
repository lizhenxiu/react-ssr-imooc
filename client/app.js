import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './App.jsx'
const root = document.getElementById('root')
const render = Components => {
    ReactDOM.hydrate(
        <AppContainer>
            <Components />
        </AppContainer>, root
    )
}
render(App)
// Webpack Hot Module Replacement API
if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        const NewRoot = require('./App.jsx').default;
        render(
            NewRoot
        );
    })
}