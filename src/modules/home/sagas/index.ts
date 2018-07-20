import { all, fork } from 'redux-saga/effects'
import categories from './categories'

export default function* stockDetailSaga() {
  yield all([
    fork(categories),
  ])
}
