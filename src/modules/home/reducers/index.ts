import { combineReducers } from 'redux'
import HomeState from '../interfaces'
import genres from './genres'

export const homeReducer = combineReducers<HomeState>({
  genres,
})

export default homeReducer
