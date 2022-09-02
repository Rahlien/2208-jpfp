import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCampus } from '../features/campusSlice'


function SingleCampus() {
    const params = useParams()
    const dispatch = useDispatch()
    const {campus} = useSelector(state => state.campuses)
    
    useEffect(() => {
        dispatch(getCampus(params))
    }, [])

    console.log(campus)

    return (
        <div id='single-campus'> 
            <h1>{campus.name}</h1>
            <img src={campus.imageUrl} alt={`${campus.name} Image`} />
            <p>{campus.description}</p>
            <h4>{campus.address}</h4>
        </div>
    )
}

export default SingleCampus
