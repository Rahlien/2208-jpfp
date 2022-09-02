import React from "react";
import { Routes, Route } from 'react-router-dom'
import Campuses from "./components/Campuses";
import HomePage from "./components/HomePage";
import Nav from './components/Nav'
import SingleCampus from "./components/SingleCampus";
import SingleStudent from "./components/SingleStudent";
import Students from "./components/Students";

function App(){

    return (
        <div>
          <nav><Nav /></nav>
          <main>
            <Routes>
              <Route path= '/' element={<HomePage />} />
              <Route path='/campuses' element={<Campuses />} />
              <Route path='/campuses/:id' element={<SingleCampus />} />
              <Route path='/students' element={<Students />} />
              <Route path='/students/:id' element={<SingleStudent/>} />
            </Routes>
          </main>
        </div>
      );
}

export default App;