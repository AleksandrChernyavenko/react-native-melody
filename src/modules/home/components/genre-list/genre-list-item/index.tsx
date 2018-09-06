import React, { Component } from 'react'
import { ImageBackground, Text, View } from 'react-native'
import { GenreItem } from '../../../interfaces/GenresState'
import styles from './styles'

interface Props {
  genre: GenreItem,
}

class GenreListItem extends Component<Props> {

  render() {
    const {genre: {name, imageSrc, playersCount}} = this.props
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: imageSrc}} style={styles.imageBackground}>
          <Text style={styles.genreName}>
            {name}({playersCount})
          </Text>
        </ImageBackground>
      </View>
    )
  }

}

export default GenreListItem
