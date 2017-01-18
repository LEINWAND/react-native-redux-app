/* @flow */
'use strict'

import React, { Component } from 'react'
import { Provider } from 'react-redux'

import App from './App'
import configureStore from './store/configureStore'


const store = configureStore()

export default function setup(): ReactClass<{}> {
  class Root extends Component {
    constructor(props: Object) {
      super(props)
    }

    render() {
      return (
        <Provider store={store}>
          <App />
        </Provider>
      )
    }
  }
  return Root
}
