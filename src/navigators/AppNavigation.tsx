import { createStackNavigator } from 'react-navigation'
import screens from '../constants/screens'
import { HomeScreen } from '../modules/home'
import { LoginScreen } from '../modules/login'
import { SignUpScreen } from '../modules/sign-up'
import { SplashScreen } from '../modules/splash'

export default createStackNavigator(
  {
    [screens.Home]: HomeScreen,
    [screens.Login]: LoginScreen,
    [screens.SignUp]: SignUpScreen,
    [screens.Splash]: SplashScreen,
  },
  {
    initialRouteName: screens.Login,
  }
)
