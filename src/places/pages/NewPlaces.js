import React from 'react'
import './NewPlaces.css'
import Input from '../../shared/components/FormElements/Input'

const NewPlaces = () => {
  return (
    <form className='place-form'>
      {/* <Input element="input" type="text" label="Title"/> */}
      <Input element="input" type="text" label="Title"/>
      
    </form>
  )
}

export default NewPlaces
