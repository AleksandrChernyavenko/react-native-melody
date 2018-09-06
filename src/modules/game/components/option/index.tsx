import React, { PureComponent } from 'react'
import { Button } from 'react-native'

interface Props {
  title: string,
  onPress: () => void,
}

class Option extends PureComponent<Props> {

  render() {
    const {onPress, title} = this.props
    return (
      <Button onPress={onPress} title={title}/>
    )
  }
}

export default Option
