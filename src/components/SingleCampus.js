import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams, Navigate } from 'react-router-dom'
import { deleteCampus, getCampus } from '../features/campusSlice'


function SingleCampus() {
    const params = useParams()
    const dispatch = useDispatch()
    const {campus} = useSelector(state => state.campuses)
    const [deleted, setDeleted] = useState(false)
    console.log(params)
    
    useEffect(() => {
        console.log(params.id)
        dispatch(getCampus(params.id))
    }, [])

    const handleDelete = () => {
        dispatch(deleteCampus(campus.id))
        setDeleted(true)
    }
    if(deleted) return <Navigate to='/campuses' />

    console.log(campus)

    return (
        <div id='single-campus'> 
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} alt={`${campus.name} Image`} />
            <p>{campus.description}</p>
            <h4>{campus.address}</h4>
            <button id='delete' onClick={handleDelete}>X</button>
        </div>
    )
}

export default SingleCampus
