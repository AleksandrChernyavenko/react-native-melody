import React, { Component } from 'react'
import { View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import { GenreInfo, Players, Playground } from './containers'

interface NavigationProps {
  genreId: string,
}

interface Props {
  navigation: NavigationScreenProp<NavigationProps>,
}

class GameScreen extends Component<Props> {

  render() {
    const genreId = this.props.navigation.getParam('genreId')
    return (
      <View>
        <GenreInfo id={genreId}/>
        <Players id={genreId}/>
        <Playground id={genreId}/>
      </View>
    )
  }
}

export default GameScreen
