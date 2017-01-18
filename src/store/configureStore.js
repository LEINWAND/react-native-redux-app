/* @flow */
'use strict'

import { applyMiddleware, compose, createStore } from 'redux'

import thunk from 'redux-thunk'
import promise from 'redux-promise'
import createLogger from 'redux-logger'
import devTools from 'remote-redux-devtools'

import reducers from '../reducers'


const logger = createLogger()

export default function configureStore(): Object {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(thunk, promise, logger),
      devTools()
    )
  )
  return store
}
