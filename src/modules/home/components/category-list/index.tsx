import React, { Component } from 'react'
import { ActivityIndicator, FlatList, Text } from 'react-native'
import { CategoryItem } from '../../interfaces/CategoriesState'

interface Props {
  loading: boolean,
  error: string,
  items: CategoryItem[],
}

class CategoryList extends Component<Props> {

  renderItem = ({item}: { item: CategoryItem }) => {
    return (
      <Text>{item.name}</Text>
    )
  }

  keyExtractor = (item: CategoryItem) => item.id

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

export default CategoryList
