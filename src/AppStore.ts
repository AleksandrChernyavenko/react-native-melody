import { applyMiddleware, createStore } from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './AppReducer'
import rootSaga from './AppSaga'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

const sagaMiddleware = createSagaMiddleware()
const middlewareList = [sagaMiddleware]

const store = createStore(persistedReducer, applyMiddleware(...middlewareList))
persistStore(store)
sagaMiddleware.run(rootSaga)

export default store
