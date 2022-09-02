import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getStudents = createAsyncThunk('students/getStudents', () => {
    return axios.get('/api/students')
        .then((res) => {
            return res.data
        })
})

export const getStudent = createAsyncThunk('students/getStudent', (params) => {
    return axios.get(`/api/students/${params.id}`)
        .then((res) => {
            return res.data
        })
})


const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        loading: false,
        students: [],
        student: {},
        error: ''
    },
    reducers: {},
    extraReducers: {
        [getStudents.pending]: (state) => {
            state.loading = true
        },
        [getStudents.fulfilled]: (state, action) => {
            state.loading = false
            state.students = action.payload
        },
        [getStudents.rejected]: (state) => {
            state.loading = false
        },
        [getStudent.pending]: (state) => {
            state.loading = true
        },
        [getStudent.fulfilled]: (state, action) => {
            state.loading = false
            state.student = action.payload
        },
        [getStudent.rejected]: (state) => {
            state.loading = false
        }
    }    
})

export default studentsSlice.reducer