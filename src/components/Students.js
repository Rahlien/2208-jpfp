import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getStudents } from '../features/studentsSlice'


function Students() {
    const students = useSelector(state => state.students)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getStudents())
    }, [])

    return (
        <div>
            <h1>All Students</h1>
            {students.loading && <div>Loading...</div>}
            {!students.loading && students.error ? <div>Error: {students.error}</div>: null}
            {!students.loading && students.students.length ? (
                <ul id='students'>
                    {
                        students.students.map(student => (
                            <li key={student.id} id="singleStudent"> 
                                <Link to={`/students/${student.id}`} >
                                    <img src={student.imageUrl} alt={`${student.name} Image`} width="150" height="150"/>
                                    <h4>{`${student.firstName} ${student.lastName}`}</h4>
                                </Link>
                            </li>
                            
                        ))
                    }
                </ul>
            ): null}
        </div>
    )
}

export default Students