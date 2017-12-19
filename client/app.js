import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AppContainer } from 'react-hot-loader' // eslint-disable-line
import App from './views/App'

const root = document.getElementById('root')
const render = Components => { // eslint-disable-line
  ReactDOM.hydrate(

    <AppContainer>
      <BrowserRouter>
        <Components />
      </BrowserRouter>
    </AppContainer>,
    root,

  )
}
render(App)
// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./views/App', () => {
    const NewRoot = require('./views/App').default // eslint-disable-line
    render(NewRoot)
  })
}
