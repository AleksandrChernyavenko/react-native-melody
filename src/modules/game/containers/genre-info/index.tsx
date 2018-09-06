import React, { Component } from 'react'
import { Text, View } from 'react-native'

interface Props {
  id: string,
}

class GenreInfoContainer extends Component<Props> {

  render() {
    const {id} = this.props
    return (
      <View>
        <Text>Current genre:</Text>
        <Text>{id}</Text>
      </View>
    )
  }
}

export default GenreInfoContainer
