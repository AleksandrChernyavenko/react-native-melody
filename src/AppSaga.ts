import { all, fork } from 'redux-saga/effects'
import { homeSaga } from './modules/home'
import { loginSaga } from './modules/login'
import { signUpSaga } from './modules/sign-up'
import bootSaga from './sagas/bootSaga'

function* appSaga() {
  yield all([
    fork(bootSaga),
    fork(homeSaga),
    fork(loginSaga),
    fork(signUpSaga),
  ])
}

export default appSaga
