import { combineReducers } from 'redux'
import HomeState from '../interfaces'
import categories from './categories'

export const homeReducer = combineReducers<HomeState>({
  categories,
})

export default homeReducer
