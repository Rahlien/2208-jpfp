import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCampuses = createAsyncThunk('campuses/getCampuses', () => {
    return axios.get('/api/campuses')
        .then((res) => {
            return res.data
        })
})

const campusSlice = createSlice({
    name: 'campuses',
    initialState: {
        loading: false,
        campuses: [],
        error: ''
    },
    extraReducers: {
        [getCampuses.pending]: (state) => {
            state.loading = true
        },
        [getCampuses.fulfilled]: (state, action) => {
            state.loading = false
            state.campuses = action.payload
        },
        [getCampuses.rejected]: (state) => {
            state.loading = false
        }    
    }
})

export default campusSlice.reducer