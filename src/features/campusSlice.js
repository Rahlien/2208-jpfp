import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCampuses = createAsyncThunk('campuses/getCampuses', () => {
    return axios.get('/api/campuses')
        .then((res) => {
            return res.data
        })
})


//testing createAsyncThunk
export const getCampus = createAsyncThunk('campuses/getCampus', (id) => {
    return axios.get(`/api/campuses/${id}`)
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

export const updateCampus = (campus, id) => {
    return async (dispatch) => {
      const { data: updatedCampus } = await axios.put(`/api/campuses/${id}`, campus)
      dispatch(updateCampuses(updatedCampus))
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
        },
        updateCampuses: (state, action) => {
            state.campuses.map(campus => campus.id === action.payload.id ? campus: action.payload)
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

export const { addCampus, removeCampus, updateCampuses } = campusSlice.actions
export default campusSlice.reducer