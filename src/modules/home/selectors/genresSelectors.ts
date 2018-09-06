import AppState from '../../../AppState'
import { createSelector } from '../../../utils/selectors'
import GenresState from '../interfaces/GenresState'

const getGenreState = (state: AppState) => state.home.genres

export const getLoading = createSelector(
  getGenreState,
  (state: GenresState) => state.loading
)
export const getError = createSelector(
  getGenreState,
  (state: GenresState) => state.error
)
export const getGenres = createSelector(
  getGenreState,
  (state: GenresState) => state.items
)
