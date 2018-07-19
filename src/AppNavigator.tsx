import React, { Component } from 'react'
import AppNavigation from './navigators/AppNavigation'
import NavigationService from './services/NavigationService'

export default class AppNavigator extends Component {

  captureRef = (navigatorRef: any) => {
    NavigationService.setTopLevelNavigator(navigatorRef)
  }

  render() {
    return (
      <AppNavigation ref={this.captureRef}/>
    )
  }
}
