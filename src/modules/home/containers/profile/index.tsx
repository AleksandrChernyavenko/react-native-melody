import React, { Component } from 'react'
import { connect } from 'react-redux'
import AppState from '../../../../AppState'
import Profile from '../../components/profile/index'

interface Props {
  name: string,
}

class ProfileContainer extends Component<Props> {

  render() {
    const {name} = this.props
    return (
      <Profile name={name}/>
    )
  }

}

const mapStateToProps = ({user}: AppState) => ({
  name: user.username,
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer)
