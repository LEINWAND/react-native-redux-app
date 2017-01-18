/* @flow */
'use strict'

import React, { Component } from 'react'
import { View } from 'react-native'


type Props = {
  children: Object,
}

type State = {
  // state
}


class Content extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const Content = (this: any)
    // Content.onEvent = this.onEvent.bind(this)
  }

  /* Component Lifecycle */

  /// Mounting
  // componentWillMount() {}
  // componentDidMount() {}
  // componentWillUnmount() {}

  /// Updating
  // componentWillReceiveProps(nextProps: Props) {}
  // shouldComponentUpdate(nextProps: Props, nextState: State) {}
  // componentWillUpdate(nextProps: Props, nextState: State) {}
  // componentDidUpdate(prevProps: Props, prevState: State) {}


  render() {
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        {this.props.children}
      </View>
    )
  }


  /// Event Handlers
  // ...
}


export default Content
