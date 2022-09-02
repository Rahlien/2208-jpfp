import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Navigate, Link } from 'react-router-dom'
import { deleteCampus, getCampus } from '../features/campusSlice'
import { getStudents } from '../features/studentsSlice'


function SingleCampus() {
    const params = useParams()
    const dispatch = useDispatch()
    const {campus} = useSelector(state => state.campuses)
    const { students } = useSelector(state => state.students)
    const [deleted, setDeleted] = useState(false)
    const id = Number(params.id)

    useEffect(() => {
        dispatch(getStudents())
    }, [])
    
    useEffect(() => {
        dispatch(getCampus(id))
    }, [])

    const handleDelete = () => {
        dispatch(deleteCampus(campus.id))
        setDeleted(true)
    }

    function studentsCheck () {
        const collegeStudents = students.filter(student => student.campusId === campus.id)

        if (collegeStudents) {
            return (
                <>
                <h3>Enrolled Students</h3>
                <ul id="collegeStudents">   
                    {collegeStudents.map(student => (
                        <li key={student.id} id="singleStudent"> 
                            <Link to={`/students/${student.id}`} >
                                <img src={student.imageUrl} alt={`${student.name} Image`} width="150" height="150"/>
                                <h4>{`${student.firstName} ${student.lastName}`}</h4>
                            </Link>
                        </li>  
                    ))}        
                    
                </ul>
                </>
            )    
        }
        return null
    }
    if(deleted) return <Navigate to='/campuses' />

    return (
        <div id='single-campus'> 
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} alt={`${campus.name} Image`} />
            <p>{campus.description}</p>
            <h4>{campus.address}</h4>
            {studentsCheck()}
            <button id='delete' onClick={handleDelete}>X</button>
        </div>
    )
}

export default SingleCampus
