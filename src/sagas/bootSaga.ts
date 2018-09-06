import { REHYDRATE } from 'redux-persist'
import { delay } from 'redux-saga'
import { SplashScreen } from 'expo'
import { call, take } from 'redux-saga/effects'
import screens from '../constants/Screens'
import NavigationService from '../services/NavigationService'

const navigateToLogin = () => NavigationService.navigate(screens.Home)

export default function* bootSaga() {
  yield take(REHYDRATE)
  yield call(delay, 2000)
  // load user, check session, login to auth or stay on welcome screen
  SplashScreen.hide()
  return navigateToLogin()
}
