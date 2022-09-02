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

export const deleteStudent = (id) => {
    return async (dispatch) => {
        await axios.delete(`/api/students/${id}`)
        dispatch(removeStudent(id))
    }
}

export const addNewStudent = (student) => {
    return async (dispatch) => {
      const { data: newStudent } = await axios.post('/api/students', student)
      console.log(newStudent)
      dispatch(addStudent(newStudent))
    }
  }

const studentsSlice = createSlice({
    name: 'students',
    initialState: {
        loading: false,
        students: [],
        student: {},
        error: ''
    },
    reducers: {
        addStudent: (state, action) => {
            const newStudent = action.payload
            state.students.push(newStudent)
        },
        removeStudent: (state, action) => {
            const studentId = action.payload
            state.students = state.students.filter((student) => student.id !== Number(studentId))
            return state
        }
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

export const { addStudent, removeStudent } = studentsSlice.actions
export default studentsSlice.reducer