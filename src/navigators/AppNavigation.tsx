import { createSwitchNavigator } from 'react-navigation'
import screens from '../constants/Screens'
import { HomeScreen } from '../modules/home'
import { LoginScreen } from '../modules/login'
import { SignUpScreen } from '../modules/sign-up'
import { SplashScreen } from '../modules/splash'

export default createSwitchNavigator(
  {
    [screens.Home]: HomeScreen,
    [screens.Login]: LoginScreen,
    [screens.SignUp]: SignUpScreen,
    [screens.Splash]: SplashScreen,
  },
  {
    initialRouteName: screens.Splash,
  }
)
