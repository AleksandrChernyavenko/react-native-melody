import { AsyncStorage } from 'react-native'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { applyMiddleware, compose, createStore } from 'redux'
import { autoRehydrate, persistStore } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './appReducer'
import rootSaga from './appSaga'

const sagaMiddleware = createSagaMiddleware()
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  (state: any) => state.nav
)
const middlewares = [navigationMiddleware, sagaMiddleware]

// TODO: find way enable this only when remove debug is true
// for now just uncomment this during development
// if (__DEV__) {
//   middlewares.push(createLogger())
// }

const store = createStore(rootReducer,
  compose(
    autoRehydrate(),
    applyMiddleware(...middlewares)
  )
)

sagaMiddleware.run(rootSaga)
persistStore(store, {
  storage: AsyncStorage,
  whitelist: [
    'user',
    'auth',
    // 'nav',
  ],
})

export default store
