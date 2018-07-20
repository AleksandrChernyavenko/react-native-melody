import { Action } from 'redux'
import { CategoryItem } from '../interfaces/CategoriesState'

export enum CategoriesActionTypes {
  FETCH_CATEGORIES = 'FETCH_CATEGORIES',
  FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS',
  FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE',
}

export interface FetchCategoriesAction extends Action {
  type: CategoriesActionTypes.FETCH_CATEGORIES
}

export interface FetchCategoriesSuccessAction extends Action {
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS
  payload: CategoryItem[]
}

export interface FetchCategoriesFailureAction extends Action {
  type: CategoriesActionTypes.FETCH_CATEGORIES_FAILURE
  payload: Error
}

export type CategoriesAction = FetchCategoriesAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesFailureAction

export const fetchCategories = (): FetchCategoriesAction => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES,
})

export const fetchCategoriesSuccess = (payload: CategoryItem[]): CategoriesAction => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload,
})

export const fetchCategoriesFailure = (payload: Error): FetchCategoriesFailureAction => ({
  type: CategoriesActionTypes.FETCH_CATEGORIES_FAILURE,
  payload,
})
