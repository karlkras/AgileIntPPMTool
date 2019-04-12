import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {createProject} from "../../actions/projectActions";

class AddProject extends Component {
  static generateProject(state) {
    return JSON.stringify({...state});
  }

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

  onSubmit = (e) => {
    e.preventDefault();
    this.props.createProject(
      {...this.state},
      this.props.history
    );
  };

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  };


  render() {
    const {errors} = this.props;
    if(errors) {
      console.log("Here are some errors: ", errors);
    }
    return (
      <div>
        <div className="project">
          <div className="container">
            <div className="row">
              <div className="col-md-8 m-auto">
                <h5 className="display-4 text-center">
                  Create / Edit Project form
                </h5>
                <hr/>
                <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg "
                      placeholder="Project Name"
                      name="projectName"
                      value={this.state.projectName}
                      onChange={this.onChange}
                      // required
                    />
                    {errors.projectName ?
                      (<div>{errors.projectName}</div>)
                      :
                      null
                    }
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      placeholder="Unique Project ID"
                      name="projectIdentifier"
                      maxLength='5'
                      value={this.state.projectIdentifier}
                      onChange={this.onChange}
                      // required
                    />
                    {errors.projectIdentifier ?
                      (<div>{errors.projectIdentifier}</div>)
                      :
                      null
                    }
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      placeholder="Project Description"
                      name="description"
                      value={this.state.description}
                      onChange={this.onChange}
                    />
                    {errors.description ?
                      (<div>{errors.description}</div>)
                      :
                      null
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

AddProject.propTypes = {
  createProject: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    errors: state.errors
  };
};
export default connect(
  mapStateToProps,
  { createProject }
  )(AddProject);
