import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Navigate, useParams, Link } from 'react-router-dom'
import { deleteStudent, getStudent, enrollCollege, updateStudent } from '../features/studentsSlice'
import SelectCampus from './SelectCampus'



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


    function handleChange(e) {
        console.log(e.target.value)
        const collegeId = e.target.value
        dispatch(enrollCollege(collegeId))
    }
    
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
            {campusCheck(student.campusId)}
            <button id='delete' onClick={handleDelete}>X</button>
        </div>
    )
}

export default SingleStudent