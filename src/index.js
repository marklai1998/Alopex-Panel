// flow strict

import './style.css'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import createStore from './modules/_shared/utils/createStore'
import { App } from './pages'
import { rootReducer } from './redux'

const store = createStore({
  rootReducer
})

const root = document.getElementById('root')

if (root) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    root
  )
}
