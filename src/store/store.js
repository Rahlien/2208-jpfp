// import {createStore, applyMiddleware, combineReducers} from "redux";
// import thunk from "redux-thunk";
import { configureStore } from '@reduxjs/toolkit'
import '../features/campusSlice'
import '../features/studentsSlice'
import studentsReducer from '../features/studentsSlice'
import campusReducer from '../features/campusSlice'
import logger from 'redux-logger'

const store = configureStore({
    reducer: {
        students: studentsReducer,
        campuses: campusReducer,
        middleware: [logger]
    }
}) 

export default store