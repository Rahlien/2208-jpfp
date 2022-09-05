import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Navigate, Link } from 'react-router-dom'
import { deleteCampus, getCampus } from '../features/campusSlice'
import { getStudents, updateStudent } from '../features/studentsSlice'
import EditCampus from './EditCampuses'


function SingleCampus() {
    const params = useParams()
    const dispatch = useDispatch()
    const {campus} = useSelector(state => state.campuses)
    const { students, loading, error } = useSelector(state => state.students)
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
    
    
    const handleClick = (e) => {

        const collegeStudent = students.filter(student => student.id === Number(e.target.value))[0]
        const newStudent = {...collegeStudent, campusId: null}
        dispatch(updateStudent(newStudent, newStudent.id))
        window.location.reload(false)
    }
    

    function studentsCheck () {

        const collegeStudents = students.filter(student => student.campusId === campus.id)
        

        if (collegeStudents) {
            return (
                <div >
                    <h2>Enrolled Students</h2>
                    <ul id="collegeStudents">   
                        {collegeStudents.map(student => (
                            <li key={student.id} id="singleStudent"> 
                                <Link to={`/students/${student.id}`} >
                                    <img src={student.imageUrl} alt={`${student.name} Image`} width="150" height="150"/>
                                    <h4>{`${student.firstName} ${student.lastName}`}</h4>
                                </Link>
                                <button value={student.id} onClick={handleClick}>Unenroll Student</button>
                            </li>  
                        ))}        
                        
                    </ul>
                </div>
            )    
        }
        return null
    }

    if(deleted) return <Navigate to='/campuses' />

    return (
        <div id="campus-container">
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error}</div>: null}
            {!loading && campus.id ? (
                <>
                    <div id='single-campus'> 
                        <h1>{campus.name}</h1>
                        <img src={campus.imageUrl} alt={`${campus.name} Image`} />
                        <p>{campus.description}</p>
                        <h4>{campus.address}</h4>
                        {studentsCheck()}
                        <button id='delete' onClick={handleDelete}>X</button>
                    </div>
                    <div id="editCampusContainer">{<EditCampus key={campus.id} campus={campus} />}</div>
                </>
            ):<h1>No such Campus Found</h1>}
        </div>
    )
}

export default SingleCampus
