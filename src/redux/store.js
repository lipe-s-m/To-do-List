import rootReducers from "./root-reducers";
import { createStore, applyMiddleware } from "redux";

const store = createStore(rootReducers);

export default store;
