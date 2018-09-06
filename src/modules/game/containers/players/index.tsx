import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'

interface Props {
  id: string,
}

class GenreInfoContainer extends Component<Props> {

  render() {
    return (
      <ActivityIndicator/>
    )
  }
}

export default GenreInfoContainer
