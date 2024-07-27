import { combineReducers } from "redux";
import taskReducer from "./task/reducer";


const rootReducers = combineReducers( {taskReducer} )

export default rootReducers;