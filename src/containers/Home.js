/* @flow */
'use strict'

import React, { Component } from 'react'
import { StyleSheet, Text } from 'react-native'
import { connect } from 'react-redux'

import Content from '../components/UI/Content'


type Props = {
  // props
}

type State = {
  // state
}


class Home extends Component {
  props: Props
  state: State

  constructor(props: Props) {
    super(props)

    // this.state = {}

    // const Home = (this: any)
    // Home.onEvent = this.onEvent.bind(this)
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
      <Content>
        <Text>Home</Text>
      </Content>
    )
  }


  /// Event Handlers
  // ...
}


const styles: Object = StyleSheet.create({
  // styles
})


const mapStateToProps = (state: Object) => {
  // console.log('Home mapStateToProps:')
  // console.log('  state: ', state)

  return {
    // main: state.main,
  }
}


export default connect(
  mapStateToProps
  // mapDispatchToProps
)(Home)
