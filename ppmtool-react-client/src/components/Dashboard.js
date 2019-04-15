import React, {Component, Fragment} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import ProjectItem from "./Project/ProjectItem";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateProjectButton from "./Project/CreateProjectButton";
import { getProjects } from "../actions/projectActions";

class Dashboard extends Component {

  componentDidMount() {
    this.props.getProjects();
  }

  render() {
    console.log(this.props.project.projects);
    return (
      <Fragment>
        <div className="projects">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="display-4 text-center">Projects</h1>
                <br/>
                <CreateProjectButton/>
                <br/>
                <hr/>
                <ProjectItem/>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

Dashboard.propTypes = {
  getProjects: PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    project: state.project
  }
};

export default connect(
  mapStateToProps,
  { getProjects }
)(Dashboard);
