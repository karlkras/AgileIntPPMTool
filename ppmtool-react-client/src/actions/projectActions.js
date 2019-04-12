import axios from "axios";
import { GET_ERRORS } from "./types";

export const createProject = (project, history) => async dispatch => {
  try {
    console.log("Here in createProject and Project is", project);
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