import React, { Component, Fragment } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'
import { Option } from '../../components'

interface Props {
  id: string,
}

class PlaygroundContainer extends Component<Props> {

  onOptionPress = () => {
    // done
  }

  renderOptions() {
    const options = [
      {
        id: 'x1',
        value: 'x1',
      },
      {
        id: 'x2',
        value: 'x2',
      },
      {
        id: 'x3',
        value: 'x3',
      },
      {
        id: 'x4',
        value: 'x4',
      },
    ]

    return (
      <Fragment>
        {options.map((option) => (<Option key={option.id} title={option.value} onPress={this.onOptionPress}/>))}
      </Fragment>
    )
  }

  render() {
    return (
      <View>
        {this.renderOptions()}
        <ActivityIndicator/>
      </View>
    )
  }
}

export default PlaygroundContainer
