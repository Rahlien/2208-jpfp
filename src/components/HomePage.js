import React from 'react'
import Campuses from './Campuses'
import Students from './Students'


function HomePage() {
    return (
        <main id="homePage">
            <h1>Home Page</h1>
            {<Campuses />}
            {<Students />}
        </main>
    )
}

export default HomePage