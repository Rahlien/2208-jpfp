import React, { useState } from 'react';
import { addNewCampus } from '../features/campusSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NewCampus = ()=> {

  const [form, setForm] = useState({
    name: '',
    address: ''
  })

  const dispatch = useDispatch();

  const handleChange = (props) => (e) => {
    setForm({
      ...form,
      [props]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    function showError(form) {
      const error = document.getElementById('error1')
      let name = form.name
      let address = form.address

      if(name === '' || null || undefined){
        error.textContent= "College Name is Required"
        return false
      }
      if(address === '' || null || undefined){
        error.textContent="Address is Required"
        return false
      }
      error.textContent=""
      return true
    }
    
    if (showError(form)) dispatch(addNewCampus(form));
  }

  return (
    <form id='campus-form' onSubmit={handleSubmit}>
      <span id="error1"></span>
      <h3>Register a new Campus</h3>  
      <label htmlFor='name'>College Name:</label>
      <input onChange={handleChange('name')} name='taskName' value={form.name} />

      <label htmlFor='address'>Address:</label>
      <input onChange={handleChange('address')} name='address' value={form.address} />
      
      <label htmlFor='description'>Description:</label>
      <input onChange={handleChange('description')} name='description' value={form.description} />
      
      <label htmlFor='imageUrl'>Image URL:</label>
      <input onChange={handleChange('imageUrl')} name='imageUrl' value={form.imageUrl} />

      <button type='submit'>Submit</button>
    </form>
  );
}

export default NewCampus;