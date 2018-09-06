import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppState from '../../../../AppState'
import { fetchGenres, subscribeToGenres, unsubscribeToGenres } from '../../actions/genres'
import GenreList from '../../components/genre-list'
import { GenreItem } from '../../interfaces/GenresState'
import * as genresSelectors from '../../selectors/genresSelectors'

interface Props {
  loading: boolean,
  error: string,
  items: GenreItem[],
  // actions
  fetchGenres: () => any,
  subscribeToGenres: () => any,
  unsubscribeToGenres: () => any,
}

class GenresListContainer extends Component<Props> {

  componentDidMount() {
    this.props.fetchGenres()
    this.props.subscribeToGenres()
  }

  componentWillUnmount() {
    this.props.unsubscribeToGenres()
  }

  render() {
    const {loading, error, items} = this.props
    return (
      <GenreList
        error={error}
        items={items}
        loading={loading}
      />
    )
  }

}

const mapStateToProps = (state: AppState) => ({
  error: genresSelectors.getError(state),
  loading: genresSelectors.getLoading(state),
  items: genresSelectors.getGenres(state),
})

const mapDispatchToProps = {
  fetchGenres,
  subscribeToGenres,
  unsubscribeToGenres,
}

export default connect(mapStateToProps, mapDispatchToProps)(GenresListContainer)
