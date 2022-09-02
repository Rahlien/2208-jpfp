import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCampuses } from '../features/campusSlice'
import NewCampus from './NewCampus'


function Campuses() {
    const campuses = useSelector(state => state.campuses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCampuses())
    }, [])
    console.log(campuses.campuses)

    return (
        <div>
            <h1>All Campuses</h1>
            {campuses.loading && <div>Loading...</div>}
            {!campuses.loading && campuses.error ? <div>Error: {campuses.error}</div>: null}
            {!campuses.loading && campuses.campuses.length ? (
                <ul id='campuses'>
                    {
                        campuses.campuses.map(campus => (
                            <li key={campus.id} >
                                <Link to={`/campuses/${campus.id}`} >
                                    <img src={campus.imageUrl} alt={`${campus.name} Image`} width="300" height="250" />
                                    <h4>{campus.name}</h4>
                                </Link>
                            </li>  
                        ))
                    }
                </ul>
            ): null}
            <div id="campusForm">{<NewCampus />}</div>
           
        </div>
        
    )
}

export default Campuses