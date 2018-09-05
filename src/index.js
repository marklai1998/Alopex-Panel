// @flow strict

import './style.css'

import favicon from 'assets/favicon.ico'
import React from 'react'
import { render } from 'react-dom'
import { Helmet } from 'react-helmet'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { MediaProvider } from 'react-screen-size'

import { createStore } from './modules/_shared/utils/createStore'
import { App } from './pages'
import { rootReducer } from './redux'

const store = createStore({
  rootReducer
})

const root = document.getElementById('root')

const medias = {
  xs: '(max-width: 600px)',
  sm: '(max-width: 960px) and (min-width: 601px)',
  md: '(max-width: 1280px) and (min-width: 961px)',
  lg: '(max-width: 1920px) and (min-width: 1281px)',
  gtXs: '(min-width: 601px)',
  gtSm: '(min-width: 961px)',
  gtMd: '(min-width: 1281px)',
  gtLg: '(min-width: 1921px)'
}

if (root) {
  render(
    <React.Fragment>
      <Helmet>
        <link rel='shortcut icon' href={favicon} />
      </Helmet>
      <MediaProvider medias={medias}>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </MediaProvider>
    </React.Fragment>,
    root
  )
}
