import React, { Component } from 'react'
import { Button, Text, View, TextInput, StyleSheet } from 'react-native'
import { NavigationScreenProps } from 'react-navigation'
import screens from '../../constants/Screens'

class SignUpScreen extends Component<NavigationScreenProps<any>> {

  handleLoginPress = () => {
    this.props.navigation.navigate(screens.Home)
  }

  handleSignUpPress = () => {
    this.props.navigation.navigate(screens.SignUp)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SignUp Screen</Text>
        <TextInput placeholder='Username' style={styles.textInput}/>
        <Button title='Sign Up' onPress={this.handleSignUpPress}/>
        <Button title='Login' onPress={this.handleLoginPress}/>
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

export default SignUpScreen
