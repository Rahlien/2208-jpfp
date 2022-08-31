import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getStudents = createAsyncThunk('students/getStudents', () => {
    return axios.get('/api/students')
        .then((res) => {
            return res.data
        })
})

const studentSlice = createSlice({
    name: 'students',
    initialState: {
        loading: false,
        students: [],
        error: ''
    },
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
        }    
    }
})

export default studentSlice.reducer