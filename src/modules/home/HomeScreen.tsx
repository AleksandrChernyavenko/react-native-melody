import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import GenresListContainer from './containers/genres-list'
import ProfileContainer from './containers/profile'

interface Props {
  navigation: NavigationScreenProp<any>,
}

interface State {
  name: string,
}

class HomeScreen extends Component<Props, State> {

  renderProfile() {
    return (
      <ProfileContainer/>
    )
  }

  renderGenres() {
    return (
      <GenresListContainer/>
    )
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Home Screen</Text>
        {this.renderProfile()}
        {this.renderGenres()}
      </View>
    )
  }
}

export default HomeScreen
