import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

class Dashboard extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Fragment>
        <h1>Welcome To the Dashboard</h1>
      </Fragment>
    )
  }
}

export default Dashboard;
