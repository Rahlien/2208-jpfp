import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useParams } from 'react-router-dom'
import { deleteStudent, getStudent } from '../features/studentsSlice'
import { getCampus } from '../features/campusSlice'
import SelectCampus from './SelectCampus'



function SingleStudent() {
    const params = useParams()
    const dispatch = useDispatch()
    const {student} = useSelector(state => state.students)
    const {campus} = useSelector(state => state.campuses)
    const [deleted, setDeleted] = useState(false)
    
    useEffect(() => {
        dispatch(getStudent(params))
    }, [])

    useEffect(() => {
        console.log(student.campusId)
        dispatch(getCampus(student.campusId))
    }, [])
    
    console.log(student)
    console.log(campus)

    function handleChange(e) {
        console.log(e.target.value)
    }
    
    function campusCheck () {
        if(student.campusId){
            return (
            <div id='single-campus'> 
                <h1>{campus.name}</h1>
                <img src={campus.imageUrl} alt={`${campus.name} Image`} />
            </div>
            )
        }
        return (
            <div id="selector-container">
                <h4>This student is not enrolled.</h4>
                <SelectCampus onChange={handleChange}/>
            </div>
        )   
    }
    
    const handleDelete = () => {
        dispatch(deleteStudent(student.id))
        setDeleted(true)
    }
    if(deleted) return <Navigate to='/students' />
    

    return (
        <div id='single-student'> 
            <h1>{`${student.firstName} ${student.lastName}`}</h1>
            <img src={student.imageUrl} alt={`${student.firstName} Image`} />
            <h3>GPA: {student.gpa}</h3>
            {campusCheck()}
            <button id='delete' onClick={handleDelete}>X</button>
        </div>
    )
}

export default SingleStudent