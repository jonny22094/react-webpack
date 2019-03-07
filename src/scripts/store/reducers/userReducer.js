//@flow
import {USER_LOGIN, USER_LOGOUT} from '@app/store/constants'

type State = {
  username: string,
  token: string
}

type Action = {
  type: string,
  payload: any
}


const initialState: State = {
  username: '',
  token: localStorage.getItem('token') || ''
}

const userReducer = (state: State = initialState, action: Action) => {
  switch(action.type) {
    case USER_LOGIN:
      return {
        ...state,
        ...action.payload
      }
    case USER_LOGOUT:
      return {
        ...initialState
      }
    default:
      return state
  }
}

export default userReducer