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

const initialState = {
    loading:false,
    course:[],
    error:''
}

const courseReducer = (state = initialState , action) =>{

    switch(action.type){
      
        // get all course
        case FETCH_COURSES_RQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_COURSES_SUCCESS:
            return{
                ...state,
                loading:false,
                course:action.payload,
                error:''
            }
        
        // create course
        case CREATE_COURSE_RQUEST:
            return{
                ...state,
                loading:true,
            }
        case CREATE_COURSE_SUCCESS:
            return{
                ...state,
                loading:false,
                course:action.payload,
                error:''
            }

        // update course
        case UPDATE_COURSE_REQUEST:
            return{
                ...state,
                loading:true,
                // course:action.payload
            }
        case UPDATE_COURSE_SUCCESS:
            return{
                ...state,
                loading:false,
                course:action.payload,
                error:''
            }

        // delete course
        case DELETE_COURSE_REQUEST:
            return{
                ...state,
                loading:true,
               
            }
        case DELETE_COURSE_SUCCESS:
            return{
                ...state,
                loading:false,
               // course:action.payload,
                error:''
            }
            
        case FETCH_COURSE_FAILURE:
            return{
                ...state,
                loading:true,
                course:[],
                error: action.payload
            }

        default: return state
    }
}

export default courseReducer;