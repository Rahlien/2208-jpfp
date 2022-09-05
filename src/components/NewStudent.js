import React, { useState } from 'react';
import { addNewStudent } from '../features/studentsSlice';
import { useDispatch } from 'react-redux';
import SelectCampus from './SelectCampus';

const NewStudent = ()=> {

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })

  const dispatch = useDispatch();

  const handleChange = (props) => (e) => {
    setForm({
      ...form,
      [props]: e.target.value
    })
  }

  

  const handleSubmit = (e) => {
    e.preventDefault()
    
    function showError(form) {
      const filter = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      const error = document.getElementById('error3')
      let email = form.email
      let firstName = form.firstName
      let lastName = form.lastName
  
      if(!email.match(filter)) {
        error.textContent="Please provide a valid e-mail address"
        return false
      }
      if(firstName === '' || null || undefined){
        error.textContent= "First Name is Required"
        return false
      }
      if(lastName === '' || null || undefined){
        error.textContent="Last Name is Required"
        return false
      }
      error.textContent=""
      return true
    }

    if (showError(form)) dispatch(addNewStudent(form));
  }


  return (
    <form id='student-form' onSubmit={handleSubmit}>
      <span id="error3"></span>
      <h3>Register New Student</h3>
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

export default NewStudent;