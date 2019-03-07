//@flow
import {combineReducers, Reducer} from 'redux'
import userReducer from './userReducer'

export const rootReducer: Reducer<any, any> = combineReducers({
  user: userReducer
})