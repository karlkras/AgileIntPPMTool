import React, {Component, Fragment} from "react";
import PropTypes from "prop-types";
import ProjectItem from "./Project/ProjectItem";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateProjectButton from "./Project/CreateProjectButton";

class Dashboard extends Component {
    static propTypes = {
        prop: PropTypes
    };

    render() {
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

export default Dashboard;
