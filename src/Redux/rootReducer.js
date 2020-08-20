import { combineReducers } from "redux";

import courseReducer from "./Courses/courseReducer"

const rootReducer = combineReducers({
    course:courseReducer,
})

export default rootReducer;