import React, { Component } from 'react'
import { ImageBackground, Text, TouchableWithoutFeedback } from 'react-native'
import { NavigationScreenProp, withNavigation } from 'react-navigation'
import Screens from '../../../../../constants/Screens'
import { GenreItem } from '../../../interfaces/GenresState'
import styles from './styles'

interface Props {
  genre: GenreItem,
  navigation: NavigationScreenProp<any>
}

class GenreListItem extends Component<Props> {

  onPress = () => {
    const {genre: {id}, navigation} = this.props
    navigation.navigate(Screens.Game, {genreId: id})
  }

  render() {
    const {genre: {name, imageSrc, playersCount}} = this.props
    return (
      <TouchableWithoutFeedback style={styles.container} onPress={this.onPress}>
        <ImageBackground source={{uri: imageSrc}} style={styles.imageBackground}>
          <Text style={styles.genreName}>
            {name}({playersCount})
          </Text>
        </ImageBackground>
      </TouchableWithoutFeedback>
    )
  }

}

export default withNavigation(GenreListItem)
