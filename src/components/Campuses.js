import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCampuses, deleteCampus } from '../features/campusSlice'
import NewCampus from './NewCampus'


function Campuses() {
    const { campuses, loading, error} = useSelector(state => state.campuses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCampuses())
    }, [])

    return (
        <>
        <h1>All Campuses</h1>
        <div id="campusesPage">
            {loading && <div>Loading...</div>}
            {!loading && error ? <div>Error: {error}</div>: null}
            {!loading && campuses.length ? (
                <ul id='campuses'>
                    {
                        campuses.map(campus => (
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