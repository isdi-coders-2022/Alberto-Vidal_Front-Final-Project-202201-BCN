import { combineReducers } from "redux";
import projectsReducer from "./projects/projectsReducer";

const rootReducer = combineReducers({ projects: projectsReducer });

export default rootReducer;
