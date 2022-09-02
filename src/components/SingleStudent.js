import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getStudent } from '../features/studentsSlice'
import SingleCampus from './SingleCampus'


function SingleStudent() {
    const params = useParams()
    const dispatch = useDispatch()
    const {student} = useSelector(state => state.students)
    
    useEffect(() => {
        dispatch(getStudent(params))
    }, [])

    console.log(student)

    function campusCheck () {
        if(student.campusId){
            return (<SingleCampus /> )
        }
        return null
    }

    return (
        <div id='single-student'> 
            <h1>{`${student.firstName} ${student.lastName}`}</h1>
            <img src={student.imageUrl} alt={`${student.firstName} Image`} />
            <h3>GPA: {student.gpa}</h3>
            {campusCheck()}
        </div>
    )
}

export default SingleStudent