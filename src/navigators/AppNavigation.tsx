import { createSwitchNavigator } from 'react-navigation'
import screens from '../constants/Screens'
import { GameScreen } from '../modules/game'
import { HomeScreen } from '../modules/home'
import { LoginScreen } from '../modules/login'
import { SignUpScreen } from '../modules/sign-up'
import { SplashScreen } from '../modules/welcome'

export default createSwitchNavigator(
  {
    [screens.Home]: HomeScreen,
    [screens.Login]: LoginScreen,
    [screens.SignUp]: SignUpScreen,
    [screens.Welcome]: SplashScreen,
    [screens.Game]: GameScreen,
  },
  {
    initialRouteName: screens.Welcome,
  }
)
