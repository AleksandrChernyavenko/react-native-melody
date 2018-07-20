import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'
import CategoryListContainer from './containers/category-list'
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

  renderCategories() {
    return (
      <CategoryListContainer/>
    )
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        {this.renderProfile()}
        {this.renderCategories()}
      </View>
    )
  }
}

export default HomeScreen
