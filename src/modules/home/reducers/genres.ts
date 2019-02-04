import { GenresAction, GenresActionTypes } from '../actions/genres'
import GenresState from '../interfaces/GenresState'

const initState = {
  items: [],
  loading: true,
  error: '',
}

type PortfolioState = Readonly<GenresState>

const genres = (state: PortfolioState = initState, action: GenresAction): PortfolioState => {
  switch (action.type) {
    case GenresActionTypes.FETCH_GENRES:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case GenresActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      }
    case GenresActionTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message || 'Loading error',
      }
    case GenresActionTypes.FETCH_GENRES:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case GenresActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      }
    case GenresActionTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message || 'Loading error',
      }
    case GenresActionTypes.FETCH_GENRES:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case GenresActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      }
    case GenresActionTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message || 'Loading error',
      }
    case GenresActionTypes.FETCH_GENRES:
      return {
        ...state,
        loading: true,
        error: '',
      }
    case GenresActionTypes.FETCH_GENRES_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
        error: '',
      }
    case GenresActionTypes.FETCH_GENRES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.message || 'Loading error',
      }
    default:
      return state
  }
}

export default genres
