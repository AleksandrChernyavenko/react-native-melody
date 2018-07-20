import { all, call, fork, put, takeLatest } from 'redux-saga/effects'

import {
  CategoriesActionTypes,
  fetchCategoriesFailure,
  fetchCategoriesSuccess,
} from '../actions/categories'
import getCategories from '../api/GetCategories'

export function* fetchCategories() {
  console.log('fetchCategories - RUN')
  const {error, data} = yield call(getCategories)
  console.log('fetchCategories', {error, data})
  if (!error) {
    yield put(fetchCategoriesSuccess(data))
  } else {
    yield put(fetchCategoriesFailure(error))
  }
}

export function* watchFetchCategories() {
  yield takeLatest(CategoriesActionTypes.FETCH_CATEGORIES, fetchCategories)
}

export default function* categoriesSaga() {
  console.log('categoriesSaga START')
  yield all([
    fork(watchFetchCategories),
  ])
}
