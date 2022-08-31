import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCampuses } from '../features/campusSlice'


function Campuses() {
    const campuses = useSelector(state => state.campuses)
    const dispatch = useDispatch()
    console.log(campuses)
    console.log(campuses.campuses)

    useEffect(() => {
        dispatch(getCampuses())
    }, [])

    return (
        <div>
            <h1>All Campuses</h1>
            {campuses.loading && <div>Loading...</div>}
            {!campuses.loading && campuses.error ? <div>Error: {campuses.error}</div>: null}
            {!campuses.loading && campuses.campuses.length ? (
                <div id='campuses'>
                    {
                        campuses.campuses.map(campus => (
                            <div key={campus.id}>
                                <img src={campus.imageUrl} alt={`${campus.name} Image`} width="150" height="150" />
                                <h4>{campus.name}</h4>
                            </div>
                            
                        ))
                    }
                </div>
            ): null}
        </div>
    )
}

export default Campuses