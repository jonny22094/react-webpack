import {createStore} from 'redux'
import {rootReducer} from '@app/store/reducers'

export const Store = createStore(rootReducer)
