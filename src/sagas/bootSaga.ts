import { REHYDRATE } from 'redux-persist'
import { delay } from 'redux-saga'
import { call, take } from 'redux-saga/effects'
import screens from '../constants/screens'
import NavigationService from '../services/NavigationService'

const navigateToLogin = () => NavigationService.navigate(screens.Home)

export default function* bootSaga() {
  yield take(REHYDRATE)
  yield call(delay, 2000)
  return navigateToLogin()
}
