import * as React from 'react'
import { SplashScreen } from 'expo'
import AppNavigator from './src/AppNavigator'

export default class App extends React.Component<{}> {

  componentDidMount() {
    SplashScreen.preventAutoHide()
  }

  render() {
    return (
      <AppNavigator/>
    )
  }
}
