import { all, call, fork, put, takeLatest, take } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'

import {
  fetchGenresFailure,
  fetchGenresSuccess,
  GenresActionTypes,
} from '../actions/genres'
import { getGenres, subscribe, unsubscribe } from '../api/genres'
import { GenreItem } from '../interfaces/GenresState'

export function* fetchGenres() {
  const {error, data} = yield call(getGenres)
  if (!error) {
    yield put(fetchGenresSuccess(data))
  } else {
    yield put(fetchGenresFailure(error))
  }
}

// TODO: handle ws connection properly
function wsGenres() {
  return eventChannel(emitter => {
      subscribe((data: GenreItem[]) => {
        emitter(data)
      })
      return () => {
        unsubscribe()
        emitter(END)
      }
    }
  )
}

export function* subscribeToGenres() {
  const chan = yield call(wsGenres)
  try {
    while (true) {
      // take(END) will cause the saga to terminate by jumping to the finally block
      const data: GenreItem[] = yield take(chan)
      yield put(fetchGenresSuccess(data))
    }
  } finally {
    console.log('countdown terminated')
  }
}

export function* unsubscribeToGenres() {
  return unsubscribe()
}

export function* watchFetchGenres() {
  yield takeLatest(GenresActionTypes.FETCH_GENRES, fetchGenres)
}

export function* watchSubscribeToGenres() {
  yield takeLatest(GenresActionTypes.SUBSCRIBE_TO_GENRES, subscribeToGenres)
}

export function* watchUnsubscribeToGenres() {
  yield takeLatest(GenresActionTypes.UNSUBSCRIBE_TO_GENRES, unsubscribeToGenres)
}

export default function* categoriesSaga() {
  yield all([
    fork(watchFetchGenres),
    fork(watchSubscribeToGenres),
    fork(watchUnsubscribeToGenres),
  ])
}
