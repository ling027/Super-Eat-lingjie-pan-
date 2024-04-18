import { useState } from 'react'
import './Client.css'
import '../../../firebase/firebase'

function Home() {

  const  [inputValue, setInputValue] =  useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  
  const addDocument = (name) => {
  };

  const handleSubmit = (event) => {
    addDocument(event);
  }

  return (
    <>
      <div className = "Form">
        <p>Take Input</p>
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        <button type="submit" onClick={() => handleSubmit(inputValue)}>Submit</button>
      </div>
    </>
  )
}

export default Home
