import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <>
           <h2><Link to="/">Home</Link></h2>
           <h2><Link to="/campuses">Campuses</Link></h2>
           <h2><Link to="/students">Students</Link></h2>
        </>
    )
}

export default Nav