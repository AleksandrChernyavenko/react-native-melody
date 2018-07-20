import { FormReducer } from 'redux-form'
import { HomeState } from './modules/home'
import { UserState } from './modules/user'

export default interface AppState {
  home: HomeState,
  user: UserState,
  form: FormReducer | any,
}
