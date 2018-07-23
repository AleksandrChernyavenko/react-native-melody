import React, { PureComponent } from 'react'
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import Colors from '../../../constants/Colors'
import Label from '../label'
import TextError from '../text-error'

interface Props extends TextInputProps {
  label: string,
  touched: boolean,
  error: string,
}

class FormTextInput extends PureComponent<Props> {

  renderLabel() {
    const {label} = this.props
    return (
      <Label text={label}/>
    )
  }

  renderInput() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          underlineColorAndroid='transparent'
          autoCorrect={false}
          autoCapitalize='none'
          {...this.props}
        />
      </View>
    )
  }

  renderError() {
    const {touched, error} = this.props
    if (!touched || !error) {
      return null
    }
    return (
      <TextError text={error}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderLabel()}
        {this.renderInput()}
        {this.renderError()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    marginBottom: scale(10),
    backgroundColor: Colors.white,
  },
  inputContainer: {
    paddingLeft: scale(8),
    paddingVertical: scale(8),
    borderRadius: scale(5),
    borderColor: Colors.grayBorder,
    borderWidth: 1,
  },
  labelContainer: {
    paddingBottom: scale(5),
  },
  labelText: {
    fontSize: scale(16),
  },
})

export default FormTextInput
