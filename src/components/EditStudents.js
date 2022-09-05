import React, { useEffect, useState } from 'react';
import { updateStudent } from '../features/studentsSlice';
import { useDispatch } from 'react-redux';
import SelectCampus from './SelectCampus';
import { Navigate, useParams } from 'react-router-dom';

const EditStudent = ({student})=> {
 
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const params = useParams()
  const id = params.id
  const dispatch = useDispatch();

  const handleChange = (props) => (e) => {
    setForm({
      ...form,
      [props]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if(!form.email){
      form.email = student.email
    }
    if(!form.lastName){
      form.lastName = student.lastName
    }

    if(!form.firstName){
      form.firstName = student.firstName
    }


    function showError(form) {
      const filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      const error = document.getElementById('error2')
      let email = form.email
  
      if(!email.match(filter)) {
        error.textContent="Please provide a valid e-mail address"
        return false
      }
      error.textContent=""
      return true
    }  
      

    if (showError(form)) {
      dispatch(updateStudent(form, id))
      window.location.reload(false)
    } 
}

  return (
    <form id='studentEdit-form' onSubmit={handleSubmit}>
      <span id="error2"></span>
      <h3>Edit this Student's Info</h3>
      <label htmlFor='firstName'>First Name:</label>
      <input onChange={handleChange('firstName')} name='firstName' value={form.firstName} />

      <label htmlFor='lastName'>Last Name:</label>
      <input onChange={handleChange('lastName')} name='lastName' value={form.lastName} />
      
      <label htmlFor='email'>E-mail:</label>
      <input onChange={handleChange('email')} name='email' value={form.email} />
      
      <label htmlFor='gpa'>GPA:</label>
      <input onChange={handleChange('gpa')} name='gpa' value={form.gpa} />
      
      <label htmlFor='imageUrl'>Image URL:</label>
      <input onChange={handleChange('imageUrl')} name='imageUrl' value={form.imageUrl} />

      <label htmlFor='campusId'>College Selection:</label>  
      <SelectCampus onChange={handleChange('campusId')} name="campusId" value={form.campusId} />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default EditStudent;