import { CategoriesAction, CategoriesActionTypes } from '../actions/categories'
import CategoriesState from '../interfaces/CategoriesState'

const initState = {
  items: [],
  loading: true,
  error: '',
}

type PortfolioState = Readonly<CategoriesState>

const categories = (state: PortfolioState = initState, action: CategoriesAction): PortfolioState => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      }
    case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message || 'Loading error',
      }
    default:
      return state
  }
}

export default categories
