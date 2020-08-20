import { takeEvery, call, put } from "redux-saga/effects";
import { fetchCourse, createCourse, deleteCourse,updateCourse } from "../API/fetchCourse";
import * as actions from "../Redux/Courses/courseTypes";
import * as courseActions from "../Redux/Courses/courseActions";



function* getPost() {
    
  try {
    const posts = yield call(fetchCourse);
    yield put(courseActions.fetchCoursesSuccess(posts));
  } catch (error) {
    yield put(courseActions.fetchCourseFailure(error));
  }
}

function* addCourse(data) {
 console.log("Data",data.payload)
  try {
    const posts = yield call(createCourse(data.payload));
    yield put(courseActions.createCourseSuccess(posts));
  } catch (error) {
    yield put(courseActions.fetchCourseFailure(error));
  }
}

function* removeCourse(data) {
 console.log("Data",data.payload)
  try {
    yield call(deleteCourse(data.payload));
    yield put(courseActions.deleteCourseSuccess());
  } catch (error) {
    yield put(courseActions.fetchCourseFailure(error));
  }
}

function* editCourse(data) {
  
     try {
       const posts = yield call(updateCourse(data.payload));
       yield put(courseActions.updateCourseSuccess(posts));
     } catch (error) {
       yield put(courseActions.fetchCourseFailure(error));
     }
   }
   

export default function* rootsaga() {
  yield takeEvery(actions.FETCH_COURSES_RQUEST, getPost);
  yield takeEvery(actions.CREATE_COURSE_RQUEST, addCourse);
  yield takeEvery(actions.DELETE_COURSE_REQUEST, removeCourse);
  yield takeEvery(actions.UPDATE_COURSE_REQUEST, editCourse);
}
