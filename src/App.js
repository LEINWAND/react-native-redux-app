/* @flow */
'use strict'

import React, { Component } from 'react'
import { StatusBar, View } from 'react-native'

import AppNavigator from './AppNavigator'


type Props = {
  // props
}

type State = {
  // state
}


class App extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // const App = (this: any)
    // App.onEvent = this.onEvent.bind(this)
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar />
        <AppNavigator />
      </View>
    )
  }
}


export default App
