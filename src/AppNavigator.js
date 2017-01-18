/* @flow */
'use strict'

import React, { Component } from 'react'
import { Navigator } from 'react-native'

import Home from './containers/Home'


type Props = {
  // props
}

type State = {
  // state
}


class AppNavigator extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // const AppNavigator = (this: any)
    // AppNavigator.onEvent = this.onEvent.bind(this)
  }

  render() {
    return (
      <Navigator
        initialRoute={{ id: 'Home' }}
        renderScene={this.renderScene}
      />
    )
  }

  renderScene(route: Object, navigator: Navigator) {
    // NOTE: mapping routes to components manually to avoid circular dependencies
    switch (route.id) {
      case 'Home':
        return <Home navigator={navigator} />

      default:
        return <Home navigator={navigator} />
    }
  }
}


export default AppNavigator
