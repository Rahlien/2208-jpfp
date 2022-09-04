import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useParams, Link } from 'react-router-dom'
import { deleteStudent, getStudent } from '../features/studentsSlice'
import EditStudent from './EditStudents'

function SingleStudent() {
    const params = useParams()
    const dispatch = useDispatch()
    const { student } = useSelector(state => state.students)
    const { campuses } = useSelector(state => state.campuses)
    const [deleted, setDeleted] = useState(false)
    const id = Number(params.id)
    
    useEffect(() => {
        dispatch(getStudent(id))
    }, [])
    
    function campusCheck (campusId) {
        let campus = campuses.filter(campus => campus.id === Number(campusId))[0]
        
        if(campus){
            return (
            <div id='single-campus'>
                <Link to={`/campuses/${campusId}`}> 
                    <h1>{campus.name}</h1>
                    <img src={campus.imageUrl} alt={`${campus.name} Image`} />
                </Link>
            </div>
            )
        }
        return (
            <div id="selector-container">
                <h4>This student is currently not enrolled.</h4>
            </div>
        )   
    }
    
    const handleDelete = () => {
        dispatch(deleteStudent(student.id))
        setDeleted(true)
    }
    if(deleted) return <Navigate to='/students' />
    

    return (
            <div id="student-container">
                <div id='single-student'> 
                <h1>{`${student.firstName} ${student.lastName}`}</h1>
                    <img src={student.imageUrl} alt={`${student.firstName} Image`} />
                    <h3>GPA: {student.gpa}</h3>
                    <button id='delete' onClick={handleDelete}>X</button>
                {campusCheck(student.campusId)}
                </div>
                <div id="editStudentContainer">{<EditStudent key={student.id} student={student}/>}</div>
            </div>
    )
}

export default SingleStudent