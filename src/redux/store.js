import rootReducers from "./root-reducers";
import { createStore } from "redux";

const store = createStore(rootReducers);

export default store;
