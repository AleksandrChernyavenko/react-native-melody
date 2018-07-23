import React, { PureComponent } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'

interface Props {
  text: string,
}

class Index extends PureComponent<Props> {

  render() {
    const {text} = this.props
    return (
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>
          {text}
        </Text>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  labelContainer: {
    paddingBottom: scale(5),
  },
  labelText: {
    fontSize: scale(16),
  },
})

export default Index
