import {
  CREATE_COURSE_RQUEST,
  CREATE_COURSE_SUCCESS,
  FETCH_COURSES_RQUEST,
  FETCH_COURSES_SUCCESS,
  UPDATE_COURSE_REQUEST,
  UPDATE_COURSE_SUCCESS,
  DELETE_COURSE_REQUEST,
  DELETE_COURSE_SUCCESS,
  FETCH_COURSE_FAILURE
} from "./courseTypes";


// Create course
export const createCourseRequest = (info) => {
  return {
    type: CREATE_COURSE_RQUEST,
    payload: info,
  };
};

export const createCourseSuccess = (course) => {
  return {
    type: CREATE_COURSE_SUCCESS,
    payload: course,
  };
};

//get all course
export const fetchCoursesRequest = () => {
  return {
    type: FETCH_COURSES_RQUEST,
  };
};
export const fetchCoursesSuccess = (courses) => {
  return {
    type: FETCH_COURSES_SUCCESS,
    payload: courses,
  };
};


//update course
export const updateCourseRequest = (editCourse) => {
  return {
    type: UPDATE_COURSE_REQUEST,
    payload: editCourse,
  };
};
export const updateCourseSuccess = (updatedCourse) => {
  return {
    type: UPDATE_COURSE_SUCCESS,
    payload: updatedCourse,
  };
};

//delete course
export const deleteCourseRequest = (info) => {
  return {
    type: DELETE_COURSE_REQUEST,
    payload: info,
  };
};
export const deleteCourseSuccess = (deleCourse) => {
  return {
    type: DELETE_COURSE_SUCCESS,
    payload: deleCourse,
  };
};

export const fetchCourseFailure = (error) => {
  return {
    type: FETCH_COURSE_FAILURE,
    payload: error,
  };
};
