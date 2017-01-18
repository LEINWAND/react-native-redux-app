/* @flow */
'use strict'

import { combineReducers } from 'redux'

import mainReducer from './main'


export default combineReducers({
  main: mainReducer,
})
