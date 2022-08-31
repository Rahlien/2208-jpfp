import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getStudents } from '../features/studentSlice'


function Students() {
    const students = useSelector(state => state.students)
    const dispatch = useDispatch()
    console.log(students)
    console.log(students.students)

    useEffect(() => {
        dispatch(getStudents())
    }, [])

    return (
        <div>
            <h1>All Students</h1>
            {students.loading && <div>Loading...</div>}
            {!students.loading && students.error ? <div>Error: {students.error}</div>: null}
            {!students.loading && students.students.length ? (
                <div id='students'>
                    {
                        students.students.map(student => (
                            <div key={student.id}>
                                <img src={student.imageUrl} alt={`${student.name} Image`} width="150" height="150" />
                                <h4>{`${student.firstName} ${student.lastName}`}</h4>
                            </div>
                            
                        ))
                    }
                </div>
            ): null}
        </div>
    )
}

export default Students