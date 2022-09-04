import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteStudent, getStudents } from '../features/studentsSlice'
import NewStudent from './NewStudent'


function Students() {
    const { students, loading, error } = useSelector((state) => state.students)
    const dispatch = useDispatch()
 
    useEffect(() => {
        dispatch(getStudents())
    }, [])

    return (
        <>
        <h1>All Students</h1>
        <div id="studentsPage">
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error}</div>: null}
            {!loading && students.length ? (
                <ul id='students'>
                    {
                        students.map(student => (
                            <li key={student.id} id="singleStudent"> 
                                <Link to={`/students/${student.id}`} >
                                    <img src={student.imageUrl} alt={`${student.name} Image`} width="150" height="150"/>
                                    <h4>{`${student.firstName} ${student.lastName}`}</h4>
                                </Link>
                                <button id='delete' onClick={()=>dispatch(deleteStudent(student.id))}>X</button>
                            </li>
                            
                        ))
                    }
                </ul>
            ): null}
            <div id="studentForm">{<NewStudent />}</div>
        </div>
        </>
    )
}

export default Students