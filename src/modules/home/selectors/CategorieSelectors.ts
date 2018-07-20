import CategoriesState from '../interfaces/CategoriesState'

export const getLoading = (state: CategoriesState) => state.loading
export const getError = (state: CategoriesState) => state.error
export const getCategories = (state: CategoriesState) => state.items
