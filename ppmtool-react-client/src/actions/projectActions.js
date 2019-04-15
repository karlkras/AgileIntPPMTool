import axios from "axios";
import { GET_ERRORS, GET_PROJECTS } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    await axios.post("http://localhost:8081/api/project", project);
    history.push("/dashboard");

  } catch (err) {
    console.log("error caught");
    dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    })

  }
};

export const getProjects = () => async dispatch => {
    const res = await axios.get("http://localhost:8081/api/project");
    dispatch({
      type: GET_PROJECTS,
      payload: res.data
    });
};