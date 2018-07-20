import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import AppState from './AppState'
import { homeReducer } from './modules/home'
import { userReducer } from './modules/user'

const appReducer = combineReducers<AppState>({
  user: userReducer,
  home: homeReducer,
  form: formReducer,
})

export default appReducer
