import React, { Component } from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { GenreItem } from '../../interfaces/GenresState'
import GenreListItem from './genre-list-item'

interface Props {
  loading: boolean,
  error: string,
  items: GenreItem[],
}

class GenreList extends Component<Props> {

  renderItem = ({item}: { item: GenreItem }) => {
    return (
      <GenreListItem genre={item}/>
    )
  }

  keyExtractor = (item: GenreItem) => item.id

  renderLoading() {
    return (
      <ActivityIndicator/>
    )
  }

  renderError() {
    const {error} = this.props
    return (
      <Text>{error}</Text>
    )
  }

  render() {
    const {loading, error, items} = this.props

    if (error) {
      return this.renderError()
    } else if (loading) {
      return this.renderLoading()
    }
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={items}
        renderItem={this.renderItem}
      />
    )
  }

}

export default GenreList
