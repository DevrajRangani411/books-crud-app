import { all } from "redux-saga/effects";

import courseSaga from "./courseSaga"

export default function* rootSaga(getState) {
    yield all([
        
        courseSaga(),
    ]);
}



