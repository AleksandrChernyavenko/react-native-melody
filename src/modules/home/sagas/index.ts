import { all, fork } from 'redux-saga/effects'
import genres from './genres'

export default function* homeSaga() {
  yield all([
    fork(genres),
  ])
}
