import React, { Component } from 'react'
import { Provider } from 'react-redux'
import AppStore from './AppStore'
import AppNavigation from './navigators/AppNavigation'
import NavigationService from './services/NavigationService'

export default class AppNavigator extends Component {

  captureRef = (navigatorRef: any) => {
    NavigationService.setTopLevelNavigator(navigatorRef)
  }

  render() {
    x = od;
    return (
      <Provider store={AppStore}>
        <AppNavigation ref={this.captureRef}/>
      </Provider>
    )
  }
}
