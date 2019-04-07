import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import ProjectItem from './Project/ProjectItem';
import "bootstrap/dist/css/bootstrap.min.css";

class Dashboard extends Component {
  static propTypes = {
    prop: PropTypes
  }

  render() {
    return (
      <Fragment>
        <h1 className="alert alert-warning">Welcome To the Dashboard</h1>
        <ProjectItem />
      </Fragment>
    )
  }
}

export default Dashboard;
