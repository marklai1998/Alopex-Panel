// @flow strict

import { applyMiddleware, compose, createStore } from 'redux'
import type { CombinedReducer } from 'redux'
import createSagaMiddleware from 'redux-saga'
import type { Saga } from 'redux-saga'

type Payload = {|
  preloadedState?: Object,
  rootReducer: CombinedReducer<any, any>,
  rootSaga?: () => Saga<void>,
|}

export default ({ rootReducer, rootSaga, preloadedState = {} }: Payload) => {
  const sagaMiddleware = createSagaMiddleware()

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  )

  if (rootSaga) sagaMiddleware.run(rootSaga)

  return store
}
