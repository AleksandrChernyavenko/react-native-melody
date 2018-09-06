import { Action } from 'redux'
import { GenreItem } from '../interfaces/GenresState'

export enum GenresActionTypes {
  FETCH_GENRES = 'FETCH_GENRES',
  FETCH_GENRES_SUCCESS = 'FETCH_GENRES_SUCCESS',
  FETCH_GENRES_FAILURE = 'FETCH_GENRES_FAILURE',
  SUBSCRIBE_TO_GENRES = 'SUBSCRIBE_TO_GENRES',
  UNSUBSCRIBE_TO_GENRES = 'UNSUBSCRIBE_TO_GENRES',
}

export interface FetchGenresAction extends Action {
  type: GenresActionTypes.FETCH_GENRES
}

export interface FetchGenresSuccessAction extends Action {
  type: GenresActionTypes.FETCH_GENRES_SUCCESS
  payload: GenreItem[]
}

export interface FetchGenresFailureAction extends Action {
  type: GenresActionTypes.FETCH_GENRES_FAILURE
  payload: Error
}

export interface SubscribeToGenresAction extends Action {
  type: GenresActionTypes.SUBSCRIBE_TO_GENRES
}

export interface UnsubscribeToGenresAction extends Action {
  type: GenresActionTypes.UNSUBSCRIBE_TO_GENRES
}

export type GenresAction = FetchGenresAction
  | FetchGenresSuccessAction
  | FetchGenresFailureAction

export const fetchGenres = (): FetchGenresAction => ({
  type: GenresActionTypes.FETCH_GENRES,
})

export const fetchGenresSuccess = (payload: GenreItem[]): GenresAction => ({
  type: GenresActionTypes.FETCH_GENRES_SUCCESS,
  payload,
})

export const fetchGenresFailure = (payload: Error): FetchGenresFailureAction => ({
  type: GenresActionTypes.FETCH_GENRES_FAILURE,
  payload,
})

export const subscribeToGenres = (): SubscribeToGenresAction => ({
  type: GenresActionTypes.SUBSCRIBE_TO_GENRES,
})

export const unsubscribeToGenres = (): UnsubscribeToGenresAction => ({
  type: GenresActionTypes.UNSUBSCRIBE_TO_GENRES,
})