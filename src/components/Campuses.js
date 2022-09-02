import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCampuses, deleteCampus } from '../features/campusSlice'
import NewCampus from './NewCampus'


function Campuses() {
    const campuses = useSelector(state => state.campuses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCampuses())
    }, [])

    return (
        <>
        <h1>All Campuses</h1>
        <div id="campusesPage">
            {campuses.loading && <div>Loading...</div>}
            {!campuses.loading && campuses.error ? <div>Error: {campuses.error}</div>: null}
            {!campuses.loading && campuses.campuses.length ? (
                <ul id='campuses'>
                    {
                        campuses.campuses.map(campus => (
                            <li key={campus.id} id='singleCampus'>
                                <Link to={`/campuses/${campus.id}`} >
                                    <img src={campus.imageUrl} alt={`${campus.name} Image`} width="300" height="250" />
                                    <h4>{campus.name}</h4>
                                </Link>
                                <button id='delete' onClick={()=>dispatch(deleteCampus(campus.id))}>X</button>
                            </li>  
                        ))
                    }
                </ul>
            ): null}
            <div id="campusForm">{<NewCampus />}</div>
           
        </div>
        </>
        
    )
}

export default Campuses