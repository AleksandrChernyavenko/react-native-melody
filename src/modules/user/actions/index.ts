import { Action } from 'redux'
import UserState from '../interfaces/UserState'

export enum UserActionTypes {
  FETCH_USER_REQUEST = 'FETCH_USER_REQUEST',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_FAILURE = 'FETCH_USER_FAILURE',
}

export interface FetchUserRequestAction extends Action {
  type: UserActionTypes.FETCH_USER_REQUEST
}

export interface FetchUserSuccessAction extends Action {
  type: UserActionTypes.FETCH_USER_SUCCESS
  payload: UserState
}

export interface FetchUserFailureAction extends Action {
  type: UserActionTypes.FETCH_USER_FAILURE
  payload: Error
}

export type UserAction = FetchUserRequestAction
  | FetchUserSuccessAction
  | FetchUserFailureAction

export const fetchUserRequest = (): FetchUserRequestAction => ({
  type: UserActionTypes.FETCH_USER_REQUEST,
})

export const fetchUserSuccess = (payload: UserState): FetchUserSuccessAction => ({
  type: UserActionTypes.FETCH_USER_SUCCESS,
  payload,
})

export const fetchUserFailure = (payload: Error): FetchUserFailureAction => ({
  type: UserActionTypes.FETCH_USER_FAILURE,
  payload,
})
