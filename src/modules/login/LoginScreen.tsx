import React, { Component } from 'react'
import { Button, Text, View, TextInput, StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import screens from '../../constants/screens'

class LoginScreen extends Component<NavigationScreenProps<any>> {

  handleLoginPress = () => {
    this.props.navigation.navigate(screens.Home)
  }

  handleSignUpPress = () => {
    this.props.navigation.navigate(screens.SignUp)
  }

  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>LoginScreen</Text>
        <TextInput placeholder='Username' style={styles.textInput}/>
        <Button title='Login' onPress={this.handleLoginPress}/>
        <Button title='Sign Up' onPress={this.handleSignUpPress}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    height: 40,
    width: 100,
    borderColor: 'gray',
    borderWidth: 1,
  },
})

export default LoginScreen
