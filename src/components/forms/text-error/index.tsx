import React, { PureComponent } from 'react'
import { StyleSheet, Text } from 'react-native'
import { scale } from 'react-native-size-matters'
import Colors from '../../../constants/Colors'

interface Props {
  text?: string
}

class TextError extends PureComponent<Props> {

  render() {
    const {text} = this.props
    if (!text) {
      return null
    }
    return (
      <Text style={styles.errorText}>
        {text}
      </Text>
    )
  }
}

const styles = StyleSheet.create({
  errorText: {
    textAlign: 'center',
    color: Colors.error,
    fontSize: scale(18),
    lineHeight: scale(20),
    paddingVertical: scale(5),
  },
})

export default TextError
