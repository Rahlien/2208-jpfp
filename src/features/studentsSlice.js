import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getStudents = createAsyncThunk('students/getStudents', () => {
    return axios.get('/api/students')
        .then((res) => {
            return res.data
        })
})

export const getStudent = createAsyncThunk('students/getStudent', (id) => {
    return axios.get(`/api/students/${id}`)
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
      dispatch(addStudent(newStudent))
    }
  }
  
  export const updateStudent = (student, id) => {
    return async (dispatch) => {
      const { data: updatedStudent } = await axios.put(`/api/students/${id}`, student)
      dispatch(updateStudents(updatedStudent))
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
        },
        updateStudents: (state, action) => {
            state.students.map(student => student.id === action.payload.id ? student: action.payload)
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

export const { addStudent, removeStudent, updateStudents } = studentsSlice.actions
export default studentsSlice.reducer