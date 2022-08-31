import React from "react";
import { Routes, Route } from 'react-router-dom'
import Campuses from "./components/Campuses";
import HomePage from "./components/HomePage";
import Nav from './components/Nav'
import Students from "./components/Students";

function App(){

    return (
        <div>
          <nav><Nav /></nav>
          <main>
            <Routes>
              <Route path= '/' element={<HomePage />} />
              <Route path='/campuses' element={<Campuses />} />
              <Route path='/students' element={<Students />} />
            </Routes>
          </main>
        </div>
      );
}

export default App;