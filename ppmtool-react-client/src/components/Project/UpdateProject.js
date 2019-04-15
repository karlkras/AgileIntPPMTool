import React, {Component} from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import {connect} from "react-redux";

class UpdateProject extends Component {

  constructor(props) {
    super(props);


    this.state = {
      projectName: '',
      projectIdentifier: '',
      description: '',
      start_date: '',
      end_date: ''
    };
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };


  render() {
    const {errors} = this.props;
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Edit Project form
                </h5>
                <hr/>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectName
                      })}
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                      // required
                    />
                    {errors.projectName &&
                    (<div className={"invalid-feedback"}>{errors.projectName}</div>)
                    }
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.projectIdentifier
                      })}
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      maxLength='5'
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                      disabled
                    />
                    {errors.projectName &&
                    (<div className={"invalid-feedback"}>{errors.projectIdentifier}</div>)
                    }
                  </div>
                  <div className="form-group">
                    <textarea
                      className={classnames("form-control form-control-lg", {
                        "is-invalid": errors.description
                      })}
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    {errors.projectName &&
                    (<div className={"invalid-feedback"}>{errors.description}</div>)
                    }
                  </div>
                  <h6>Start Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="start_date"
                      value={this.state.start_date}
                      onChange={this.onChange}
                    />
                  </div>
                  <h6>Estimated End Date</h6>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control form-control-lg"
                      name="end_date"
                      value={this.state.end_date}
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary btn-block mt-4"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
UpdateProject.propTypes = {
  // createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  null
)(UpdateProject);