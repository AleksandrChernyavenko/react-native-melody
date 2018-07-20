import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface Props {
  name: string,
}

class Profile extends Component<Props> {

  render() {
    const {name} = this.props
    return (
      <View style={styles.container}>
        <Text>Hello {name}!</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Profile
