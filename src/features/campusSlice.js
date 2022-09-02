import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCampuses = createAsyncThunk('campuses/getCampuses', () => {
    return axios.get('/api/campuses')
        .then((res) => {
            return res.data
        })
})


//testing createAsyncThunk
export const getCampus = createAsyncThunk('campuses/getCampus', (params) => {
    return axios.get(`/api/campuses/${params.id}`)
        .then((res) => {
            return res.data
        })
})

//using regular async to add campus to reducers
export const addNewCampus = (campus) => {
    return async (dispatch) => {
      const { data: newCampus } = await axios.post('/api/campuses', campus)
      dispatch(addCampus(newCampus))
    }
  }

export const deleteCampus = (id) => {
    return async (dispatch) => {
        await axios.delete(`/api/campuses/${id}`)
        dispatch(removeCampus(id))
    }
}

const campusSlice = createSlice({
    name: 'campuses',
    initialState: {
        loading: false,
        campuses: [],
        campus: {},
        error: ''
    },
    reducers: {
        addCampus: (state, action) => {
            const newCampus = action.payload
            state.campuses.push(newCampus)
        },
        removeCampus: (state, action) => {
            const campusId = action.payload
            state.campuses = state.campuses.filter((campus) => campus.id !== Number(campusId))
            return state
        }
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
        },
        [getCampus.pending]: (state) => {
            state.loading = true
        },
        [getCampus.fulfilled]: (state, action) => {
            state.loading = false
            state.campus = action.payload
        },
        [getCampus.rejected]: (state) => {
            state.loading = false
        }    
    }
})

export const { addCampus, removeCampus } = campusSlice.actions
export default campusSlice.reducer