import {USER_LOGIN, USER_LOGOUT} from '../constants'
import {syncano} from '../utils/syncano'

const addUser = payload => ({
    type: USER_LOGIN,
    payload
})

const removeUser = () => ({
  type: USER_LOGOUT
})

const logout = (payload, dispatch) => {
  localStorage.setItem('token', '')

  dispatch(removeUser(payload))
}

const login = (payload, dispatch) => {
  return syncano('user-auth/login', payload)
    .then(res => {
      localStorage.setItem('token', res.token)
      console.log(res)
      console.log(dispatch(addUser(res)))
    })
    .catch(err => {
      console.log(err.response.data.message)
      throw err.response.data.message
    })
}

const register = (payload, dispatch) => {
  return syncano('user-auth/register', payload)
    .then(res => {
      localStorage.setItem('token', res.token)
      dispatch(addUser(res))
    })
    .catch(err => {
      throw err.response.data.username
    })
}

const fetchProfile = (payload, dispatch) => {
  return syncano('user/profile', payload)
    .then(res => {
      dispatch(addUser(res))
    })
    .catch(() => {
      localStorage.setItem('token', '')
    })
}

export default {
  login,
  logout,
  register,
  addUser,
  removeUser,
  fetchProfile
}